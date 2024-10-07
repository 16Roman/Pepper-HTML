$(() => {
    let navBar = $("nav")
    let mainContainer = $("main")

    // accounts for a dynamically-sized navbar

    let mainYOffset = navBar.height() + getTotalYPadding(navBar);

    console.log(`Setting main offset to ${mainYOffset}...`)
    mainContainer.css("padding-top", `${mainYOffset}px`)
})

function getTotalYPadding(element) {
    let elementPaddingTop = parseInt(element.css('padding-top'), 10)
    let elementPaddingBottom = parseInt(element.css('padding-bottom'), 10);

    return elementPaddingTop + elementPaddingBottom
}
$(document).ready(
    function () {
        FastClick.attach(document.body);
    }
);
//Reset back to homepage after being idle for too long
var timeLimit = 5 * 60 * 1000; // 5 minutes

// Function to redirect to index page
function redirectToIndex() {
  window.location.href = "index.html";
}

// Function to reset timer
function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(redirectToIndex, timeLimit);
}

// Start timer
var timer = setTimeout(redirectToIndex, timeLimit);

// Reset timer on any user interaction
document.addEventListener("mousemove", resetTimer);
document.addEventListener("keypress", resetTimer);

//Pepper Functions
function exampleFunction() {
    document.getElementById("exampleID").innerText = "Example Text";
}
function returnButton() {
    RobotUtils.onServices(function (ALLeds, ALTextToSpeech) {
        ALLeds.randomEyes(2.0);
        ALTextToSpeech.say("Hello \\pau=500\\ I am returning you to the main page");
        //pau works the same on javascript but in this case uses two backslashs \
        //EX:  ALTextToSpeech.say("Hello \\pau=100\\  world");
    });
}
function TalkButton() {
    RobotUtils.onServices(function (ALLeds, ALTextToSpeech) {
        ALLeds.randomEyes(2.0);
        //ALTextToSpeech.say("Here are some questions you can ask me!");
        ALTextToSpeech.say("Here are some questions you can ask me! \\pau=500\\ Don't be afraid to ask!");
    });
}

function exit() {
    RobotUtils.onService(function (ALBehaviorManager) {
        //ALBehaviorManager.stopBehavior("putBehaviorNameHere/behavior_1");
        ALBehaviorManager.stopBehavior("pepper-70ad2c/behavior_1");
    });
};
