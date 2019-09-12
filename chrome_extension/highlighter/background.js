/**
 * @fileoverview Description of this file.
 */

 console.log("background script is running");

 chrome.browserAction.onClicked.addListener(buttonClicked);

 function buttonClicked(tab) {
    console.log("button clicked", tab);

    const msg = {
        txt: "Hello this is from background script, how are you there?",
        isEnable:"true"
    }
    chrome.tabs.sendMessage(tab.id, msg);
 }
