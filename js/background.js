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

const onActionClickListener = function(tab) {
    const url = tab.url;

    for (let i = 0, len = keys.length; i < len; i++) {
        if (url.indexOf(keys[i]) !== -1) {
            showPrinter(tab.id, 'filter/' + files[i]);
            return;
        }
    }

    alert("当前网页不支持过滤打印！");
    chrome.browserAction.disable(tab.id, null);
};

const onCommandListener = function(command) {
    if (command === 'toggle-printer') {
        currentTab(function(tabs) {
            onActionClickListener(tabs[0]);
        });
    }
};

function currentTab(func){
    chrome.tabs.query({active: true, currentWindow: true}, func);
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
};

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
    chrome.commands.onCommand.addListener(onCommandListener);
    chrome.tabs.onSelectionChanged.addListener(function(tabId) {
        currentTab(function(tabs) {
            const url = tabs[0].url;
            chrome.contextMenus.removeAll(null);
            for (let i = 0, len = keys.length; i < len; i++) {
                if (url.indexOf(keys[i]) !== -1) {
                    createContextMenu();
                    return;
                }
            }
        });
    });

});