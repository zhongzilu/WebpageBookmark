const keys = [
    "jianshu.com/p/",
    "blog.csdn.net",
    "juejin.im/post",
    "my.oschina.net"
];

const files = [
    'jianshu.js',
    'csdn.js',
    'juejin.js',
    'oschina.js'
];

const names = [
    "简书",
    "CSDN",
    "掘金",
    "OSChina"
];

const onActionClickListener = function(tab) {
    var url = tab.url;

    for (var i = 0, len = keys.length; i < len; i++) {
        if (url.indexOf(keys[i]) !== -1) {
            showPrinter(tab.id, 'filter/' + files[i]);
            return;
        }
    }

    alert("当前网页不支持过滤打印！");
    chrome.browserAction.disable(tab.id, null);
}

/**执行过滤打印，并弹出打印对话框*/
function showPrinter(tabId, scriptPath){
    chrome.tabs.executeScript({ file: scriptPath}, function(){
        chrome.tabs.executeScript({ code: "window:print();"});
    });
}

/**弹出警告提示框*/
function alert(msg){
    chrome.tabs.executeScript({ code: "alert('" + msg + "');"});
}

/**内容菜单点击监听器*/
const onMenuClickListener = function(info, tab){
    onActionClickListener(tab);
}

/**创建内容菜单*/
function createContextMenu(){
    chrome.contextMenus.create({
        "id": "printer",
        "title": "过滤打印"
    });
    chrome.contextMenus.onClicked.addListener(onMenuClickListener);
}


chrome.runtime.onInstalled.addListener(function(){

    chrome.browserAction.onClicked.addListener(onActionClickListener);

    chrome.commands.onCommand.addListener(function(command) {
        console.log('Command:', command);
        if (command === 'toggle-printer') {
            console.log("start print");
            document.execCommand('print');
        }
    });
    
    // chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
    //     chrome.declarativeContent.onPageChanged.addRules([
    //         {
    //             conditions: [
    //                 new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'jianshu.com'}})
    //             ],
    //             actions: [new chrome.declarativeContent.ShowPageAction()]
    //         }
    //     ]);
    // });

    chrome.tabs.onSelectionChanged.addListener(function(tabId) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var url = tabs[0].url;
            chrome.contextMenus.removeAll(null);
            for (var i = 0, len = keys.length; i < len; i++) {
                if (url.indexOf(keys[i]) !== -1) {
                    createContextMenu();
                    return;
                }
            }
        });
    });

});