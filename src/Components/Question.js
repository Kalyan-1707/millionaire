import React from 'react'

export default function Question({ques,id}) {
    return (
        <div>
        <span className="ques-border">
        <p>Question {id+1}</p>
        </span>

        <div className="ques-border"> 
            <p>{ques}</p>
        </div>  
        </div>
    )
}
