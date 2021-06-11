import React, { useState } from 'react'
import ButtonSection from '../Components/ButtonSection'
import Input from '../Components/Input'
function Form() {
    const [inputs, setInputs] = useState({
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        password: '',
        gender:''
    });
    const [isValid,setIsValid]=useState(false)
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


    const handleSubmit = () => {
        if (inputs.first_name.length <= 2 || inputs.first_name.length >= 10) {
            setInputError({ first_name_error:'Firstname Error' })
            setIsValid(false)
        }
        if (inputs.last_name.length <= 2 || inputs.last_name.length >= 10) {
            setInputError({  last_name_error:'lastName Error' })
            setIsValid(false)
        }
        var phoneno = /^\d{10}$/;
        if (!inputs.mobile.match(phoneno)) {
            setInputError({mobile_error:'Mobile Error' })
            setIsValid(false)
        }
        var email_reg ="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
        if(!inputs.email.match(email_reg)){
            setInputError({email_error:'Email Error' })
            setIsValid(false)
        }
        var pass='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        if(!inputs.password.match(pass)){
            setInputError({password_error:'PAssword Error' })
            setIsValid(false)
        }
        else{
            setIsValid(true)
        }
        if(isValid === true){
            setItems((oldItems) => {
                return [...oldItems, inputs]
            })
            setInputs({
                first_name:'',
                last_name:'',
                email:'',
                gender:'',
                mobile:'',
                password:''
            })
        }
        
        
    }
    const handleDelete=(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((item,index)=>{
                return index!==id

            })
        })
    }

    return (
        <div>
            <div>
                <label className='first_name' >FirstName</label>
                <Input name='first_name' value={inputs.first_name} type='text' onChange={handleInputChange} />
    <label>{inputError.first_name_error}</label>
            </div>
            <div>
                <label className='last_name' >LastName</label>
                <Input name='last_name' type='text' value={inputs.last_name} onChange={handleInputChange} />
                <label>{inputError.last_name_error}</label>
            </div>

            <div>
                <label className='male' >Male</label>
                <Input name='gender' value='male' type='radio' onChange={handleInputChange} />
                <label className='female' >Female</label>
                <Input name='gender' value='female' type='radio' onChange={handleInputChange} />
            </div>
            <div>
                <label className='email' >Email</label>
                <Input name='email' type='email' value={inputs.email} onChange={handleInputChange} />
                <label>{inputError.email_error}</label>
            </div>
            <div>
                <label className='mobile' >Mobile</label>
                <Input name='mobile' type='number' value={inputs.mobile} onChange={handleInputChange} />
                <label>{inputError.mobile_error}</label>
            </div>
            <div>
                <label className='password' >Password</label>
                <Input name='password' type='text' value={inputs.password} onChange={handleInputChange} />
                <label>{inputError.password_error}</label>
            </div>
            <div>
                <ButtonSection name='Signup' value='Signup' type='submit' onClick={() => handleSubmit()} />
            </div>
            {isValid  &&  <table>
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

                    {items.map((item,index) => {
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
            </table>}
           
        </div>
    )
}

export default Form;
