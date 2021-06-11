import React from 'react'

function ButtonSection({name,type,value,onClick}){
    return(
        <div>
            <button
              name={name}
              type={type}
              value={value}
              onClick={onClick}
    >{value}</button>
        </div>
    )
}

export default ButtonSection;