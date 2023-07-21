

const types=["승용완구","실내대형완구","디지털학습완구","rc"];

window.onload=function(){
    show_list();
};

async function show_list(){
    var d1 = await getData(types[0]);
    var d2 = await getData(types[1]);
    var d3 = await getData(types[2]);
    var d4 = await getData(types[3]);
    console.log(d4);
}