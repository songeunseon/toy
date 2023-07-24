

const types=["승용완구","실내대형완구","디지털학습완구","rc"];
const bar_color=["tayo","logi","gani","tayo"];

let click_side=new Object();
window.addEventListener("scroll",function(){
    var side = document.querySelectorAll(".sub_link");
    for(var i=0; i<side.length; i++)
        side[i].classList.remove("side_active");
    if(2800<= window.pageYOffset){
        side[3].classList.add("side_active");
        click_side=side[3];
    }
    else if(2000<= window.pageYOffset){
        side[2].classList.add("side_active");
        click_side=side[2];
    }
    else if(1200<= window.pageYOffset){
        side[1].classList.add("side_active");
        click_side=side[1];
    }
    else if(400<= window.pageYOffset){
        side[0].classList.add("side_active");
        click_side=side[0];
    }
});



window.onload=function(){
    if(Number(window.innerWidth)<=430){
        m_show_list();
    }else{
        show_list();
    }
    var side = document.querySelectorAll(".sub_link");
    for(var i=0; i<side.length; i++){
        side[i].addEventListener("mouseover",function(){
            if( this != click_side)
                this.classList.add("side_active");
        });
        side[i].addEventListener("mouseout",function(){
            if( this != click_side)
                this.classList.remove("side_active");
        });
    }
};

async function m_show_list(){
    var d1 = await getData(types[0]);
    var d2 = await getData(types[1]);
    var d3 = await getData(types[2]);
    var d4 = await getData(types[3]);
    var d = [d1,d2,d3,d4];

    var bar = document.querySelector("#m_bar");
    bar.innerHTML="<div class='tayo' onclick='sub(0)'>"+types[0]+"</div><div class='logi' onclick='sub(1)'>"+types[1]+"</div><div class='gani' onclick='sub(2)'>"+types[2]+"</div><div class='tayo' onclick='sub(3)'>"+types[3]+"</div>";
    var section = document.querySelectorAll(".section");
    section[0].classList.add("show_content");
    for(var i=0; i<types.length; i++){
        var out="";
         out +="<div class='content_wrap'>";
        var idx=0;
        for(var k=1; k<=3; k++){
            out+="<div class='content_box'>"
            for(var l=1; l<=2; l++){
                if( idx== d[i].length) idx=0;
                out += "<div class='item'><a href='detail.html?type="+types[i]+"&id="+idx+"'><div class='item_img_box'><img class='item_img' src='../static/image/toy_img/"+d[i][idx].main+"'></div>";
                out += "<h3 class='item_title'>"+d[i][idx].name+"</h3>";
                out += "<b class='item_money'>"+(d[i][idx].money).toLocaleString()+"원</b></a>";
                out += "<small class='item_point'><span>p</span>"+(Math.floor(d[i][idx].money/110))+"원 적립</small>";
                out+="</div>";
                idx++;
            }
            out+="</div>";
        }
        out += "</div>";
        section[i].innerHTML=out;
    }
}

async function show_list(){
    var d1 = await getData(types[0]);
    var d2 = await getData(types[1]);
    var d3 = await getData(types[2]);
    var d4 = await getData(types[3]);
    var d = [d1,d2,d3,d4];

    var section = document.querySelectorAll(".section");
    for(var i=0; i<types.length; i++){
        var out="<div id='"+types[i]+"' class='bar "+bar_color[i]+"'><h3 class='sub_menu_title'>"+types[i]+"</h3>  ";
        out += "<a href='#' class='cta'><span class='sub_menu_more'>more</span>";
        out+="<svg class='arrow'><path d='M1,5 L11,5'></path><polyline points='8 1 12 5 8 9'></polyline></svg></a></div>";
        out +="<div class='content_wrap'>";
        var idx=0;
        for(var k=1; k<=2; k++){
            out+="<div class='content_box'>"
            for(var l=1; l<=4; l++){
                if( idx== d[i].length) idx=0;
                out += "<div class='item'><a href='detail.html?type="+types[i]+"&id="+idx+"'><div class='item_img_box'><img class='item_img' src='../static/image/toy_img/"+d[i][idx].main+"'></div>";
                out += "<h3 class='item_title'>"+d[i][idx].name+"</h3>";
                out += "<b class='item_money'>"+(d[i][idx].money).toLocaleString()+"원</b></a>";
                out += "<small class='item_point'><span>p</span>"+(Math.floor(d[i][idx].money/110))+"원 적립</small>";
                out+="</div>";
                idx++;
            }
            out+="</div>";
        }
        out += "</div>";
        section[i].innerHTML=out;
    }
}

function sub(id){
    var section = document.querySelectorAll(".section");
    for(var i=0; i<section.length; i++){
        section[i].classList.remove("show_content");
    }
    section[id].classList.add("show_content");
}