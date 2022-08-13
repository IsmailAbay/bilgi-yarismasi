let soruAlani = document.querySelector('#soruAlani')
let paraOdulListesi = document.querySelector('#paraOdulListesi')
let buttonA = document.querySelector('#buttonA')
let buttonB = document.querySelector('#buttonB')
let buttonC = document.querySelector('#buttonC')
let buttonD = document.querySelector('#buttonD')
let sure = document.querySelector('#sure')
let odul = document.querySelector('#odul')

let suAnkiSoruSirasi = 0

// paraOdulListesi.lastElementChild.style.color = "blue"

soruVeSecenekleriEkranaBas()

// sureyiBaslat()

function soruVeSecenekleriTemizle() {
    buttonA.innerHTML = ""
    buttonB.innerHTML = ""
    buttonC.innerHTML = ""
    buttonD.innerHTML = ""
    buttonA.innerHTML += "<b>A: </b>"
    buttonB.innerHTML += "<b>B: </b>"
    buttonC.innerHTML += "<b>C: </b>"
    buttonD.innerHTML += "<b>D: </b>"
}

function soruVeSecenekleriEkranaBas() {
    soruAlani.textContent = soruListesi[suAnkiSoruSirasi].soru
    buttonA.innerHTML += `${soruListesi[suAnkiSoruSirasi].a}`
    buttonB.innerHTML += `${soruListesi[suAnkiSoruSirasi].b}`
    buttonC.innerHTML += `${soruListesi[suAnkiSoruSirasi].c}`
    buttonD.innerHTML += `${soruListesi[suAnkiSoruSirasi].d}`
}

function sureyiBaslat() {
    let kalanSure = "30"
    sure.textContent = `00:${kalanSure}`

    setInterval(() => {
        sure.textContent = `00:${kalanSure--}`
        if (kalanSure == -1) {
        }
    }, 1000);
}


function ASecenegiTiklandi() {
    const yanitA = soruListesi[suAnkiSoruSirasi].a
    cevabiKontrolEt(yanitA, buttonA)
}
function BSecenegiTiklandi() {
    const yanitB = soruListesi[suAnkiSoruSirasi].b
    cevabiKontrolEt(yanitB, buttonB)
}
function CSecenegiTiklandi() {
    const yanitC = soruListesi[suAnkiSoruSirasi].c
    cevabiKontrolEt(yanitC, buttonC)
}
function DSecenegiTiklandi() {
    const yanitD = soruListesi[suAnkiSoruSirasi].d
    cevabiKontrolEt(yanitD, buttonD)
}

function cevabiKontrolEt(verilenCevap, element) {
    const dogruCevap = soruListesi[suAnkiSoruSirasi].dogruCevap
    element.style.color = "#E8AA42"
    setTimeout(() => {
        if (verilenCevap === dogruCevap) {
            element.style.color = "yellowgreen"
            suAnkiSoruSirasi++
            soruVeSecenekleriTemizle()
            soruVeSecenekleriEkranaBas()
            sureyiBaslat()
            paraOdulListesi.lastElementChild.style.color = "yellow"
        }
        else {
            element.style.color = "red"
            odul.style.display = 'block'

            if (suAnkiSoruSirasi == 0) {
                odul.textContent = " Kazanılan Ödul: 0 TL"

            } else
                odul.textContent = soruListesi[suAnkiSoruSirasi - 1].kazanc
        }
    }, 1000);
}