//定义无用代码节点标识
const array = [
    '.main-header-box',
    '.sidebar',
    '.article-suspended-panel',
    '.suspension-panel',
    '.tag-list-box',
    '.article-area > a',
    '.article-banner',
    '#comment-box',
    '.recommended-area',
    '.image-viewer-box',
    '.author-info-block'
];

//删除无用代码
array.forEach(function(it){
    var e = document.querySelector(it);
    if(e != 'undefined' && e != null){
        e.remove();
    }
});

//修改内容区域到全屏
document.querySelector(".column-view").style.cssText = "padding: 0";
document.querySelector(".main-area").style.width = '100%';

//修改title
var title = document.querySelector('title');
var titleStr = title.innerText;
var end = titleStr.indexOf(" - ");
title.innerText = titleStr.substring(0, end);

