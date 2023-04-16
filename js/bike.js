window.onload=function(){
    fn();
};
//图片选项卡
function fn(){
    var nav=document.getElementsByClassName('nav');
    var pic=document.getElementsByClassName('bike');
    index=0
    for(var i=0;i<nav.length;i++){
		(function(i){
			nav[i].onclick=function(){
                pic[index].children[0].classList.remove("show");
				index=i;
				pic[index].children[0].classList.add("show");
			}
		})(i);
	}

};
//图片缩小事件
$(document).ready(function(){
    // 当鼠标悬停在图片上时，图片缩小
    $(".pic").mouseover(function(){
      $(this).animate({width: "200%"}, 500);
    });
    // 当鼠标移开时，图片还原
    $(".pic").mouseout(function(){
      $(this).animate({width: "120%"}, 500);
    });
  });
  
  //图片缩小事件
$(document).ready(function(){
    // 当鼠标悬停在图片上时，图片缩小
    $(".pic1").mouseover(function(){
      $(this).animate({width: "90%",height:"50%"}, 500);
    });
    // 当鼠标移开时，图片还原
    $(".pic1").mouseout(function(){
      $(this).animate({width: "100%",height:"60%"}, 500);
    });
  });

