console.log("in background script")

let defaultDuration = 1.0;

chrome.alarms.onAlarm.addListener(function (alarm) {
    console.log(alarm)
    chrome.notifications.create("my notification", {
        type: "basic",
        iconUrl: "./icon48.png",
        title: "Check Your Posture",
        "message": "Check out our website for more!",
    }, function (notificationID){
        console.log("displayed the notification")
    })
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
        sendResponse({success: true});
    }
)