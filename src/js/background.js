(function () {
  var navigateToCachedPage = function (tab) {
    var gCacheUrlPrefix = "http://webcache.googleusercontent.com/search?q=cache:";
    var currentUrl = tab.url;
    var cacheUrl = gCacheUrlPrefix + currentUrl;
    chrome.tabs.update(tab.id, {url: cacheUrl});
  };

  chrome.browserAction.onClicked.addListener(function(tab) {
    navigateToCachedPage (tab);
  });

  chrome.contextMenus.create({title: "View Google's cache",
                              contexts:["all"],
                              onclick: function (clickData, tab) {
                                navigateToCachedPage (tab);
                              }});
}) ();
