document.getElementById("reminder").addEventListener("click",remind);

function remind(){
    var minutes = parseInt(document.getElementById("minute").value);
    const hours = parseInt(document.getElementById("hour").value);

    if (isNaN(minutes) || isNaN(hours)){
        console.log("It's not a number!");
    }else{
        minutes = (hours * 60.0) + minutes;
        console.log(minutes);
        chrome.runtime.sendMessage({minutes}, function(response){
            console.log(response);
        })
    }
    window.close();
}

document.getElementById("website").addEventListener("click",redirect);

function redirect(){
    chrome.tabs.update({url: "https://trungbui-purdue-5913.github.io/HelloWorldWebAndExtension/"});
}