import {Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";

export default function Create() {
    let navigate = useNavigate()
    const yupObject = Yup.object().shape({
        name: Yup.string().required(),
        description: Yup.string().required(),
        action: Yup.string().email()
    });
    const handleSubmit = (values) => {
        console.log(typeof values.name)
        console.log("value ", values)
        axios.post('http://localhost:3001/students', values)
            .then(()=>{
                alert("Create done")
                navigate('/home')
            })
    }

    return (
        <div>
            <h1>Create Products</h1>
            <Formik initialValues={
                {
                    name: '',
                    description: '',
                    action: ''
                }
            } onSubmit={values => handleSubmit(values)}
            >
                <Form>
                    <Field name={'name'}></Field>
                    <Field name={'description'}></Field>
                    <Field name={'action'}></Field>
                    <button>Create</button>
                </Form>
            </Formik>
        </div>
    )
}