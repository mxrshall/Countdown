const hodina = document.getElementById("hodina")
const minuta = document.getElementById("minuta")
const sekunda = document.getElementById("sekunda")
const start = document.getElementById("start")

let cas_sekunda = 10
let cas_minuta = 10

function odpocet_sekunda(){
    cas_sekunda--
    sekunda.innerHTML = "0" + cas_sekunda

    if (cas_sekunda > 9){
        sekunda.innerHTML = cas_sekunda
    }

    if (cas_sekunda <= 0){
        cas_sekunda = 60
        odpocet_minuta()
    }
}

function odpocet_minuta(){
    cas_minuta--
    minuta.innerHTML = "0" + cas_minuta
    
    if (cas_minuta > 10){
        minuta.innerHTML = cas_minuta
    }

    if (cas_minuta <= 0){
        cas_minuta = 60
    }

}


start.addEventListener("click", function(){
        interval = setInterval(odpocet, 1000)
        odpocet()
})