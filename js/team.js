//图片缩小事件
$(document).ready(function(){
    // 当鼠标悬停在图片上时，图片缩小
    $(".pic").mouseover(function(){
      $(this).animate({width: "90%",height:"90%"}, 500);
    });
    // 当鼠标移开时，图片还原
    $(".pic").mouseout(function(){
      $(this).animate({width: "100%",height:"100%"}, 500);
    });
  });