window.onload=function(){
    logoFn();
    picFn();
    fn1();
    fn2();
    fn3();
    fn4();
}
//轮播
var index=0;
function logoFn(){
    window.setInterval(function(){
        index++;
        if(index>2){
            index=0;
        }
        var img=document.getElementById("ginatlogo");
        img.src="../images/logo"+index+".png";
    },2000)
}
//轮播
function picFn(){
    window.setInterval(function(){
        var arr=document.getElementById("swiper-wrapper").children;
        for(let i=0;i<arr.length;i++){
            arr[i].style.zIndex=0;
        }
        arr[index].style.zIndex=1;
        console.log(index,arr[index]);

    },1000)
}
//输入提示
function fn1(){
    document.getElementById('loginName').onblur=function(){
        if(!this.value){
            document.getElementById('tis').innerText="用户名不能为空";
            document.getElementById('tis').style.color='red'
        }
    }
    document.getElementById('passWord').onblur=function(){
        if(!this.value){
            document.getElementById('tishi').innerText="密码不能为空";
            document.getElementById('tishi').style.color='red'
        }
    }
}
function fn2(){
    document.getElementById("foot_log").style.backgroundColor="silver" ;  
    
}
function fn3(){
    document.getElementById("foot_log").style.backgroundColor="" ;
}
function fn4(){
    document.getElementById("ginatlogo").onclick=(function(){
        location.href="index.html"
    })
}
