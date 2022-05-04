var data=async (url) =>{
    let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${url}`)
    let data=await res.json();
   
    return data.articles;
}
var data1=async (url) =>{
    let res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${url}`)
    let data=await res.json();
   
    return data.articles;
}
let append1= (data,container) => {
    container.innerHTML=null;
    // {title,urlToImage,description }
    data.forEach((el) =>
    {
      let div=document.createElement('div');
      div.setAttribute("id","div")

      let img=document.createElement("img");
      img.setAttribute("id","img")
      img.addEventListener("click",function(){
          set(el)
      })
      let h2=document.createElement("h4");
    
      img.src=el.urlToImage;
      h2.innerText=el.title;
      let p=document.createElement("p")
      p.innerText=el.description;
      let div2=document.createElement("div")
      div2.setAttribute('id',"div2")
      
       div2.append(h2,p)
      div.append(img,div2)
      container.append(div)
    })
    function set(el){
       var obj={
           img:el.urlToImage,
           title:el.title,
           des:el.description,
       }
       console.log(obj)
       localStorage.setItem("data1",JSON.stringify(obj))
       window.location.href="news.html"
        }
    
}







export {data,append1,data1};
