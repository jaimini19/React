import React, { useState } from 'react'
import ButtonSection from '../Components/ButtonSection'
import Input from '../Components/Input'
import './Form.css'
function Form() {
    const [inputs, setInputs] = useState({
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        password: '',
        gender:''
    });
    
    const [inputError, setInputError] = useState({
        first_name_error: '',
        last_name_error: '',
        email_error: '',
        mobile_error: '',
        password_error: '',
            });
    const [items, setItems] = useState([])

    const [isValid,setIsValid]=useState(true)

    const handleInputChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };


   const  handleValidate = () => {
      var first_name_error= '';
      var last_name_error= '';
      var  email_error= '';
       var mobile_error='';
       var password_error = '';
        var phoneno = /^\d{10}$/;
        var email_reg ="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
        var pass='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        if (inputs.first_name.length <= 2 || inputs.first_name.length >= 10) {
            setIsValid(false);
            first_name_error='Firstname Error'
            
        }
        if (inputs.last_name.length <= 2 || inputs.last_name.length >= 10) {
            setIsValid(false);
           
            last_name_error='lastName Error' 
        }
        
        if (!inputs.mobile.match(phoneno)) {
            setIsValid(false);
            mobile_error='Mobile Error' 
        }
       
        if(!inputs.email.match(email_reg)){
          setIsValid(false);
           email_error='Email Error'
        }
        
        if(!inputs.password.match(pass)){
            setIsValid(false);
           password_error='PAssword Error' 

        }
        setInputError({
            first_name_error:first_name_error,
            last_name_error:last_name_error,
            email_error:email_error,
            mobile_error:mobile_error,
            password_error:password_error
        })
        return isValid;
    }
    const handleSubmit=()=>{
        if(handleValidate()){
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
        else{
            alert('please fill the form correclty')
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
        <div className="form">
            <div className="input">
                <label className='first_name' >FirstName</label>
                <Input name='first_name' value={inputs.first_name} type='text' onChange={handleInputChange} />
                <span style={{color: "red"}}>{inputError.first_name_error}</span>
            </div>
            <div>
                <label className='last_name' >LastName</label>
                <Input name='last_name' type='text' value={inputs.last_name} onChange={handleInputChange} />
                <span style={{color: "red"}}>{inputError.last_name_error}</span>
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
                <span style={{color: "red"}}>{inputError.email_error}</span>
            </div>
            <div>
                <label className='mobile' >Mobile</label>
                <Input name='mobile' type='number' value={inputs.mobile} onChange={handleInputChange} />
                <span style={{color: "red"}}>{inputError.mobile_error}</span>
            </div>
            <div>
                <label className='password' >Password</label>
                <Input name='password' type='text' value={inputs.password} onChange={handleInputChange} />
                <span style={{color: "red"}}>{inputError.password_error}</span>
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
