const btnYes = document.getElementById("yes");
const btnNo = document.getElementById("no");
const slika = document.querySelector(".slika");
let scaleFactor=1;

function ChangeBtn(){
    scaleFactor+=0.5;
    btnYes.style.transform='scale('+scaleFactor+')';  //Increase the size of "YES" button by '
}

btnNo.addEventListener( "click", () => {
    ChangeBtn();
});
btnYes.addEventListener( "click", () =>{
    btnNo.style.display="none";  
    btnYes.style.display="none";
    slika.style.display='block';
})