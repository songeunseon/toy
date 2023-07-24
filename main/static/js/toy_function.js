
async function getData(type){
    
   var result = await fetch("../static/js/toy_data.json").then((res)=>res.json()).then((r)=>r);
   var jdata = result.toy;
    var data = new Array();
    for(var i=0; i<jdata.length; i++){
        if( jdata[i].type===type){
            data.push(jdata[i]);
        }
    }
    return data;
}
async function getDetail(type,name){
    var result = await fetch("../static/js/toy_data.json").then((res)=>res.json()).then((r)=>r);
   var jdata = result.toy;
    for(var i=0; i<jdata.length; i++){
        if( jdata[i].type===type && jdata[i].id==name){
            
            return jdata[i];
        }
    }
    return false;
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