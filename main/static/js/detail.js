window.onload=function(){
    var choice=document.querySelectorAll(".choice");
    var pay=document.getElementById("pay");
    choice.forEach(function(choice) {
        choice.addEventListener("click", function() {
            pay.style.display = "block";
        });
    });
    var payBT=document.getElementById("payBT");
    payBT.addEventListener("click", function(){
        alert("결제완료");
        payBT.innerHTML="결제완료";
    });
}

function menu() {
    window.location.href = "http://127.0.0.1:5500/main/item/toy_list.html";
}

