const n1 =Math.ceil(Math.random()*10);
const n2 =Math.ceil(Math.random()*10);
const formEl= document.getElementById("form");
let score =JSON.parse( localStorage.getItem("score"));
if(!score){
    score = 0 ;
}
const questionEl= document.getElementById("question");
const inputEl= document.getElementById("input");
questionEl.innerText=`What is ${n1} times ${n2} ?`;

const correctAns = n1 * n2 ; 

formEl.addEventListener("submit",()=>{
    const userAns = +inputEl.value ;
    if(userAns===correctAns) {
        score++;
        updateLocalStorage()
    } else {
        score--;
        updateLocalStorage()
    }

    
    

});
function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
};











   
   



