let boxes=document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0=true;//playerX , playerO

/* let arr = ["apple","banana","litchi"];

let arr2 =[
    ["apple","litchi"],
    ["potato","mushroom"],
    ["pants","shirts"],
 ]; */

 const winPatterns = 
 [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
 ];
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
 boxes.forEach((box)=>
    {
    box.addEventListener("click",()=>{
       
       if(turn0){
        //player O
        box.innerText="O";
        turn0=false;
       }
       else{
        //player X
        box.innerText="X";
        turn0=true;
       }
       box.disabled=true;
       checkWinner();
    });
});


const disableBoxes = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner = (winner)=>{
    msg.innerText=`Congratulation , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

    const checkWinner= () => { 
        for( let pattern of winPatterns){
         let pos1Val = boxes[pattern[0]].innerText;/* this contain one of the winpattern array index 0 value */
         let pos2Val = boxes[pattern[1]].innerText;/* this contain one of the winpattern array index 1 value */
         let pos3Val = boxes[pattern[2]].innerText;/* this contain one of the winpattern array index 2 value */
          if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
                disableBoxes();
            }
          }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
