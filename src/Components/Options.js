import React from 'react'

export default function Options({currQues,opts,validateChoice}) {

    let options=[];
    
    let count=4;
    let i=currQues;
    while(count>0)
    {
        options.push(opts[i%4]);    
        i++;
        count--;
    }

    console.log("Correct - answer",opts[0]);

    return (
        <div className="options-block">
            {
                options.map((opt,index) => 
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
