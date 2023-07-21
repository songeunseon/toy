window.onload=function(){
    var pre=document.getElementsByClassName("previous")[0];
    var next=document.getElementsByClassName("next")[0];
    pre.addEventListener("click",function(){
        var slideview=document.getElementById("slide")[0];
        slideview.style.transform="translate3d(0px, 0px, 0px) ";
    });
    next.addEventListener("click",function(){
        var slideview=document.getElementById("slide")[0];
        slideview.style.transform="translate3d(-1950px, 0px, 0px) ";
    });
}