// HTML ELEMENTLERİ İÇİN DEĞİŞKEN TANIMLAMA
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var colorCodes = document.querySelector("#colorcodes");

// renk değişikliğ yapan fonsiyon yazma

function renkdeğişikliği() {
    body.style.background ="linear-gradient(to right, "+ color1.value +" ," + color2.value + " )";
    colorCodes.textContent= body.style.background;

}
window.addEventListener("load",renkdeğişikliği);
color1.addEventListener("input",renkdeğişikliği);
color2.addEventListener("input",renkdeğişikliği);
