import React from 'react'

export default function DashBorad({onClickQuit}) {
    return (
        <div className="dashboard-block">
            <span  id={`ques-1-dash-id`}>1 : ₹ 5,000</span>
            <span  id={`ques-2-dash-id`}>2 : ₹ 10,000</span>
            <span  id={`ques-3-dash-id`}>3 : ₹ 20,000</span>
            <span id={`ques-4-dash-id`}>4 : ₹ 40,000</span>
            <span id={`ques-5-dash-id`}>5 : ₹ 80,000</span>
            <span id={`ques-6-dash-id`}>6 : ₹ 1,60,000</span>
            <span id={`ques-7-dash-id`}>7 : ₹ 3,20,000</span>
            <span id={`ques-8-dash-id`}>8 : ₹ 6,40,000</span>
            <span id={`ques-9-dash-id`}>9 : ₹ 12,50,000</span>
            <span id={`ques-10-dash-id`}>10 : ₹ 25,00,000</span>
            <span id={`ques-11-dash-id`}>11 : ₹ 50,00,000</span>
            <span id={`ques-12-dash-id`}>12 : ₹ 1,00,00,000</span>
            <span id={`ques-13-dash-id`}>13 : ₹ 3,00,00,000</span>
            <span id={`ques-14-dash-id`}>14 : ₹ 7,00,00,000</span>
            <span id={`ques-15-dash-id`}>15 : ₹ 15,00,00,000</span>
            <button onClick={() => onClickQuit()}>Quit</button>            
        </div>
    )
}
