import './App.css';
import {Switch, Route, Link} from "react-router-dom";
import Add from './Components/Add'
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "./Components/Admin";


function App() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/" className="navbar-brand">
                    full-stack
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link">
                            User
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/add"} className="nav-link">
                            Add
                        </Link>
                    </li>
                </div>
            </nav>

            <div className="container mt-3">
                <Switch>
                    <Route exact path={["/", ]} component={Admin} />*/}
                    <Route exact path="/add" component={Add}/>
                    {/*<Route path="/tutorials/:id" component={Tutorial} />*/}
                </Switch>
            </div>
        </div>
    );
}

export default App;
