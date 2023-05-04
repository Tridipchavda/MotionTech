
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");

function slide(side) {
    var stringNum1 = p1.childNodes[1].src.split("Product")[1].split(".png");
    let num1 = parseInt(stringNum1[0]);

    var stringNum2 = p2.childNodes[1].src.split("Product")[1].split(".png");
    let num2 = parseInt(stringNum2[0]);

    var stringNum3 = p3.childNodes[1].src.split("Product")[1].split(".png");
    let num3 = parseInt(stringNum3[0]);

    if(side == "left"){
        console.log(num1,num2,num3);
        p1.childNodes[1].src = `Assets/Product${num2}.png`;
        p2.childNodes[1].src = `Assets/Product${num3}.png`;
        p3.childNodes[1].src = `Assets/Product${num1}.png`;

    }
    if(side == "right"){
        console.log(num1,num2,num3);
        p1.childNodes[1].src = `Assets/Product${num3}.png`;
        p2.childNodes[1].src = `Assets/Product${num1}.png`;
        p3.childNodes[1].src = `Assets/Product${num2}.png`;
    }
    return;
}

const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
