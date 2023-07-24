    /*
      상품이름      "name":"스마트라이크 유아 트램플린 3in1",
       상품 메인이미지     "main":"스마트라이크트램플린.jpeg",
       상품 서브이미지     "sub":"스마트라이크트램플린_sub1.jpeg,스마트라이크트램플린_sub2.jpeg",
        상품 상세    "detail":"스마트라이크트램플린_detail.jpeg",
            "money": 15700,
            "color":"블루",
            "size":"91.5*22*50",
            "age": 1,
            "quality":"메탈,PVC,폼"
    */
let money=0;
async function getItem(type,name){
    var item = await getDetail(type,name);

   document.querySelector("#item_title").innerHTML=item.name;
   document.querySelector("#item_main>img").src="../static/image/toy_img/"+item.main;
   var sub_img = item.sub;
 sub_img = sub_img.split(",");
 var sub_out="<ul class='small_list'> ";
 if(sub_img[0]!=''){
for(var i=0; i<sub_img.length; i++)
    sub_out+="<li><img src='"+("../static/image/toy_img/"+sub_img[i])+"'></li>";
 }
    sub_out+="</ul>";
   document.querySelector("#item_sub").innerHTML=sub_out;
   document.querySelector("#item_money").innerHTML=(item.money).toLocaleString();
   document.querySelector("#price_money").innerHTML=(item.money).toLocaleString();
money = item.money;
   document.querySelector("#item_age").innerHTML=item.age;
   document.querySelector("#item_quality").innerHTML=item.quality;
   document.querySelector("#item_color").innerHTML=item.color;
   document.querySelector("#item_size").innerHTML=item.size;
   
   var detail_img = item.detail;
 detail_img = detail_img.split(",");
 var detail_out="<ul class='detail_list'> ";
 if(detail_img[0]!=''){
for(var i=0; i<detail_img.length; i++)
    detail_out+="<li><img src='"+("../static/image/toy_img/"+detail_img[i])+"'></li>";
 }
    detail_out+="</ul>";
    document.querySelector("#item_detail").innerHTML=detail_out;
}
window.onload=function(){

    var url = location.href;
   var params =  url.split("?")[1].split("&");
   var type= decodeURI(params[0].split("=")[1]);
   var name = params[1].split("=")[1];
   getItem(type,name);

    var choice=document.querySelectorAll(".choice");
    var pay=document.getElementById("pay");
    choice.forEach(function(choice) {
        choice.addEventListener("click", function() {
            item_detail.style.display="none";
            pay.style.display = "block";
        });

    });


    var payBT=document.getElementById("payBT");
    payBT.addEventListener("click", function(){
        alert("결제완료");
        payBT.innerHTML="결제완료";
    });
    
}
function calc(){
    var num1=parseInt(document.getElementById("input").value);
    var num2=parseInt(money);//price
    var num3=3000; //post
    var res=(num1*num2)+num3; //(개월수 * price) + post
    document.getElementById("res").innerHTML=res.toLocaleString()+"원";
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