import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Create from "./Page/Create";

function App() {
    return (
        <div>
            <nav>
                <Link to={'/'}>Login |</Link>
                <Link to={'/home'}>Home |</Link>
                <Link to={'/create'}>Create</Link>
            </nav>
            <Routes>
                <Route path={'/'} element={<Login></Login>}></Route>
                <Route path={'/home'} element={<Home></Home>}> </Route>
                <Route path={'/create'} element={<Create></Create>}></Route>
            </Routes>
        </div>
);
}

export default App;
