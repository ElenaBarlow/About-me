text1El = document.querySelector(".text-1"); 
projectOne = document.querySelector(".one");
projectTwo = document.querySelector(".two"); 

projectOne.addEventListener("mouseenter", (event) => {
  event.target.innerText = "Kidneystone App";
  event.target.style.fontSize = "2rem";
}) 

projectOne.addEventListener("mouseleave", (event) => {
    event.target.innerText = "Project 1";
    event.target.style.fontSize = "2rem";
  }) 


  projectTwo.addEventListener("mouseenter", (event) => {
    event.target.innerText = "Arabic Ark";
    event.target.style.fontSize = "2rem";
  }) 
  
  projectTwo.addEventListener("mouseleave", (event) => {
      event.target.innerText = "Project 2";
      event.target.style.fontSize = "2rem";
    })