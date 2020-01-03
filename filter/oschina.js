//定义无用代码节点标识
const array = [
    '#headerNavMenu',
    '#footer',
    '.breadcrumb',
    '.ad-wrap',
    '.action',
    '.around-articles-wrap',
    '.author-card',
    '.article-list',
    '.two',
    '#copyright',
    '.fixed',
    '.back-to-top',
    '.meta-wrap',
    '.tags'
];

//删除无用代码
array.forEach(function(name){
    document.querySelectorAll(name).forEach(function(it){
        it.remove();
    });
});

//修改内容区域到全屏
document.querySelector("#mainScreen").style.cssText = "padding-top: 0";
document.querySelector(".ui.grid").style.cssText = 'margin-left:0;margin-right:0;';

//修改title
const title = document.querySelector('title');
const titleStr = title.innerText;
const end = titleStr.indexOf(" - ");
title.innerText = titleStr.substring(0, end);
