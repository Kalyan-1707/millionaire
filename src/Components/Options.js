import React from 'react'

export default function Options({currQues,opts,validateChoice}) {
        console.log("Correct answer - ",opts[0]);
        opts = opts.sort(() => Math.random() - 0.5);
    return (
        <div className="options-block">
            {
                opts.map((opt,index) => 
                         <button  
                            key={`ques-${currQues}-opt-${index}`} 
                            id={`ques-${currQues}-opt-${index}`} 
                            value={opt} 
                            onClick={(Event) => validateChoice(Event)} 
                            dangerouslySetInnerHTML={{__html: opt}}>
                         </button>)
            }
        </div>
    )
}
