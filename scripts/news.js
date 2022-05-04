// Ude Import export (MANDATORY)
// import {data,append1,data1} from "./fetch.js"
import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();
import {data,append1,data1} from "./fetch.js"

var data2=JSON.parse(localStorage.getItem("data1"))
// append2(data3)

let img=document.createElement("img")
img.setAttribute("id","img1");
img.src=data2.img;
let h3=document.createElement("h3")
h3.innerText=data2.title;
let p=document.createElement("p")
p.innerText=data2.des;
let box=document.querySelector("#results")
box.append(img,h3,p)


function search2(e){
    let container=document.querySelector("#results")
    if(e.key=="Enter")
    {
        let value1=document.querySelector("#search_input").value;
              localStorage.setItem("search",value1)
              window.location.href='search.html'
    //     let value=document.querySelector("#search_input").value;
    //     data1(value).then((res)=>{
            
    //       append1(res,container)
        
    }
}
document.querySelector("#search_input").addEventListener("keydown",search2)