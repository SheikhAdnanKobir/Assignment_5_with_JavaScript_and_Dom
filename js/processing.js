function btncolorChange(id){
    document.getElementById("donate").classList.remove("btnColorPik");
    document.getElementById("history").classList.remove("btnColorPik");

    document.getElementById(id).classList.add("btnColorPik")
}