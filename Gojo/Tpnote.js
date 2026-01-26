const conteneur = document.querySelectorAll(".conteneur"); 
const bouton1 = document.querySelector("#bouton1");

const duree = 1000; //duree de l'animation en MS 
const nbEtapes = 60; // nombre d'étapes de l'animation 
const deltaT = duree/nbEtapes;
const deltaY = 400/nbEtapes; 

let swap = false;

bouton1.addEventListener("click", animation, false);

function animation(){
    swap = !swap;
    if(swap){
        defilementBas();
    }
    else{
        defilementHaut();
    } 
}

function defilementBas(){
    let timer = setInterval(()=>{
        conteneur[0].scrollBy(0, deltaY);
        if (conteneur[0].scrollTop >= 400){
            clearInterval(timer);
        }
    }, deltaT);
}

function defilementHaut(){
    let timer = setInterval(()=>{
        conteneur[0].scrollBy(0, -deltaY);
        if (conteneur[0].scrollTop <= 0){
            clearInterval(timer);
        }
    }, deltaT);
}