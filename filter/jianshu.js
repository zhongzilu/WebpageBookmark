//定义无用代码节点标识
const array = [
    'header',
    'aside',
    '.rEsl9f',
    '._1kCBjS',
    '._13lIbp',
    '.d0hShY',
    '#note-page-comment',
    'footer',
    '.ant-back-top',
    '._3Pnjry',
    '.-umr26'
];

//删除无用代码
array.forEach(function(it){
    var e = document.querySelector(it);
    if(e != undefined && e != null){
        e.remove();
    }
});

//修改内容区域到全屏
document.querySelectorAll(".ouvJEz")[1].remove();
document.querySelector("._gp-ck").style.width = '100%';

//修改title
var title = document.querySelector('title');
var titleStr = title.innerText;
var end = titleStr.indexOf(" - ");
title.innerText = titleStr.substring(0, end);