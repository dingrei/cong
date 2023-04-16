//图片缩小事件
$(document).ready(function(){
    // 当鼠标悬停在图片上时，图片缩小
    $(".banner_box_pic").mouseover(function(){
      $(this).animate({width: "90%",height:"50%"}, 500);
    });
    // 当鼠标移开时，图片还原
    $(".banner_box_pic").mouseout(function(){
      $(this).animate({width: "100%",height:"60%"}, 500);
    });
  });



// 滚动时显示/隐藏返回顶部按钮
window.addEventListener('scroll', function() {
  var backToTopBtn = document.querySelector('.slider-bar');
  if (window.pageYOffset > 500) { // 当页面滚动到超过500像素时显示返回顶部按钮
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// 点击返回顶部按钮
document.querySelector('.slider-bar').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 平滑滚动到顶部
  });
});