const modal = document.querySelector("#modal")

const botãoProcura = document.querySelector("#home main a")
const botãoFechar = document.querySelector("#modal .header a")

botãoProcura.addEventListener("click", () =>{
    modal.classList.remove("hide")
})

botãoFechar.addEventListener("click", () =>{
    modal.classList.add("hide")
})