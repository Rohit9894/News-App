// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();


import {data,append1,data1} from "./fetch.js"

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

 var country=document.querySelector("#sidebar").children
//  console.log(country)
function search1(){
    console.log(this.id)
    let container1=document.querySelector("#results")
    data(this.id).then((res)=>{
        
        append1(res,container1)
      }) 
    }
    let container1=document.querySelector("#results")

data("in").then(function(res){
    append1(res,container1)
})
for(var el of country)
{
el.addEventListener("click",search1)
}

