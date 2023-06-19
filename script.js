

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");
var p7 = document.getElementById("p7");
var p8 = document.getElementById("p8");

function slide(side) {
    var stringNum; 
    stringNum = p1.childNodes[1].src.split("Products/Product")[1].split(".png");
    let num1 = parseInt(stringNum[0]);

    stringNum = p2.childNodes[1].src.split("Products/Product")[1].split(".png");
    let num2 = parseInt(stringNum[0]);

    stringNum = p3.childNodes[1].src.split("Products/Product")[1].split(".png");
    let num3 = parseInt(stringNum[0]);

    stringNum = p4.childNodes[1].src.split("Products/Product")[1].split(".png");
    let num4 = parseInt(stringNum[0]);

    stringNum = p5.childNodes[1].src.split("Products/Product")[1].split(".png");
    let num5 = parseInt(stringNum[0]);

    stringNum = p6.childNodes[1].src.split("Products/Product")[1].split(".png");
    let num6 = parseInt(stringNum[0]);

    stringNum = p7.childNodes[1].src.split("Products/Product")[1].split(".png");
    let num7 = parseInt(stringNum[0]);

    stringNum = p8.childNodes[1].src.split("Products/Product")[1].split(".png");
    let num8 = parseInt(stringNum[0]);

    if(side == "left"){
        
        p1.childNodes[1].src = `Assets/Products/Product${num2}.png`;
        p2.childNodes[1].src = `Assets/Products/Product${num3}.png`;
        p3.childNodes[1].src = `Assets/Products/Product${num4}.png`;
        p4.childNodes[1].src = `Assets/Products/Product${num5}.png`;
        p5.childNodes[1].src = `Assets/Products/Product${num6}.png`;
        p6.childNodes[1].src = `Assets/Products/Product${num7}.png`;
        p7.childNodes[1].src = `Assets/Products/Product${num8}.png`;
        p8.childNodes[1].src = `Assets/Products/Product${num1}.png`;

    }
    if(side == "right"){
        p1.childNodes[1].src = `Assets/Products/Product${num8}.png`;
        p2.childNodes[1].src = `Assets/Products/Product${num1}.png`;
        p3.childNodes[1].src = `Assets/Products/Product${num2}.png`;
        p4.childNodes[1].src = `Assets/Products/Product${num3}.png`;
        p5.childNodes[1].src = `Assets/Products/Product${num4}.png`;
        p6.childNodes[1].src = `Assets/Products/Product${num5}.png`;
        p7.childNodes[1].src = `Assets/Products/Product${num6}.png`;
        p8.childNodes[1].src = `Assets/Products/Product${num7}.png`;
    }
    return;
}

const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

