const soruListesi = [
    {
        soruSiralamasi: 0,
        soru: "Sherlock Holmes'un birçok macerasında yanında olan yakın dostu ve yardımcısı kimdir?",
        a: "Hercule Poirot",
        b: "Dr.Watson",
        c: "Müfettiş Clouseau",
        d: "Miss Marple",
        dogruCevap: "Dr.Watson",
        kazanc:"TEBRİKLER KİM MİLYONER OLMAK İSTEMEZDEN: ('500TL') KAZANDINIZ"
    },
    {
        soruSiralamasi: 1,
        soru:  "Şubat 2021'de Singapur Ulusal Üniversitesinden doçent Dong Vang, iki saat boyunca verdiği çevrim içi dersin sonunda hangisini fark etmiş ve bu durum dünya çapında haberlere konu olmuştur?",
        a: "Bir ilkokul sınıfına bağlandığını",
        b: "Mikrofonun sessizde olduğunu",
        c: "Üzerinde kıyafet olmadığını",
        d: "Palyaço filtresinin açık kaldığını",
        dogruCevap: "Mikrofonun sessizde olduğunu",
        kazanc: "TEBRİKLER KİM MİLYONER OLMAK İSTEMEZDEN: ('1.000TL') KAZANDINIZ"
    },
    {
        soruSiralamasi: 2,
        soru: "Gabardin nedir?",
        a: "Bir enstrüman çeşidi",
        b: "Bir köpek cinsi",
        c: "Bir kumaş türü",
        d: "Bir saç modeli",
        dogruCevap: "Bir kumaş türü",
        kazanc:"TEBRİKLER KİM MİLYONER OLMAK İSTEMEZDEN: ('1.500TL') KAZANDINIZ"
    },
    {
        soruSiralamasi: 3,
        soru: "Hangisinin eski adı amudufıkaridir?",
        a: "Bel kemiği",
        b: "Kaval kemiği",
        c: "Kürek kemiği",
        d: "Tarak kemiği",
        dogruCevap: "Bel kemiği",
        kazanc:"TEBRİKLER KİM MİLYONER OLMAK İSTEMEZDEN: ('2.000TL') KAZANDINIZ"
    },
    {
        soruSiralamasi: 4,
        soru: "Pürdikkat ne demektir?",
        a: "Dikkatsizce",
        b: "Çok dikkatli",
        c: "Gelişigüzel",
        d: "Lalettayin",
        dogruCevap: "Çok dikkatli",
        kazanc:"TEBRİKLER KİM MİLYONER OLMAK İSTEMEZDEN: ('3.000TL') KAZANDINIZ"

    },
    {
        soruSiralamasi: 5,
        soru: "Galatasaray'ın eski futbolcusu Gheorghe Hagi, Galatasaray'a gelmeden önce hangi iki takımda da forma giymiştir?",
        a: " Juventus ve Milan",
        b: "Real Madrid ve Barcelona",
        c: " Manchester United ve Chelsea",
        d: "Bayern Münih ve Borussia Dortmund",
        dogruCevap: "Real Madrid ve Barcelona",
        kazanc:"TEBRİKLER KİM MİLYONER OLMAK İSTEMEZDEN: ('5.000TL') KAZANDINIZ"

    },
    {
        soruSiralamasi: 6,
        soru: "Hangisi güreşin günümüzdeki yaz olimpiyatlarında yer alan disiplinlerinden biridir? ",
        a: "Yağlı güreş",
        b: "Grekoromen güreş",
        c: " Deve güreşi ",
        d: "Sumo güreşi",
        dogruCevap: "Grekoromen güreş",
        kazanc:"TEBRİKLER KİM MİLYONER OLMAK İSTEMEZDEN: ('7.500TL') KAZANDINIZ"

    },
    {
        soruSiralamasi: 7,
        soru: "Hangisi tarafından saldırıya uğrayıp öldürüldüğü kayda geçen bir insan olmamıştır?",
        a: "Piranalar",
        b: "Karıncalar",
        c: "Katil balinalar ",
        d: "Pandalar",
        dogruCevap: "Pandalar",
        kazanc:"TEBRİKLER KİM MİLYONER OLMAK İSTEMEZDEN: ('15.000TL') KAZANDINIZ"

    },
    {
        soruSiralamasi: 8,
        soru: "  'Space Jam'   filmlerinde hangi spor dalındaki ünlü sporcular yer almaktadır?",
        a: "Futbol",
        b: "Basketbol",
        c: "Voleybol ",
        d: "Tenis",
        dogruCevap: "Basketbol",
        kazanc:"TEBRİKLER KİM MİLYONER OLMAK İSTEMEZDEN: ('30.000TL') KAZANDINIZ"
    },
    {
        soruSiralamasi: 9,
        soru: "Skeleton hangisiyle yapılan bir spordur?",
        a: "Kızak",
        b: " Kılıç",
        c: " Paten ",
        d: "Raket",
        dogruCevap: "Kızak",
        kazanc:"TEBRİKLER KİM MİLYONER OLMAK İSTEMEZDEN: ('60.000TL') KAZANDINIZ"
    },
    {
        soruSiralamasi: 10,
        soru: "Ballon d'Or ödülünün en güçlü adayları arasında gösterilen biri hangi mesleği yapıyordur?",
        a: "Futbolculuk",
        b: "Turist rehberliği",
        c: " Müzisyenlik",
        d: "Film yönetmenliği",
        dogruCevap: "Futbolculuk",
        kazanc:"TEBRİKLER KİM MİLYONER OLMAK İSTEMEZDEN: ('125.000TL') KAZANDINIZ"
    },
    {
        soruSiralamasi: 11,
        soru: "'Sahnenin Dışındakiler'adlı romanın yazarı kimdir?",
        a: "Yahya Kemal Beyatlı",
        b: "Ahmet Hamdi Tanpınar",
        c: "Fazıl Hüsnü Dağlarca ",
        d: "Yakup Kadri Karaosmanoğlu",
        dogruCevap: "Ahmet Hamdi Tanpınar",
        kazanc:"TEBRİKLER KİM MİLYONER OLMAK İSTEMEZDEN: ('250.000TL') KAZANDINIZ"

    // }, {
    //     soruSiralamasi: 12,
    //     soru:  "Bir insanın vücudunu oluşturan elementlerden kütlece ikinci sırada yer alanın oranı yüzde 18'ken yüzde 65'le birinci sırada yer alan element hangisidir?",
    //     a: "Azot",
    //     b: " Hidrojen",
    //     c: "Karbon ",
    //     d: "Oksijen",
    //     dogruCevap: "Oksijen",
    //     kazanc:"TEBRİKLER KİM MİLYONER OLMAK İSTEMEZDEN: ('1.000.000TL') KAZANDINIZ"
        
    // },
    }
]
// console.log(soruListesi[1].kazanc)





