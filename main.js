
function szovegMegvaltozott(){
    let szoveg= document.getElementById("szoveg").value;
    document.getElementById("elonezet").innerHTML = szoveg;
}

function szovegBillentyu(e){
    e.stopPropagation();
}

function meretMegvaltozott(){
    let meret= document.getElementById("meret").value;
    if(meret<=0){
        document.getElementById("meretHiba").innerHTML = "A méret nem lehet 0 vagy kevesebb!";
    }else if(meret===!isNaN){
        document.getElementById("meretHiba").innerHTML = "A méretet számmal kell megadni!";
    }else{
        document.getElementById("meretHiba").innerHTML = "";
    }
    document.getElementById("elonezet").style.fontSize = meret+"pt";
}



function meretBillentyu(e){

    e.stopPropagation();

}

function meretBillentyu(e){
    e.stopPropagation();
}
function szovegMegvaltozott(){
    let meret= document.getElementById("meret").value;
    document.getElementById("elonezet").style.fontSize = meret+"pt";
}



function szovegBillentyu(e){
    e.stopPropagation();
}

function init() {
    document.getElementById("szoveg").addEventListener("input", szovegMegvaltozott);
    document.addEventListener("keydown", szovegBillentyu);

    document.getElementById("meret").addEventListener("input", meretMegvaltozott);
    document.addEventListener("keydown", meretBillentyu);

}
document.addEventListener("DOMContentLoaded", init);