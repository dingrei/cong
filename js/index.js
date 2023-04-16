window.onload=function(){
    fn3();
    fn4();
    fn5();
    fn6();
}
//lang打开
function fn1(){
    document.getElementById("mask").style.display="block";
}//lang关闭
function fn2(){
    document.getElementById("mask").style.display="none";
}
//轮播
function fn3(){
    var lb = document.getElementById("slide");
    lb.style.marginLeft = "0px";
    window.setInterval(function(){
        lb.style.marginLeft = parseInt(lb.style.marginLeft)-20 + "px";
        if(parseInt(lb.style.marginLeft) <= -4557){
            lb.style.marginLeft = "0px";
        }
    },50);
}
//图片缩小事件
$(document).ready(function(){
    // 当鼠标悬停在图片上时，图片缩小
    $(".pic").mouseover(function(){
      $(this).animate({width: "90%"}, 500);
    });
    // 当鼠标移开时，图片还原
    $(".pic").mouseout(function(){
      $(this).animate({width: "100%"}, 500);
    });
  });
  
//图标颜色变化事件
$(function(){
$(".btn_headersearch").hover(
    function(){
        $(this).css("background-color","#f4f4f4").css("color","black")
    },
    function(){
        $(this).css("background-color","").css("color","")
    }
)
});
//背景颜色改变
$(function(){
    $(".news_pic_more").hover(
        function(){
            $(this).css("background-color","#008DFF").css("color","white")
        },
        function(){
            $(this).css("background-color","").css("color","")
        },
    )
});
$(function(){
    $(".title a").hover(
        function(){
            $(this).css("background-color","#008DFF").css("color","white")
        },
        function(){
            $(this).css("background-color","").css("color","")
        },
    )
});
//字体下划线
$(function(){
    $(".header_nav_item").hover(
        function(){
            $(".underline").animate({width:"100%"},500);
        },
        function(){
            $(".underline").animate({width:"0%"},500);
        }
    );
   
});
$(function(){
    $(".header_nav_item").hover(
        function(){
            $(".this").css("color","#223BCA");
        },
        function(){
            $(".this").css("color"," ");
        }
    );
   
})
function fn4(){
    document.getElementById("nonew").onclick=function(){
        document.getElementById("err").style.display="block"
    }
}
function fn6(){
    document.getElementById("noshop").onclick=function(){
        document.getElementById("err").style.display="block"
    }
}
function fn5(){
    document.getElementsByClassName("width")[0].onclick=function(){
        document.getElementById("err").style.display="none"
    }
}