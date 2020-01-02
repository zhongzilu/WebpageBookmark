//定义无用代码节点标识
var array = [
    '#csdn-toolbar',
    '.container aside',
    '.csdn-side-toolbar',
    '#dmp_ad_58',
    '.comment-box',
    '.recommend-box',
    '.template-box',
    '.postTime',
    '.article-copyright',
    '.article-info-box',
    '.recommend-right',
    '.tool-box',
    '.indexSuperise',
    '#kp_box_476',
    '.reward-user-box'
];

//删除无用代码
array.forEach(function(it){
    var e = document.querySelector(it);
    if(e != 'undefined' && e != null){
        e.remove();
    }
});

//修改内容区域到全屏
document.querySelector('.container main').style.cssText = 'width:100%; margin-bottom:0;';

//模拟点击查看更多
var readmore = document.querySelector('.btn-readmore');
if(readmore != 'undefined' && readmore != null){
    readmore.click();
}

//修改title
var title = document.querySelector('title');
var titleStr = title.innerText;
var end = titleStr.indexOf(" - ");
title.innerText = titleStr.substring(0, end);
