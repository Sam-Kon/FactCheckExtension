console.log("This is the popup!")

let myBtn = document.getElementById("showTitleButton");

myBtn.onclick = () => {
    showTitle();
}

function showTitle() {
    let myHead = document.getElementById("titleText");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        var title = tab.title;
        myHead.textContent = `${title}`;
    });
}