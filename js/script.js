//Variables DOM
const numUser = document.getElementById("userInput");
const cntDown = document.getElementById("countdown");
const endGame = document.getElementById("result");
const restbtn = document.getElementById("restart");


//Mini functions
const random3 = () => Math.trunc((Math.random() * 3)+1);



//Evenetos
numUser.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    wanaPlayAGame (numUser.value,random3());
  }
});

window.addEventListener('click', (element) =>{
    // Bendito stackoverflow, busca 
    //"detect click outside div using javascript", puro oro jeje   
    if ((!numUser.contains(element.target)) && (!restbtn.contains(element.target))){
        wanaPlayAGame (numUser.value,random3());
    }
  });

restbtn.addEventListener('click',()=>location.reload());



//Funciones
function wanaPlayAGame (user,computer){
    const u = Math.floor(user);
    const c = Math.floor(computer);

    if(u){
        if(u>3){
            alert("Que malvado no?");
            location.reload();
        }else{
            const countDown5 = new Promise((result) => {
                setTimeout(() => {result(`<p>Cuenta atrás: 5 segundos</p>`)}, 1000);
            });
            const countDown4 = new Promise((result) => {
                setTimeout(() => {result(`<p>Cuenta atrás: 4 segundos</p>`)}, 2000);
            });
            const countDown3 = new Promise((result) => {
                setTimeout(() => {result(`<p>Cuenta atrás: 3 segundos</p>`)}, 3000);
            });
            const countDown2 = new Promise((result) => {
                setTimeout(() => {result(`<p>Cuenta atrás: 2 segundos</p>`)}, 4000);
            });
            const countDown1 = new Promise((result) => {
                setTimeout(() => {result(`<p>Cuenta atrás: 1 segundos</p>`)}, 5000);
            });
            const countDown0 = new Promise((result) => {
                setTimeout(() => {result(`<p>Cuenta atrás: 0 segundos</p>`)}, 6000);
            });
            

            countDown5.then((doom)=>cntDown.innerHTML=doom);
            countDown4.then((doom)=>cntDown.innerHTML=doom);
            countDown3.then((doom)=>cntDown.innerHTML=doom);
            countDown2.then((doom)=>cntDown.innerHTML=doom);
            countDown1.then((doom)=>cntDown.innerHTML=doom);
            countDown0.then((doom)=>{
                cntDown.innerHTML=doom;
                u===c?worldsafe(u,c):worlddown(u,c);
            });
                
            // u===c?worldsafe(u,c):worlddown(u,c);
        }
    }
}

function worldsafe(user,computer){
    endGame.innerHTML = `
        <p>Enhorabuena, has salvado el mundo</p>
        <p>Tu número ${user} es el mismo que el número ${computer}</p>
    `;
}

function worlddown(user,computer){
    endGame.innerHTML = `
        <p>Enhoramala, has destruido el mundo</p>
        <p>Tu número ${user} NO coincide con el número ${computer}</p>
    `;
}




//no he sabido implementar el setInterval..., cambiando el dom desde la promesa se hacia
//pero sin fin y sin el timeout :S
//he optado por lo facil al final, sino me come el timepo

// const theFinalCountDown = new Promise((result) => {
//     setTimeout(() => {
//         result(`<p>CUENTA ATRAS FINALIZADA</p>`)
//     }, 6000);
//   });
// const countDown = new Promise((resolve) => {
//     let secs = 6;
//     setInterval(() =>{
//         secs --;
//         resolve(`<p>Cuenta atrás: ${secs} segundos</p>`);
//     },1000);
// });