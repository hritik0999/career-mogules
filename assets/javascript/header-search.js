// header search f  unction
const textInput=document.getElementById('text-box');
textInput.addEventListener('keydown',search);
function search(){
    const inputValue=textInput.value;
    console.log(inputValue,"Data");
}