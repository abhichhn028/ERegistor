import React, { useState} from 'react';

import '../Components/Home.Module.css';


const Home = () => {

    const [user, setUser] = useState({
        empid: "",
        name: "",
        email: "",
        contactno: "",
        pname: "",
        vdate: "",
        visiting: "",
    });

    let name, value;

    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    }

    const postData = (e) => {
        e.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ empid: user.empid, name: user.name, email: user.email, contactno: user.contactno, pname: user.pname, vdate: user.vdate, visiting: user.visiting }),
        };

        const response = fetch("https://eregistor-default-rtdb.firebaseio.com/idmregistor.json", requestOptions)

        if (response) {
            { alert("Thanks " + user.name + " For Contacting IDM.."); }
        }
        if (response) { setUser({ empid: "", name: "", email: "", contactno: "", pname: "", vdate: "", visiting: "" }) }

    }
    return (
        <div className="body">
            <div className="wrap-contact">
                <form action="" className="contact-form">
                    <div className="input-row">
                        <div className="wrap-input">
                            <span className="label-input">
                                Emp ID
                                </span>
                            <input onChange={getUserData} className="input100" type="text" name="empid" value={user.empid} placeholder="Enter Your EmpID."
                                autoComplete="off" required />
                        </div>

                        <div className="wrap-input">
                            <span className="label-input">
                                Name
                                </span>
                            <input onChange={getUserData} className="input100" type="text" name="name" value={user.name} placeholder="Enter Your Name."
                                autoComplete="off" required />

                        </div>


                        <div className="wrap-input">
                            <span className="label-input">
                                Email
                                </span>
                            <input onChange={getUserData} className="input100" type="text" name="email" value={user.email} placeholder="Enter Your Email."
                                autoComplete="off" required />

                        </div>
                    </div>
                    <div className="input-row">
                        <div className="wrap-input">
                            <span className="label-input">
                                Contact No.
                                </span>
                            <input onChange={getUserData} className="input100" type="text" name="contactno" value={user.contactno} placeholder="Enter Your Phone No."
                                autoComplete="off" required />

                        </div>


                        <div className="wrap-input">
                            <span className="label-input">
                                Project name
                                </span>
                            <input onChange={getUserData} className="input100" type="text" name="pname" value={user.pname} placeholder="Enter Your Project Name."
                                autoComplete="off" required />
                        </div>


                        <div className="wrap-input">
                            <span className="label-input">
                                Visiting Date
                                </span>
                            <input className="input100" onChange={getUserData} type="date" name="vdate" value={user.vdate} placeholder="Enter Visiting Date"
                                autoComplete="off" required />
                        </div>
                    </div>

                    <div className="input-row">
                        <div className="wrap-input">
                            <span className="label-input">
                                Purpose Of Visiting
                                </span>
                            <input onChange={getUserData} className="input100 input200" type="text" name="visiting" value={user.visiting}
                                placeholder="Enter Purpose of Visiting" autoComplete="off" required />
                        </div>
                    </div>
                    <div className="btn">
                        <button onClick={postData}>Submit</button>
                    </div>
                </form>
            </div>
            <p>For any query contact <span>+91-120616-2222</span></p>
        </div>
    )
}
export default Home;
