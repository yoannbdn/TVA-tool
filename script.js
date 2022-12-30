let tarif = document.getElementById('tarif')
let food = document.getElementById('foodTVA')
let alcool = document.getElementById('alcoholTVA')


let tarifEntry = 0
let foodEntry = false
let alcoholEntry = false


tarif.addEventListener('input', function() {
    tarifEntry = this.value
})

food.addEventListener('check', function(){
    foodEntry = true
})

alcool.addEventListener('check', function(){
    alcoholEntry = true
})

function calculator () {
    if (foodEntry == true) {
        tarifEntry = tarifEntry * 1,055
    } else if (alcoholEntry == true){
        tarifEntry = tarifEntry * 1,20
    }
}

function replacer () {
    document.getElementById('tarif-display').innerHTML = tarifEntry
}