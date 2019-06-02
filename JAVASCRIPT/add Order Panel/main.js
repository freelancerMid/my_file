"use strict";
var arr = [];

function addfood() {
    var form = document.getElementById("foodid").value;
    var fsize = document.getElementById("size").value;
    var qty = document.getElementById("qtyid").value;
    
    var obj = new Object();
    obj["food"] = form;
    obj["size"] = fsize;
    obj["qty1"] = qty;
    arr.push(obj);
    document.getElementById("tablelst").style = "transform: translateY(-50px);opacity: 0;";

    document.getElementById("alertmsg").style = "opacity: 1;";

    document.getElementById("addressbtn").style = "transform: translateY(-50px);opacity: 0;";

    setTimeout(() => {
        document.getElementById("alertmsg").style = "opacity: 0;transition:all 0.6s";
    }, 1000);

    document.getElementById("address").style = "transform:translateX(-500px);opacity:0;";

    // console.log(arr);
}

function Showorder() {
    var t = "<table id='list' border=1 border-collapse><tr id='tr1'><th>FOOD</th><th>SIZE</th><th>QUANTITY</th><th>TOTAL PRICE</th></tr>"
    arr.forEach((i) => {
        t += "<tr><td>" + i.food + "<td>" + i.size + "<td>" + i.qty1 + "</tr>";
    })
    t += "</table>"
    document.getElementById("tablelst").style = "transform: translateY(0px);opacity: 1;";
    document.getElementById("addressbtn").style = "transform: translateY(0px);opacity: 1;";
    document.getElementById("tablelst").innerHTML = t;
    // console.log(list);

}

function Showorder1() {
    let myform = document.getElementById("myform");
    let pTag = document.getElementById("list");

    pTag.style = "background-color:green;display:inline-block;transition:all 0.6s;opacity:1;";

    myform.style = "opacity:0;transition:all 0.6s;";

}

function foodprice() {
    var form = document.getElementById("foodid").value;
    var fsize = document.getElementById("size").value;
    var qty = document.getElementById("qtyid").value;
    if (form == "food1" && fsize == "large") {
        price.value = 150;

    } else {
        price.value = 200;

    }
}

function addadress() {
    document.getElementById("address").style = "transform:translateX(0px);opacity:1;";
}
