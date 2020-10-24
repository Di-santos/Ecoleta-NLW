    function UFs(){
    const ufselect = document.querySelector("select[name = uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( estados => {

        for(estado of estados){
            ufselect.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`
        }
    } )
}


function Cidades(event){
    const cityselect = document.querySelector("select[name = city]") 
    const stateInput = document.querySelector("input[name = state]")

    const ufvalor = event.target.value

    const indexState = event.target.selectedIndex
    stateInput.value = event.target.options[indexState].text

    const url=`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalor}/municipios`;

    cityselect.innerHTML=""

    fetch(url)
    .then( res => res.json() )
    .then( cidades => { 

        for(cidade of cidades){
            cityselect.innerHTML += `<option value="${cidade.nome}">${cidade.nome}</option>`
        }

        cityselect.disabled = false;
    })
}

UFs();


document
  .querySelector("select[name = uf]")
  .addEventListener("change", Cidades)



const itenscoleta = document.querySelectorAll(".itens li")

for(item of itenscoleta){
    addEventListener("click", marcaSelecionado)
}


const itensColetados =document.querySelector("input[name = items]")

let itensSelecionados = [];



function marcaSelecionado(event){

    const idLista = event.target;
    idLista.classList.toggle("selecionado")

    var itemId = idLista.dataset.id

    const selecionado = itensSelecionados.findIndex(item => {
        const itemEncontrado = item == itemId
        return itemEncontrado
    })

    if (selecionado >= 0){
        const filtrados = itensSelecionados.filter(item => {
            const diferente = item != itemId
            return diferente
        })

        itensSelecionados = filtrados; 

    }else {
        itensSelecionados.push(itemId)
    }
    
    itensColetados.value = itensSelecionados

}

