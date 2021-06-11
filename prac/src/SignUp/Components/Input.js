import React from 'react'

function Input({name,type,value,onChange}){
    return(
        <div>
           
          <input name={name} type={type} value={value} onChange={onChange} />
        </div>
    )
}

export default Input;