import React, { useState } from 'react'
import { ButtonSection, Input } from '../Components/components'
import './Form.css'

function Form() {
    const [inputs, setInputs] = useState({
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        password: '',
        gender: ''
    });
    const [inputError, setInputError] = useState({
        first_name_error: '',
        last_name_error: '',
        email_error: '',
        mobile_error: '',
        password_error: '',
    });

    const [items, setItems] = useState([])

    const handleInputChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };
    const handleValidate = () => {
        const inputError= {
            first_name_error: '',
            last_name_error: '',
            email_error: '',
            mobile_error: '',
            password_error: '',
        };

        var phoneno = /^\d{10}$/;
        var email_reg = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
        var pass = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        if (inputs.first_name.length <= 2 || inputs.first_name.length >= 10) {
           inputError.first_name_error = 'Firstname Error'
        }
        if (inputs.last_name.length <= 2 || inputs.last_name.length >= 10) {
           inputError.last_name_error = 'lastName Error'
        }

        if (!inputs.mobile.match(phoneno)) {
            inputError.mobile_error = 'Mobile Error'
        }

        if (!inputs.email.match(email_reg)) {
            inputError.email_error = 'Email Error'
        }

        if (!inputs.password.match(pass)) {
            inputError.password_error = 'PAssword Error'
        }
        if (inputError.first_name_error ||inputError.last_name_error ||inputError.email_error ||
            inputError.mobile_error || inputError.password_error) {
            setInputError({
                first_name_error:inputError.first_name_error,
                last_name_error:inputError.last_name_error,
                email_error:inputError.email_error,
                mobile_error:inputError.mobile_error,
                password_error:inputError.password_error
            })
            return false;
        }
        else {
            return true
        }
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidate()) {
            console.log(inputs)
            setItems((oldItems) => {
                return [...oldItems, inputs]
            })
            setInputs({
                first_name: '',
                last_name: '',
                email: '',
                mobile: '',
                password: '',
                gender: '',

            })
            setInputError({
                first_name_error:'',
                last_name_error:'',
                email_error:'',
                mobile_error:'',
                password_error:''
            })
    }
}
    const handleDelete = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((item, index) => {
                return index !== id

            })
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form">

                <label className='label' >FirstName</label>
                <Input type='text' name='first_name' value={inputs.first_name} onChange={handleInputChange} />
                <span style={{ color: "red" }}>{inputError.first_name_error}</span>

                <label className='label' >LastName</label>
                <Input name='last_name'  value={inputs.last_name} type='text' onChange={handleInputChange} />
                <span style={{ color: "red" }}>{inputError.last_name_error}</span>

                <div className="radio">
                    <Input name='gender' value='male' type='radio' onChange={handleInputChange} />Male
                <Input name='gender' value='female' type='radio' onChange={handleInputChange} />Female
            </div>

                <label className='label' >Email</label>
                <Input name='email'  value={inputs.email} type='email' onChange={handleInputChange} />
                <span style={{ color: "red" }}>{inputError.email_error}</span>

                <label className='label' >Mobile</label>
                <Input name='mobile'  value={inputs.mobile} type='number' onChange={handleInputChange} />
                <span style={{ color: "red" }}>{inputError.mobile_error}</span>

                <label className='label' >Password</label>
                <Input name='password'  value={inputs.password} type='text' onChange={handleInputChange} />
                <span style={{ color: "red" }}>{inputError.password_error}</span>

                <div className="button">
                    <ButtonSection name='Signup' value='Signup' type='submit' />
                </div>

                <div className="table">
                    <table>
                        <tbody>
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>PhoneNo</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>

                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.password}</td>
                                        <td>
                                            {<ButtonSection name='Delete' value='Delete' type='submit' onClick={() => handleDelete(index)} />}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        </form>
    )
}

export default Form;
