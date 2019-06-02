"use strict";
var t = true; 
function scl(){
    // if(t == true){
    document.querySelector(".navbar_min").classList.add("row");
    document.querySelector(".wrapper1").classList.add("col-md-3");
    document.querySelector(".wrapper2").classList.add("col-md-9");
    document.querySelector(".nav1_fit").classList.add("row");
    document.querySelector(".nav1_fit").classList.remove("disp");
    document.querySelector(".nav2_fit").classList.add("row");
    document.querySelector(".nav1_fit").style = "margin:auto;";
    document.querySelector(".nav2_fit").style = "margin:auto;";
    document.querySelector("ul").classList.remove("mr-auto");
    document.querySelector("ul").classList.add("mr-lg-5");
    // document.querySelector("ul").add("mr-lg-5");
    // document.querySelector(".logo").classList.remove("text-light");
}