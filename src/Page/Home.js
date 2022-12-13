import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Home() {
    const [list, setList] = useState([])
    const [member, setMember] = useState([])

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [action, setAction] = useState('')

    useEffect(() => {
        getAll()
    }, [])

    let getAll = () => {
        axios.get('http://localhost:3001/students')
            .then(res => {
                setList(res.data)
            })
    }

    const showEdit = (id) => {
        setId(id)
        axios.get(`http://localhost:3001/students/${id}`)
            .then(res => {
                console.log("data ", res.data)
                setMember(res.data)
                setName(res.data.name)
                setDescription(res.data.description)
                setAction(res.data.action)
            })
    }

    const handleSave = () => {
        let values = {
            id: id,
            name: name,
            description: description,
            action: action
        }
        axios.put(`http://localhost:3001/students/${id}`, values).then(() => {
            setId('')
            setName('')
            setDescription('')
            setAction('')
            getAll()
            alert('Save Done')
        })
                                                                                                                                                            }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/students/${id}`)
            .then(() => {
                alert('Delete done')
                getAll()
            })
    }

    return (
        <>
            <h1>Home Page</h1>
            <h3>Edit </h3>
            <input type="text"
                   onChange={event => setName(event.target.value)}
                   value={name}
            />
            <input type="text"
                   onChange={event => setDescription(event.target.value)}
                   value={description}
            />
            <input type="text"
                   onChange={event => setAction(event.target.value)}
                   value={action}
            />
            <button onClick={handleSave}>Save</button>

            <h3>List Member</h3>
            <table>
                <tbody>
                {list.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.action}</td>
                        <td>
                            <button onClick={() => {
                                showEdit(item.id)
                            }}>Edit
                            </button>
                        </td>
                        <td>
                            <button onClick={() => {
                                handleDelete(item.id)
                            }}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}