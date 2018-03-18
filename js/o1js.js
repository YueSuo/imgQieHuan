/**
 * Created by suoyue on 2017/12/16.
 */
window.onload = function(){
    var oBtn1 = document.getElementById('btn1');
    var oBtn2 = document.getElementById('btn2');
    var oAp = document.getElementById('ap');
    var oPrev = document.getElementById('prev');
    var oNext = document.getElementById('next');
    var oImg1= document.getElementById('img1');
    var oSpan1 = document.getElementById('span1');
    var oSpan2 = document.getElementById('span2');

    var arrUrl = ['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png','img/6.png'];
    var arrText = ['榴莲','哈密瓜','草莓','石榴','猕猴桃','苹果'];

    var num = 0;
    var onOff = true;

    oBtn1.onclick=function(){onOff=true;oBtn1.style.background='red';oBtn2.style.background='black';oAp.innerHTML='图片可从最后一张跳转到第一张循环切换'};
    oBtn2.onclick=function(){onOff=false;oBtn1.style.background='black';oBtn2.style.background='blue';oAp.innerHTML='图片只能到最后一张或只能到第一张切换'};
    //初始化
    function fnTab(){
        oSpan1.innerHTML = num+1 +'/'+arrUrl.length;
        oSpan2.innerHTML = arrText[num];
        oImg1.src = arrUrl[num];
    }
    fnTab();

    oPrev.onclick = function(){
        num--;
        if(num==-1){
            if(onOff){
                num = arrText.length-1;
            }else{
                alert('这已经是第一张了，不能再往前了~~');
                num=0;
            }
        }
        fnTab();
    };

    oNext.onclick = function(){
        num++;
        if(num==arrText.length){
            if(onOff){
                num=0;
            }else{
                alert('已经到最后一张啦~');
                num = arrText.length-1;
            }
        }
        fnTab();
    };

};