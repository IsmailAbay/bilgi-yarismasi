let soruAlani = document.querySelector('#soruAlani')
let paraOdulListesi = document.querySelector('#paraOdulListesi')
let buttonA = document.querySelector('#buttonA')
let buttonB = document.querySelector('#buttonB')
let buttonC = document.querySelector('#buttonC')
let buttonD = document.querySelector('#buttonD')
let sure = document.querySelector('#sure')
let odul = document.querySelector('#odul')

let suAnkiSoruSirasi = 0

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
    buttonA.style.color = "white";
    buttonB.style.color = "white";
    buttonC.style.color = "white";
    buttonD.style.color = "white";
}

function soruVeSecenekleriEkranaBas() {
    soruAlani.textContent = soruListesi[suAnkiSoruSirasi].soru
    buttonA.innerHTML += `${soruListesi[suAnkiSoruSirasi].a}`
    buttonB.innerHTML += `${soruListesi[suAnkiSoruSirasi].b}`
    buttonC.innerHTML += `${soruListesi[suAnkiSoruSirasi].c}`
    buttonD.innerHTML += `${soruListesi[suAnkiSoruSirasi].d}`
    const listItem = document.querySelector(`[data-id="${suAnkiSoruSirasi + 1}"]`)
    listItem.classList.add("active")

    const onceki = document.querySelector(`[data-id="${suAnkiSoruSirasi}"]`)
    onceki.classList.remove("active")

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

function cevabiKontrolEt(verilenCevap, button) {
    const dogruCevap = soruListesi[suAnkiSoruSirasi].dogruCevap
    button.style.color = "#E8AA42"
    setTimeout(() => {

        //Doğru cevap verildiği takdirde
        if (verilenCevap === dogruCevap) {
            button.style.color = "yellowgreen"
            suAnkiSoruSirasi++
            setTimeout(() => {
                soruVeSecenekleriTemizle()
                soruVeSecenekleriEkranaBas()
                sureyiBaslat()
            }, 1000);
        }

        //Yanlış cevap verildiği takdirde
        else {
            button.style.color = "red"
            odul.style.display = 'block'

            // 1 ve ya 2.sorularda yanlış yapılması durumunda
            if (suAnkiSoruSirasi == 0 || suAnkiSoruSirasi == 1) {
                odul.textContent = " Kazanılan Ödul: 0 TL"
            }

            // 3,4,5,6 veya 7.sorularda yanlış yapılması durumunda
            else if (suAnkiSoruSirasi == 2 || suAnkiSoruSirasi == 3 || suAnkiSoruSirasi == 4 || suAnkiSoruSirasi == 5 || suAnkiSoruSirasi == 6) {
                odul.textContent = " Kazanılan Ödul: 1000 TL"
            }

            // 8,9,10,11 veya 12.sorularda yanlış yapılması durumunda
            else if (suAnkiSoruSirasi == 7 || suAnkiSoruSirasi == 8 || suAnkiSoruSirasi == 9 || suAnkiSoruSirasi == 10 || suAnkiSoruSirasi == 11) {
                odul.textContent = " Kazanılan Ödul: 15000 TL"
            }
            else
                odul.textContent = soruListesi[suAnkiSoruSirasi - 1].kazanc
        }
    }, 1000);
}

function yuzdeElliJokerHakkiniKullan() {
    const a = soruListesi[suAnkiSoruSirasi].a
    const b = soruListesi[suAnkiSoruSirasi].b
    const c = soruListesi[suAnkiSoruSirasi].c
    const d = soruListesi[suAnkiSoruSirasi].d
    const dogruCevap = soruListesi[suAnkiSoruSirasi].dogruCevap

    let dictionary = [
        {
            yanit: a,
            sira: 1
        },
        {
            yanit: b,
            sira: 2
        },
        {
            yanit: c,
            sira: 3
        },
        {
            yanit: d,
            sira: 4
        }
    ]


    let yanlisCevapSiralari=[]
    for (let item of dictionary) {
        if (item.yanit != dogruCevap) {
            yanlisCevapSiralari.push(item.sira)
            console.log(yanlisCevapSiralari)
            // buttonA.textContent = ""
            // buttonA.style.height = "45px"
        }
    }
    const random = Math.floor(Math.random() * yanlisCevapSiralari.length);
    yanlisCevapSiralari.splice(random,1)
    

    for(let yanlis of yanlisCevapSiralari){
        if(dictionary.concat(x=>x.sira==yanlis)){
          
        }
    }
}


console.log(random, months[random]);