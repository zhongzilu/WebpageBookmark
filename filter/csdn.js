//定义无用代码节点标识
const array = [
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
    '.reward-user-box',
    '.more-toolbox',
    '.person-messagebox'
];

//模拟点击查看更多
const readmore = document.querySelector('.btn-readmore');
if(typeof(readmore) !== "undefined" && readmore != null){
    readmore.click();
}

//删除无用代码
array.forEach(function(it){
    const e = document.querySelector(it);
    if(typeof(e) !== "undefined" && e != null){
        e.remove();
    }
});

//修改内容区域到全屏
document.querySelector('.container main').style.cssText = 'width:100%; margin-bottom:0;';
document.querySelector('.d-flex').classList.remove('d-flex');

//修改title
const title = document.querySelector('title');
const titleStr = title.innerText;
var end = titleStr.lastIndexOf(" - ");
if (end < 0) {
    end = titleStr.indexOf("_");
}
if (end > 0) {
    title.innerText = titleStr.substring(0, end);
}