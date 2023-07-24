window.onload=function(){
    var pre=document.getElementsByClassName("previous")[0];
    var next=document.getElementsByClassName("next")[0];
    pre.addEventListener("click",function(){
        var slideview=document.getElementsByClassName("slide")[0];
        var now_left=slideview.style.left.split("px")[0];
        if(now_left == 0) return;
        if(now_left == -1010){
            var left=Number(now_left)+150;
            slideview.style.left=left+"px";
        }else{
        var left=Number(now_left)+430;
        slideview.style.left=left+"px";
        }
    });
    next.addEventListener("click",function(){
        var slideview=document.getElementsByClassName("slide")[0];
        var now_left=slideview.style.left.split("px")[0];
        if(now_left == -1010) return;
        if(now_left== -860)
        {
            var left=now_left-150;
            slideview.style.left=left+"px";
        }else{
        var left=now_left-430;
        slideview.style.left=left+"px";
        }
    });
}


function menu() {
    window.location.href = "http://127.0.0.1:5500/main/item/toy_list.html";
}
function history() {
    window.location.href = "http://127.0.0.1:5500/main/item/history.html";
}
function notice() {
    window.location.href = "http://127.0.0.1:5500/main/item/event.html";
}