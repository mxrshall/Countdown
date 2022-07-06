const hodina = document.getElementById("hodina")
const minuta = document.getElementById("minuta")
const sekunda = document.getElementById("sekunda")
const start = document.getElementById("start")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")

let cas_sekunda = ""
let cas_minuta = ""
let cas_hodina = ""

function odpocet_sekunda(){
    cas_sekunda--
    sekunda.innerHTML = "0" + cas_sekunda

    if (cas_sekunda > 9){
        sekunda.innerHTML = cas_sekunda
    }

    if (cas_sekunda == 0){
        cas_sekunda = 60
    }

    if (cas_sekunda == 59){
        odpocet_minuta()
    }
}

function odpocet_minuta(){
    cas_minuta--
    minuta.innerHTML = "0" + cas_minuta
    
    if (cas_minuta > 9){
        minuta.innerHTML = cas_minuta
    }

    if (cas_minuta <= 0){
        cas_minuta = 60
    }

    if (cas_minuta == 59){
        odpocet_hodina()
    }

}

function odpocet_hodina(){
    cas_hodina--
    hodina.innerHTML = "0" + cas_hodina
    
    if (cas_hodina > 9){
        hodina.innerHTML = cas_hodina
    }

    if (cas_hodina <= 0){
        cas_hodina = 60
    }
}


start.addEventListener("click", function(){
        interval = setInterval(odpocet_sekunda, 1000)
        odpocet_sekunda()
})

plus.addEventListener("click", function(){
    cas_minuta++
    minuta.innerHTML = "0" + cas_minuta
    
    if (cas_minuta > 9){
        minuta.innerHTML = cas_minuta
    }

    if (cas_minuta <= 0){
        cas_minuta = 60
    }

    if (cas_sekunda == 0){
        cas_sekunda = 60
    }

    if (cas_minuta == 59){
        cas_minuta = 0
    }
})

minus.addEventListener("click", function(){
    cas_minuta--
    minuta.innerHTML = "0" + cas_minuta
    
    if (cas_minuta > 9){
        minuta.innerHTML = cas_minuta
    }

    if (cas_minuta <= 0){
        cas_minuta = 60
    }

    if (cas_sekunda == 0){
        cas_sekunda = 60
    }

    if (cas_minuta < 0){
        cas_minuta = 59
    }

})