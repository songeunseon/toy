

const types=["승용완구","실내대형완구","디지털학습완구","rc"];

window.onload=function(){
    show_list();
};

async function show_list(){
    var d1 = await getData(types[0]);
    var d2 = await getData(types[1]);
    var d3 = await getData(types[2]);
    var d4 = await getData(types[3]);
    var d = [d1,d2,d3,d4];

    var section = document.querySelectorAll(".section");
    for(var i=0; i<types.length; i++){
        var out="<div class='bar tayo'><h3 class='sub_menu_title'>"+types[i]+"</h3> <span class='sub_menu_more'>more</span></div>";
        out +="<div class='content_wrap'>";
        var idx=0;
        for(var k=1; k<=2; k++){
            out+="<div class='content_box'>"
            for(var l=1; l<=4; l++){
                if( idx== d[i].length) idx=0;
                out += "<div class='item'><div class='item_img_box'><img class='item_img' src='../static/image/toy_img/"+d[i][idx++].main+"'></div>";
            }
            out+="</div>";
        }
        out += "</div>";
        section[i].innerHTML=out;
    }
}