function btncolorChange(id){
    document.getElementById("donate").classList.remove("btnColorPik");
    document.getElementById("history").classList.remove("btnColorPik");
 
    document.getElementById(id).classList.add("btnColorPik")
}

function donathistory(id){
    document.getElementById("history2").classList.add("hidden");
    document.getElementById("containt").classList.add("hidden");

    document.getElementById(id).classList.remove("hidden")
}


function convert(id){
    const getvalue= document.getElementById(id).value;
    const getfloat=parseFloat(getvalue);
    return getfloat;
}
function convert2(id){
    const getvalue= document.getElementById(id).innerText;
    const getfloat=parseFloat(getvalue);
    return getfloat;
}
function convert3(id){
    const getvalue= document.getElementById(id).innerText;
    return getvalue;
}