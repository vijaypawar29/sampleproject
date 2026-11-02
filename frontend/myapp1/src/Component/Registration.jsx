
import React, { useState } from "react";
import axios from "axios";
import "./Registration.css";

function Registration() {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:9191/registration/save",
                formData
            );

            alert("Registration Successful!");

            console.log(response.data);

            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                password: ""
            });

        } catch (error) {

            console.log("Error:", error);
            alert("Registration Failed!");

        }
    };

    return (

        <div className="container">

            <h2>Registration Form</h2>

            <form onSubmit={handleSubmit}>

                <label>First Name</label>
                <input
                    type="text"
                    name="firstname"
                    placeholder="Enter First Name"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                />

                <label>Last Name</label>
                <input
                    type="text"
                    name="lastname"
                    placeholder="Enter Last Name"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Save</button>

            </form>

        </div>

    );
}

export default Registration;
