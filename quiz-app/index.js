//simple Quiz Application in core javacript by Ghayyas Mubashir


var quizIndex = 0; //Creating quizIndex which by default Zero
var correct = 0;  //Number of correct Answers

                      /** Quiz Array  */
var quizArray = [                                          
    {
        id: 0,
        question: 'what is your name',
        op1: 'ghayyas',
        op2: 'Atta',
        op3: 'mughal',
        correctAnwer: 'ghayyas'
    },
    {
        id: 1,
        question: 'what is your city',
        op1: 'karachi',
        op2: 'multan',
        op3: 'faisalabad',
        correctAnwer:'karachi'
    },
    {
        id: 2,
        question: 'what is your fathers name',
        op1: 'ahmed',
        op2: 'saleem',
        op3: 'mughal',
        correctAnwer: 'ahmed'
    }
];


        window.onload = function(){
                        document.querySelector('score').setAttribute('style','visibility:hidden');
                        document.getElementById('quizStarted').setAttribute('style','visibility:hidden');
                      }
                      
                  //Start Quiz    
                        
  function startQuiz(){
             var b = document.getElementById("nextBtn"); 

                b.setAttribute("disabled", "disabled");
                  
            document.getElementById('startBtn').setAttribute('style','visibility:hidden');
            document.getElementById('quizStarted').setAttribute('style','visibility:visible');
            document.getElementById('questions').innerHTML = quizArray[0].question;
            document.getElementById('option1').innerHTML = quizArray[0].op1;
            document.getElementById('op1').value = quizArray[0].op1;
            document.getElementById('option2').innerHTML = quizArray[0].op2;
            document.getElementById('op2').value = quizArray[0].op2;
            document.getElementById('option3').innerHTML = quizArray[0].op3;
            document.getElementById('op3').value = quizArray[0].op3;  
}


   function enableNextBtn(){
              var radioName =  document.querySelector('input[name="radio"]:checked');
                   if(radioName){
                      var b = document.getElementById("nextBtn"); 
                          b.removeAttribute("disabled", "disabled");
                   }
}

 function next(){
     quizIndex = quizIndex+1;
     
     var correctAnwer = quizArray[quizIndex-1].correctAnwer;
     
    var radioName =  document.querySelector('input[name="radio"]:checked').value;
    
    if(radioName == correctAnwer){
        correct++;
    }
    else{
        correct;
    }
     if(quizArray[quizIndex] !== undefined){
         
     document.getElementById('questions').innerHTML = quizArray[quizIndex].question;
     document.getElementById('option1').innerHTML = quizArray[quizIndex].op1;
     document.getElementById('op1').value = quizArray[quizIndex].op1;
     document.getElementById('option2').innerHTML = quizArray[quizIndex].op2;
     document.getElementById('op2').value = quizArray[quizIndex].op2;
     document.getElementById('option3').innerHTML = quizArray[quizIndex].op3; 
     document.getElementById('op3').value = quizArray[quizIndex].op3;  
     }
     else{
             var correctAns =  correct / quizArray.length * 100;
             var score = document.getElementById('score').innerHTML = Math.round(correctAns);
             document.getElementById('quizStarted').setAttribute('style','visibility:hidden');
             document.querySelector('score').setAttribute('style','visibility:visible');
     }
     
     
     
     
    /**
     * 
     * mai hon atta rakhta hon sb ka pta.
     * main hon mugal krta hon khoob shugal.
     * main hon mateen mjhe chahiye foreign teen
     * main hon mani mene kabhi kisi ki na mani..
     * main hon mavia niklata hon dosron ki khamiyan..
     * main hon haider nhn lagta kesi se dar.
     * main hon danish krta hon bs photoshop ki malish.  
     * 
     */
    
 }

