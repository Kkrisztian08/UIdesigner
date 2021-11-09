function szovegbeallitas() {
    let szoveg = document.getElementById("mintaszoveg").value;
    if (szoveg.trim() === "") {
        document.getElementById("szoveghiba").innerHTML = "A mintaszöveg nem lehet üres!";
        document.getElementById("elonezet").innerHTML = "";
    }
    else{
        document.getElementById("szoveghiba").innerHTML = "";
        document.getElementById("elonezet").innerHTML = szoveg;
    }
}

function betumeretbeallitas() {
    let meret = document.getElementById("betumeret").value;
    document.getElementById("elonezet").style.fontSize = meret + "pt";
}

function betuszinbeallitas() {
    let betuszin = document.getElementById("betuszin").value;
    document.getElementById("elonezet").style.color = betuszin;
}

function hatterbeallitas() {
    let hetterszin = document.getElementById("hatterszin").value;
    document.getElementById("elonezet").style.backgroundColor = hetterszin;
}

function visszaallit() {
    document.getElementById("elonezet").removeAttribute("style");
    document.getElementById("mintaszoveg").value = "Árvíztűrő tükörfúrógép";
    document.getElementById("betumeret").value = "12";
    document.getElementById("betuszin").value = "#000000";
    document.getElementById("hatterszin").value = "#FFFFFF";
    document.getElementById("elonezet").innerHTML = "Árvíztűrő tükörfúrógép";
    document.getElementById("szoveghiba").innerHTML = ""

}

function init() {
    document.getElementById("mintaszoveg").addEventListener("input", szovegbeallitas);
    document.getElementById("betumeret").addEventListener("input", betumeretbeallitas);
    document.getElementById("betuszin").addEventListener("input", betuszinbeallitas);
    document.getElementById("hatterszin").addEventListener("input", hatterbeallitas);
    document.getElementById("alap").addEventListener("click", visszaallit);
}

document.addEventListener("DOMContentLoaded", init);