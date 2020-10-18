console.log("in background script")

let defaultDuration = 60.0;

function audioNotification(){
    var sound = new Audio('short_tone.mp3');
    sound.play();
}

chrome.alarms.onAlarm.addListener(function (alarm) {
    console.log(alarm)
    chrome.notifications.create("my notification", {
        type: "basic",
        iconUrl: "./icon48.png",
        title: "Check Your Posture",
        "message": "Check out our website for more!",
        requireInteraction: true,
    }, function (notificationID){
        console.log("displayed the notification")
    })
    audioNotification()
});


function createAlarm(){
    chrome.alarms.create("check posture", {delayInMinutes : defaultDuration});
}

createAlarm()


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("Event received in background page");
        defaultDuration = request.minutes * 1.0;
        createAlarm()
        audioNotification()
        sendResponse({success: true});
    }
)



