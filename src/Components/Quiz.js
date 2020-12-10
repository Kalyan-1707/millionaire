import React from 'react';
import Question from './Question';
import Options from './Options';
import DashBorad from './DashBorad';

export default function Quiz({currQues,onClickNext,id,validateChoice,LifeLine1,LifeLine2,onClickQuit}) {
    return (
        <div>
            <main>
                <div className="left-block">
                    <Question ques={currQues.question} id={id}/>
                    
                    <Options opts={[currQues["correct_answer"],...currQues["incorrect_answers"]]} validateChoice={validateChoice} currQues={id}/>
                   
                    <div className="lifelines-block">
                        <button onClick={(Event) => LifeLine1(Event)} id="life-line-google">Google</button>
                        <button onClick={() => onClickNext()} id="next-btn" style={{display:"none"}}>Next</button>
                        <button onClick={(Event) => LifeLine2(Event)} id="life-line-50-50">50 : 50</button>
                    </div>
                                        
                </div>
                <div className="right-block">
                  
                    <DashBorad onClickQuit={onClickQuit}/> 
                </div>
            </main>            
        </div>
    )
}
