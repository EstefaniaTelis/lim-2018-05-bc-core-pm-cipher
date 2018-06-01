let cifrado = document.getElementById("encodeButton");
let descifrado = document.getElementById("decodeButton");

cifrado.addEventListener("click",encode);
descifrado.addEventListener("click",decode);

function encode() {

    let string = document.getElementById("in").value;
    let offset = parseInt(document.getElementById("key").value);
    let output = cipher.encode(offset,string);

document.getElementById("out").innerHTML = output;

}

function decode() {

    let string = document.getElementById("in").value;
    let offset = parseInt(document.getElementById("key").value);
    let output = cipher.decode (offset,string);

document.getElementById("out").innerHTML = output;

}