btn.addEventListener("click",fnc);
function fnc(){
    console.log(a.checked);
    console.log(б.checked);
    console.log(в.checked);
    console.log(г.checked);
    if (б.checked){
        alert("Правильно");
    } else {
        alert("Неправильно");
    }
}