let tarif = document.getElementById('tarif')
let food = document.getElementById('foodTVA')
let alcool = document.getElementById('alcoholTVA')


let tarifEntry = 0
let foodEntry = 0
let alcoholEntry = 0


tarif.addEventListener('input', function() {
    tarifEntry = this.value
    calculator()
    replacer()
})

food.addEventListener('change', function(){
    if (this.checked) {
        foodEntry = 1;
      } else {
        foodEntry = 0;
      }
})


alcool.addEventListener('change', function(){
    if (this.checked) {
        alcoholEntry = 1;
      } else {
        alcoholEntry = 0;
      }
})

function calculator () {
    if (foodEntry == 1) {
        tarifEntry = tarifEntry * 1,055
    } else if (alcoholEntry == 1){
        tarifEntry = tarifEntry * 1,20
    }
}

function replacer () {
    document.getElementById('tarif-display').innerHTML = tarifEntry
}