import React from 'react';

export default function WithParameter(props){
    const status = props.nota >=9.5 ? 'Approved' : 'Chumbreidrieds'
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.aluno} tem nota {props.nota} e está {status}</p> 
        </div>
    )
}