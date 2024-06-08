let qoute =document.getElementById("qoute")
let author =document.getElementById("author")
let newQouteBtn =document.getElementById("newQouteBtn")
let tweetBtn =document.getElementById("tweetBtn")
let val="https://api.quotable.io/random"
async function newQoutes(api){
    let url =await fetch(api)
    let res=await url.json()
    qoute.innerHTML=res.content
    author.innerHTML=res.author
    author.style.cssText=`
    display:block;
    `
    
}

newQouteBtn.addEventListener("click",function(){
    newQoutes(val)
})

function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${qoute.innerHTML} " --${author.innerHTML}-- "`,"Tweet Window","width=600,height=300")
}
tweetBtn.addEventListener("click",function(){
    tweet()
})