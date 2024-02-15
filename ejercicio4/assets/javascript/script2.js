const div = document.querySelector("#key");

let color = ''
document.addEventListener('keydown', function(event){
    if (event.key === "a"){
        div.style.backgroundColor = 'pink';
    } else if (event.key === "s"){
        div.style.backgroundColor = 'orange';
    } else if (event.key === "d") {
        div.style.backgroundColor = 'skyblue';
    } else if (event.key === "q") {
        creaNuevo ('purple')
    } else if (event.key === "w") {
        creaNuevo ('grey')
    } else if (event.key === "e") {
        creaNuevo ('brown');
    }

});

function creaNuevo(color) {
    const newDiv = document.createElement ("div")
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.border = "solid 1px black";
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv)
} 


