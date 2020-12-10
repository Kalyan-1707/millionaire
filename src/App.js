import React,{useState,useEffect} from 'react';
import {Fetch} from './Components/Fetch';
import Quiz from './Components/Quiz';
import Nav from './Components/Nav';
import './App.css';
import Confetti from 'react-confetti';



function App() {

  const [apiData,setApiData] = useState("");
  
  const [easyQues,setEasyQues] = useState("");
  const [medQues,setMedQues] = useState("");
  const [hardQues,setHardQues] = useState("");

  const [currQues,setCurrQues] = useState(0);

  const [amountWon,setamountWon] = useState(0);
  const [isCompleted,setIsCompleted] = useState(false);

  


  const amountPerQues = [
                         "0",
                         "5,000",
                         "10,000",
                         "20,000",
                         "40,000",
                         "80,000",
                         "1,60,000",
                         "3,20,000",
                         "6,40,000",
                         "12,50,000",
                         "25,00,000",
                         "50,00,000",
                        "1,00,00,000",
                        "3,00,00,000",
                        "7,00,00,000",
                        "15,00,00,000"
                      ];
  
  useEffect(() => {

   if(localStorage.getItem("apiData")){
     setApiData(() => JSON.parse(localStorage.getItem("apiData")));
   }

   //call for easy ques
   Fetch("easy",(res) => {
    setEasyQues(() => res);
   });
   
   //call for medium ques
   Fetch("medium",(res) => {
    setMedQues(() => res);
   });

   //call for hard ques
    Fetch("hard",(res) => {
    setHardQues(() => res);
   });

  }, [])




  useEffect(() => {

    if(easyQues && medQues && hardQues){
      const data = [...easyQues,...medQues,...hardQues];
      setApiData(() => data);
     }
    
  }, [easyQues,medQues,hardQues]);


  function updateDashBorad(isCorrect) {
    
    const elt = document.querySelector(`#ques-${currQues+1}-dash-id`);

    elt.classList.remove("active");

    isCorrect?elt.classList.add("correct"):elt.classList.add("attempted");


  }

  function onClickQuit() {
      setamountWon(() => amountPerQues[currQues]);
      setIsCompleted(() => true);
  }

  function toggleMenu(){

    const elt=document.querySelector(".right-block");
  
    if(elt.style.display === "none" || !elt.style.display){
      elt.style.display = "block";
    }
    else{
      elt.style.display = "none";
    }

  }

  function updateOptions() {
     
    for(let i=0;i<4;i++)
    {
      let temp=document.querySelector(`#ques-${currQues}-opt-${i}`);
        if(temp.value === apiData[currQues]["correct_answer"]){
          temp.classList.add("correct-option");
        }
    }
  }

  function validateChoice(event) {
    
    const selectedChoice = event.target.value;


    if(selectedChoice === apiData[currQues]["correct_answer"]){
      if(currQues === 4 || currQues === 9 || currQues === 14){
        setamountWon(() => amountPerQues[currQues+1]);
      }
      updateDashBorad(true);

      if(currQues === 14){
        onClickQuit();
        return;
      }
      document.querySelector("#next-btn").style.display="block";
    }

    else{
      updateDashBorad(false);
      setIsCompleted(() => true);
    }

    updateOptions();


   
  }

  function onClickNext(){

     document.querySelector("#next-btn").style.display="none";

    const elt = document.querySelector(`#ques-${currQues+2}-dash-id`);

    elt.classList.add("active");
  
    setCurrQues((prevState) => prevState+1);

  }

  //Google LifeLine
  function LifeLine1(event) {
    const newWind = window.open("https://www.google.com/");
    setTimeout(() => {
      newWind.close();
    }, 15000);
    event.target.disabled=true;
  }

  // 50 50 Life line
  function LifeLine2(event){
    let incorrect_answers = apiData[currQues]["incorrect_answers"];
    incorrect_answers = incorrect_answers.sort(() => Math.random() - 0.5);
    console.log(incorrect_answers);

    for(let i=0;i<4;i++)
    {
      let temp=document.querySelector(`#ques-${currQues}-opt-${i}`);
      console.log(temp);
        if(temp.value === incorrect_answers[0] || temp.value === incorrect_answers[1]){
          temp.innerText="";
          temp.value="";
          temp.disabled=true;
        }
    }
    event.target.disabled=true;
  }


  return (
    <div> 
      <Nav toggleMenu={toggleMenu}/>
      {!apiData && <div>Loading</div>}
      {
        apiData 
          && 
        <Quiz
            currQues={apiData[currQues]}  
            id={currQues} 
            onClickNext={onClickNext} 
            validateChoice={validateChoice} 
            LifeLine1={LifeLine1}
            LifeLine2={LifeLine2}
            onClickQuit={onClickQuit}
          />
        }

        {
          isCompleted
            &&
         <Confetti
          width={1200}
          height={600}
          />
        }
        {
          isCompleted
            &&
          <div className="modal">
            <p>Congratualtions,<br/>
             You won <br/>
            {amountWon}
            </p>
            <button onClick={() => window.location.reload()}>Play again</button> 
          </div>
        }
    </div>
  );

 

}


export default App;
