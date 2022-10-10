console.log("This is the popup!")

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    var title = tab.title;

    console.log("Title: " + title);
});