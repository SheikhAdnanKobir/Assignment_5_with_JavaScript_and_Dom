document.getElementById("donate").addEventListener("click",function(){
    btncolorChange("donate");
})

document.getElementById("history").addEventListener("click",function(){
    btncolorChange("history");
})


document.getElementById("history").addEventListener("click",function(){
    donathistory("history2");
})
document.getElementById("donate").addEventListener("click",function(){
    donathistory("containt");
})

document.getElementById("as-sunnah3").addEventListener("click",function(){
    const getvalue=convert("as-sunnah2");
    const donate=convert2("my-balanc");
    const prvusbal=convert2("as-sunnah1")
    const text=convert3("as-sunnah-text")
    const timestamp = new Date().toLocaleString();
    
    const val=document.getElementById("as-sunnah2")
        val.value="";

    if(getvalue<=donate && getvalue>0){
        const odd=donate-getvalue;
        const even=getvalue+prvusbal;
        document.getElementById("my-balanc").innerText=odd;
        document.getElementById("as-sunnah1").innerText=even;

        const p=document.createElement("p");
        p.innerText=` ${getvalue} Taka is Donate for ${text}\n Date: ${timestamp}\n\n`;
        document.getElementById("history2").appendChild(p);  

        const modal=document.getElementById("my_modal_1");
        modal.show();
    }

    else if(getvalue>donate){
        alert("Insufficient balance")
    }

    else if(getvalue<=0 || (isNaN && getvalue!=="number")){
        alert("Please enter a valid input")
    }
    else{
        alert("Something is wrong")
    }
})


document.getElementById("noakhali3").addEventListener("click",function(){
    const getvalue=convert("noakhali2");
    const donate=convert2("my-balanc");
    const prvusbal=convert2("noakhali1")
    const text=convert3("nookhali-text")
    const timestamp = new Date().toLocaleString();

    const val=document.getElementById("noakhali2")
        val.value="";
   

    if(getvalue<=donate && getvalue>0){
        const odd=donate-getvalue;
        const even=getvalue+prvusbal;
        document.getElementById("my-balanc").innerText=odd;
        document.getElementById("noakhali1").innerText=even;

        const p=document.createElement("p");
        p.innerText=` ${getvalue} Taka is ${text}\n Date: ${timestamp}\n\n`;
        document.getElementById("history2").appendChild(p);  

        const modal=document.getElementById("my_modal_1");
        modal.show();
    }

    else if(getvalue>donate){
        alert("Insufficient balance")
    }

    else if(getvalue<=0 || (isNaN && getvalue!=="number")){
        alert("Please enter a valid input")
    }
    else{
        alert("Something is wrong")
    }
})


document.getElementById("feni3").addEventListener("click",function(){
    const getvalue=convert("feni2");
    const donate=convert2("my-balanc");
    const prvusbal=convert2("feni1")
    const text=convert3("feni-text")
    const timestamp = new Date().toLocaleString();

    const val=document.getElementById("feni2")
        val.value="";
   

    if(getvalue<=donate && getvalue>0){
        const odd=donate-getvalue;
        const even=getvalue+prvusbal;
        document.getElementById("my-balanc").innerText=odd;
        document.getElementById("feni1").innerText=even;

        const p=document.createElement("p");
        p.innerText=` ${getvalue} Taka is ${text}\n Date: ${timestamp}\n\n`;
        document.getElementById("history2").appendChild(p);  

        const modal=document.getElementById("my_modal_1");
        modal.show();
    }

    else if(getvalue>donate){
        alert("Insufficient balance")
    }

    else if(getvalue<=0 || (isNaN && getvalue!=="number")){
        alert("Please enter a valid input")
    }
    else{
        alert("Something is wrong")
    }
})


document.getElementById("quota3").addEventListener("click",function(){
    const getvalue=convert("quota2");
    const donate=convert2("my-balanc");
    const prvusbal=convert2("quota1")
    const text=convert3("quota-text")
    const timestamp = new Date().toLocaleString();

    const val=document.getElementById("quota2")
        val.value="";
   

    if(getvalue<=donate && getvalue>0){
        const odd=donate-getvalue;
        const even=getvalue+prvusbal;
        document.getElementById("my-balanc").innerText=odd;
        document.getElementById("quota1").innerText=even;

        const p=document.createElement("p");
        p.innerText=` ${getvalue} Taka is ${text}\n Date: ${timestamp}\n\n`;
        document.getElementById("history2").appendChild(p);  

        const modal=document.getElementById("my_modal_1");
        modal.show();
    }

    else if(getvalue>donate){
        alert("Insufficient balance")
    }

    else if(getvalue<=0 || (isNaN && getvalue!=="number")){
        alert("Please enter a valid input")
    }
    else{
        alert("Something is wrong")
    }
})
