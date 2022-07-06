const hodina = document.getElementById("hodina")
const minuta = document.getElementById("minuta")
const sekunda = document.getElementById("sekunda")
const start = document.getElementById("start")

const plus1 = document.getElementById("plus1")
const plus2 = document.getElementById("plus2")
const plus3 = document.getElementById("plus3")

const minus1 = document.getElementById("minus1")
const minus2 = document.getElementById("minus2")
const minus3 = document.getElementById("minus3")

let cas_sekunda = 0
let cas_minuta = 0
let cas_hodina = 0

function odpocet_sekunda(){
    cas_sekunda--
    sekunda.innerHTML = "0" + cas_sekunda

    if (cas_sekunda > 9){
        sekunda.innerHTML = cas_sekunda
    }

    if (cas_sekunda <= 0){
        cas_sekunda = 60
        sekunda.innerHTML = "00"
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
        cas_hodina = 0
        hodina.innerHTML = "00"
    }
}


start.addEventListener("click", function(){
        interval = setInterval(odpocet_sekunda, 1000)
        odpocet_sekunda()
})

plus1.addEventListener("click", function(){ //plus 30s
    cas_sekunda = cas_sekunda + 30
    sekunda.innerHTML = cas_sekunda

    if (cas_sekunda >= 59){
        cas_sekunda = 0
        sekunda.innerHTML = "00"
    }

})

plus2.addEventListener("click", function(){ //plus 1m
    cas_minuta++
    minuta.innerHTML = "0" + cas_minuta

    if (cas_minuta > 9){
        minuta.innerHTML = cas_minuta
    }

    if (cas_minuta > 59){
        cas_minuta = 0
        minuta.innerHTML = "00"
    }
}) 

plus3.addEventListener("click", function(){ //plus 1h
    cas_hodina++
    hodina.innerHTML = "0" + cas_hodina

    if (cas_hodina > 9){
        hodina.innerHTML = cas_hodina
    }

    if (cas_hodina > 24){
        cas_hodina = 0
        hodina.innerHTML = "00"
    }
}) 

minus1.addEventListener("click", function(){ //minus 30s
    cas_sekunda = cas_sekunda - 30
    sekunda.innerHTML = cas_sekunda

    if (cas_sekunda < 0){
        cas_sekunda = 30
        sekunda.innerHTML = "30"
    }

    if (cas_sekunda ==0){
        sekunda.innerHTML = "00"
    }

})

minus2.addEventListener("click", function(){ //minus 1m
    cas_minuta--
    minuta.innerHTML = "0" + cas_minuta

    if (cas_minuta > 9){
        minuta.innerHTML = cas_minuta
    }

    if (cas_minuta < 0){
        cas_minuta = 59
        minuta.innerHTML = cas_minuta
    }
    
}) 

minus3.addEventListener("click", function(){ //plus 1h
    cas_hodina--
    hodina.innerHTML = "0" + cas_hodina

    if (cas_hodina > 9){
        hodina.innerHTML = cas_hodina
    }

    if (cas_hodina < 0){
        cas_hodina = 24
        hodina.innerHTML = cas_hodina
    }
 
}) 


