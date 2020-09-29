

var headline = document.getElementById("changeMe");
var ulElements = document.getElementsByTagName("ul");

headline.innerHTML="Hello inside";
headline.style.color = "blue";



//-----------------------------------------------------
console.log(ulElements);
console.log("This is an unordered list it has the class name of:" + ulElements[0].className)


//-----------------------------------------------------

var btn = document.getElementById("btnDont");
btn.innerHTML = "Click Me";

btn.addEventListener("click",changeUl );

function changeUl(){
    //ulElements[0].style.backgroundColor = "Green";
    ulElements[0].innerHTML = "<li>Cat</li> <li>Dog</li><li>Lizzard</li> <li>Turtle</li>"

    for(var index = 0; index < ulElements.length; index++){
        var element = ulElements[index];

        if(index % 2 === 0){
            element.classList.add("evenUl");
        }else{
            element.classList = "oddUl";
        }
    }
}


//-----------------------------------------------------

document.getElementById("secret").addEventListener("mouseover", function(){

    document.getElementsByTagName("h2")[0].innerHTML = "This is reacting to an EventListener!";
});

document.getElementById("secret").addEventListener("mouseleave", function(){

    document.getElementsByTagName("h2")[0].innerHTML = "Secret under this text?";
});