import React, { useEffect, useState } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import '../Components/UserData.Module.css';


const UserData = () => {

    const [ausers, setaUsers] = useState([]);
    const[loading,setIsLoading]=useState(false);
    async function fetchMoviesHandler() {
        
        setIsLoading(true);
        const response = await fetch("https://eregistor-default-rtdb.firebaseio.com/idmregistor.json");
        const data = await response.json();

        const loadedUser = [];

        for (const key in data) {
            loadedUser.push({
                id: key,
                empid: data[key].empid,
                name: data[key].name,
                email: data[key].email,
                contactno: data[key].contactno,
                pname: data[key].pname,
                vdate: data[key].vdate,
                visiting: data[key].visiting,
            })
        }
        setaUsers(loadedUser);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchMoviesHandler();
    }, [])



    return (
        <div className="body">

            <ReactHTMLTableToExcel
            className="excel-btn"
            table="emp-tab"
            filename="UserData"
            sheet="Sheet"
            buttonText="Export To Excel"/>
            <table className="content-table" id="emp-tab">
                <thead>
                    <tr>
                        <th>Emp ID</th>
                        <th>Name</th>
                        <th>Contact No.</th>
                        <th>Email</th>
                        <th>Project Name</th>
                        <th>Purpose of Visiting</th>
                        <th>Visiting Date</th>
                    </tr>
                </thead>
                <tbody className="tabBody">   
                    {ausers.map(dd => (
                        <tr key={dd.id}>
                            <td>{dd.empid}</td>
                            <td>{dd.name}</td>
                            <td>{dd.contactno}</td>
                            <td>{dd.email}</td>
                            <td>{dd.pname}</td>
                            <td>{dd.visiting}</td>
                            <td>{dd.vdate}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default UserData;