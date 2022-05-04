// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {data,append1,data1} from "./fetch.js"
function search2(){
    let container=document.querySelector("#results")
    // if(e.key=="Enter")
    // {
        // window.location.href="news.html"
        let value=localStorage.getItem("search")
        console.log(value)
        data1(value).then((res)=>{
            
          append1(res,container)
        })   
        
    // }
}

search2()
