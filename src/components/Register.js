import React, { useState } from "react";
import { Link } from 'react-router-dom'
import {
    MDBContainer,
    MDBInput,
    MDBBtn
} from "mdb-react-ui-kit";


export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        lname: "",
        mail: "",
        pwd: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:4000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <div className="text-center mb-4">
                <img style={{ width: '100px', height: 'auto' }} src="/img/ciclix.png" alt="" />
            </div>
            <form onSubmit={handleSubmit}>
                <MDBInput
                    wrapperClass="mb-4"
                    label="Nombre"
                    id="form1"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange} />
                <MDBInput
                    wrapperClass="mb-4"
                    label="Apellido"
                    id="form2"
                    name="lname"
                    type="text"
                    value={formData.lname}
                    onChange={handleChange} />
                <MDBInput
                    wrapperClass="mb-4"
                    label="Correo"
                    id="form3"
                    name="mail"
                    type="email"
                    value={formData.mail}
                    onChange={handleChange} />
                <MDBInput
                    wrapperClass="mb-4"
                    label="Contraseña"
                    id="form4"
                    name="pwd"
                    type="password"
                    value={formData.pwd}
                    onChange={handleChange} />
                <MDBBtn className="mb-4" type="submit">
                    Registrate
                </MDBBtn>
            </form>
            <div className="text-center">
                <Link to='/'>¿Ya tienes cuenta?</Link>
            </div>
        </MDBContainer>
    );
}