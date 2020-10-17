document.getElementById("add").addEventListener("click",remind);

function remind(){
    const minutes = parseInt(document.getElementById("minute").value);
    const hours = parseInt(document.getElementById("hour").value);

    if (isNaN(minutes) || isNaN(hours)){
        console.log("It's not a number!");
    }else{
        console.log(minutes);
        console.log(hours);
    }
}