const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0

const botSay = () => {
    return[
       "halo, perkenalkan nama saya azkaBot. siapa nama kamu?"
    ]
}
pertanyaan.innerHTML = botSay()[0]

function botStart() {
    init++
    if (init === 1) {
        console.log({ nama: jawaban.value })
        pertanyaan.innerHTML = 'berapa usia kamu?'
        jawaban.value = ""
    } else if (init === 2) {
        console.log({ usia: jawaban.value })
        pertanyaan.innerHTML = 'waw.. kamu sudah cukup tua yaa.. btw apa hobi kamu?'
        jawaban.value = ""
    } else if (init === 3) {
        console.log({ hobi: jawaban.value }) 
        pertanyaan.innerHTML = 'widih.. kalo hobi aku turu.. apakah kamu suka dengan webseit ku?'
        jawaban.value = ""      
    } else if (init === 4) {
        console.log({ pacar: jawaban.value })
        pertanyaan.innerHTML = ' semoga suka ya hehe.. btw kamu lagi apa ? ^>^'
        jawaban.value = ""
    } else if (init === 5) {
        console.log({ pacar: jawaban.value })
        pertanyaan.innerHTML = ' asik dong.. aku lagi gabut nih hehe.. oh iya nama bapak kamu siapa ? ^>^'
        jawaban.value = ""
    } else if (init === 6) {
        console.log({ pacar: jawaban.value })
        pertanyaan.innerHTML = ' kalo nama bapak aku paijo wkwk udah ah aku mau eek dulu wkwk ^-^'
        jawaban.value = ""
    } else if (init === 7) { 
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    
}

function finishing() {
    pertanyaan.innerHTML = 'thnks ya sudah main ke azkaBot ^3^'
    jawaban.value = "oke.. thnks juga"
}

function botEnd() {
   window.location.reload()
   jawaban.value = ""
}
