window.addEventListener('load',function(){
    leftSlide();
    rightSlide();
})
//左侧滑动(原生)
//定义左侧滑动最大值和最小值,最大距离,最小距离
var ulLeft=document.querySelector('#category .left ul');
var leftHeight=document.querySelector('.left').offsetHeight;
var ulLeftHeight=ulLeft.offsetHeight;
var maxdistance=200;
var mindistance=-(ulLeftHeight-leftHeight)-200;
var maxposition=0;
var minposition=-(ulLeftHeight-leftHeight);
function leftSlide(){ 
    var startY=moveY=endY=distanceY=0;
    ulLeft.addEventListener('touchstart',function(e){    
       startY=e.touches[0].clientY;
    })
    ulLeft.addEventListener('touchmove',function(e){
        moveY=e.touches[0].clientY;
        distanceY=moveY-startY;
        if((endY+distanceY)>mindistance&&(endY+distanceY)<maxdistance){
            ulLeft.style.transform='translateY('+(endY+distanceY)+'px)';
            ulLeft.style.transition='all 0.5s';
        }
    })
    ulLeft.addEventListener('touchend',function(e){
        endY+=distanceY;
        if(endY<maxposition){
            
        }
    })

}
//右侧滑动(原生)
function rightSlide(){

}