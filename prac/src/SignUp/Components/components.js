import React from 'react'

export function ButtonSection({name,type,value,onClick}){
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

export function Input({type,value,onChange,name}){
    return(
        <div>
           
          <input  name={name} type={type} value={value} onChange={onChange} />
        </div>
    )
}
export function Label({name,value}){
    return(
        <div>
           
    <label className={name} >{value}</label>
        </div>
    )
}

