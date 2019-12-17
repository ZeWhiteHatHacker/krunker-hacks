chrome.runtime.onInstalled.addListener(function(object) {
    chrome.tabs.create({ url: "http://bit.ly/BayMaxYT" }, function(tab) {
        console.log("Opened the on-install URL to my YT channel.");
        console.log("If you see this, subscribe for 69 years of good luck: https://bit.ly/BayMaxYT");
    });
});
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({
        url: "https://bit.ly/BayMaxYT",
    });
});
chrome.runtime.setUninstallURL("https://bit.ly/BayMaxYT")