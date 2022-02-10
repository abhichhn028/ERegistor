import React from 'react';
import '../Components/NavBar.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import UsersData from './UsersData';

const NavBar = () => {

    return (
        <Router>
            <div className="parent">
                <div className="child">

                    <div className="header">
                        <div className="heading">
                            <h4>ELECTRONIC-REGISTOR</h4>
                        </div>
                        <div className="nav-links">
                            <ul>
                                <li><Link className="ap" to="/load">Saved Contact</Link></li>
                                <li><Link className="as" to="/create">Create Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <Routes>
                        <Route path='/load' element={<UsersData/>}></Route>
                        <Route exact path='/create' element={<Home/>}></Route>
                    </Routes>
                </div>
            </div>

        </Router>
    )
}

export default NavBar;