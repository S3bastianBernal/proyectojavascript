const productos = [
    {

    nombreProducto: "SH Figuarts Roronoa Zoro One Piece",
    image: "/img/zoro.jpg",
    image2: "/img/zoro2.webp",
    image3: "/img/zoro3.webp",
    Anime: "Onepiece",
    nombre: "Zoro",
    precioTexto: "62,90 €",
    edicion: "Basica",
    informacion: `Lanzamiento: Diciembre de 2023
    Licencia: One Piece
    Fabricado por: Bandai / Tamashii
    Tamaño aproximado: 15 cms
    SKU: FIG22883
    GTIN: 4573102649300`,
    link: "https://kurogami.com/es/producto/sh-figuarts-roronoa-zoro-the-raid-on-onigashima-one-piece",
    id: 1
},
{

    nombreProducto: "SH Figuarts Monkey D Luffy One Piece",
    image: "/img/luffy.webp",
    image2: "/img/luffy3.webp",
    image3: "/img/luffy2.webp",
    Anime: "Onepiece",
    nombre: "Luffy",
    precioTexto: "39,90 €",
    edicion: "Basica",
    informacion: `Lanzamiento: Octubre de 2023
    Licencia: One Piece
    Fabricado por: Bandai / Tamashii
    Tamaño aproximado: 14 cms
    SKU: FIG22884
    GTIN: 4573102649294`,
    link: "https://kurogami.com/es/producto/sh-figuarts-monkey-d-luffy-the-raid-on-onigashima-one-piece",
    id: 2
},    
{

    nombreProducto: "SH Figuarts Sanji One Piece",
    image: "/img/sanji.webp",
    image2: "/img/sanji2.webp",
    image3: "/img/sanji3.webp",
    Anime: "Onepiece",
    nombre: "Sanji",
    precioTexto: "62,90 €",
    edicion: "Basica",
    informacion: `Lanzamiento: Diciembre de 2023
    Licencia: One Piece
    Fabricado por: Bandai / Tamashii
    Tamaño aproximado: 15 cms
    SKU: FIG22885
    GTIN: 4573102649317`,
    link: "https://kurogami.com/es/producto/sh-figuarts-sanji-the-raid-on-onigashima-one-piece",
    id: 3
},
{

    nombreProducto: "Figura Rem Marine Look Version",
    image: "/img/rem.webp",
    image2: "/img/rem2.webp",
    image3: "/img/rem3.webp",    
    Anime: "ReZero",
    nombre: "Rem",
    precioTexto: "29,90 €",
    edicion: "Especial",
    informacion: `Lanzamiento: Mayo de 2023
    Licencia: RE: Zero
    Fabricado por: Taito
    Tamaño aproximado: 23 cms
    SKU: FIG22014
    GTIN: 0000464828332`,
    link: "https://kurogami.com/es/producto/figura-rem-marine-look-version-renewal-edition-re-zero-precious-figure",
    id: 4
},
{

    nombreProducto: "Figura Emilia Graceful Beauty Version",
    image: "/img/emilia.jpg",
    image2: "/img/emilia2.jpg",
    image3: "/img/emilia3.jpg", 
    Anime: "ReZero",
    nombre: "Emilia",
    precioTexto: "344,90 €",
    edicion: "Especial",
    informacion: `Lanzamiento: Mayo de 2023
    Licencia: RE: Zero
    Fabricado por: Kadokawa
    Tamaño aproximado: 24 cms
    SKU: FIG22404
    GTIN: 4935228557172`,
    link: "https://kurogami.com/es/producto/figura-emilia-graceful-beauty-version-re-zero-starting-life-in-another-world-kd-colle",
    id: 5
},{

    nombreProducto: "Figura Mori Calliope",
    image: "/img/mori.webp",
    image2: "/img/mori2.jpg",
    image3: "/img/mori3.jpg",
    Anime: "Hololive",
    nombre: "Mori Calliope",
    precioTexto: "54,90 €",
    edicion: "Basica",
    informacion: `Lanzamiento: Agosto de 2023
    Licencia: Otros Títulos Anime / Manga - H-L
    Fabricado por: Good Smile Company
    Tamaño aproximado: 17 cms
    SKU: FIG22856
    GTIN: 4580416947060`,
    link: "https://kurogami.com/es/producto/figura-mori-calliope-hololive-production-pop-up-parade",
    id: 6
},{

    nombreProducto: "Figura Rei Ayanami",
    image: "/img/rei.webp",
    image2: "/img/rei2.webp",
    image3: "/img/rei3.jpg",
    Anime: "evangelion",
    nombre: "Rei Ayanami",
    precioTexto: "194,90 €",
    edicion: "Basica",
    informacion: `Lanzamiento: Junio de 2024
    Licencia: Evangelion
    Fabricado por: Good Smile Company
    Tamaño aproximado: 25 cms
    SKU: FIG22859
    GTIN: 4580416947114`,
    link: "https://kurogami.com/es/producto/figura-rei-ayanami-red-rouge-rebuild-of-evangelion",
    id: 7
},{

    nombreProducto: "Figura Ciel Tsukihime",
    image: "/img/ciel.webp",
    image2: "/img/ciel2.webp",
    image3: "/img/ciel3.jpg",
    Anime: "Tsukihime",
    nombre: "Ciel Tsukihime",
    precioTexto: "50,90 €",
    edicion: "Basica",
    informacion: `Lanzamiento: Septiembre de 2023
    Licencia: Otros Títulos Anime / Manga - T-Z
    Fabricado por: Good Smile Company
    Tamaño aproximado: 17 cms
    SKU: FIG22857
    GTIN: 4580416947053`,
    link: "https://kurogami.com/es/producto/figura-ciel-tsukihime-a-piece-of-blue-glass-moon-pop-up-parade",
    id: 8
},{

    nombreProducto: "Figura Hestia Shiromuku",
    image: "/img/hestia.jpg",
    image2: "/img/hestia2.webp",
    image3: "/img/hestia3.jpg",
    Anime: "DanMachin",
    nombre: "Hestia Shiromuku",
    precioTexto: "509,90 €",
    edicion: "Basica",
    informacion: `Lanzamiento: Septiembre de 2024
    Licencia: Otros Títulos Anime / Manga - A-G
    Fabricado por: Furyu
    Tamaño aproximado: 28 cms
    SKU: FIG22666
    GTIN: 4580736409316`,
    link: "https://kurogami.com/es/producto/figura-hestia-shiromuku-danmachi-f-nex",
    id: 9
},{

    nombreProducto: "Figura Mahiru Shiina",
    image: "/img/mahiru.webp",
    image2: "/img/mahiru2.jpg",
    image3: "/img/mahiru3.jpg",
    Anime: "AngelNextDoor",
    nombre: "Mahiru Shiina",
    precioTexto: "259,90 €",
    edicion: "Basica",
    informacion: `Lanzamiento: Abril de 2024
    Licencia: Otros Títulos Anime / Manga - T-Z
    Fabricado por: Furyu
    Tamaño aproximado: 22 cms
    SKU: FIG22735
    GTIN: 4580736409521`,
    link: "https://kurogami.com/es/producto/figura-mahiru-shiina-the-angel-next-door-spoils-me-rotten-f-nex",
    id: 10
},{

    nombreProducto: "Figura Yotsuba Nakano Fallen Angel",
    image: "/img/yotsuba.jpg",
    image2: "/img/yotsuba2.jpg",
    image3: "/img/yotsuba3.jpg",
    Anime: "Quintillizas",
    nombre: "Yotsuba",
    precioTexto: "349,90 €",
    edicion: "Especial",
    informacion: `Lanzamiento: Septiembre de 2023
    Licencia: Las Quintillizas
    Fabricado por: Otros Fabricantes
    Tamaño aproximado: 27 cms
    SKU: FIG22380
    GTIN: 4582666820056`,
    link: "https://kurogami.com/es/producto/figura-yotsuba-nakano-fallen-angel-version-las-quintillizas",
    id: 11
},{

    nombreProducto: "Figura Itsuki Nakano Fallen Angel",
    image: "/img/itsuki.jpg",
    image2: "/img/itsuki2.webp",
    image3: "/img/itsuki3.jpg",
    Anime: "Quintillizas",
    nombre: "Itsuki",
    precioTexto: "349,90 €",
    edicion: "Especial",
    informacion: `Lanzamiento: Septiembre de 2023
    Licencia: Las Quintillizas
    Fabricado por: Otros Fabricantes
    Tamaño aproximado: 26 cms
    SKU: FIG22379
    GTIN: 4582666820063`,
    link: "https://kurogami.com/es/producto/figura-itsuki-nakano-fallen-angel-version-las-quintillizas",
    id: 12
},{

    nombreProducto: "Figura Miku Nakano Fallen Angel",
    image: "/img/miku.jpg",
    image2: "/img/miku2.jpg",
    image3: "/img/miku3.webp",
    Anime: "Quintillizas",
    nombre: "Miku",
    precioTexto: "339,90 €",
    edicion: "Especial",
    informacion: `Lanzamiento: Agosto de 2023
    Licencia: Las Quintillizas
    Fabricado por: Otros Fabricantes
    Tamaño aproximado: 27 cms
    SKU: FIG22079
    GTIN: 4582666820049`,
    link: "https://kurogami.com/es/producto/figura-miku-nakano-fallen-angel-version-las-quintillizas",
    id: 13
},{

    nombreProducto: "Figura Nino Nakano Fallen Angel",
    image: "/img/nino.jpg",
    image2: "/img/nino2.jpg",
    image3: "/img/nino3.jpg",
    Anime: "Quintillizas",
    nombre: "Nino",
    precioTexto: "339,90 €",
    edicion: "Especial",
    informacion: `Lanzamiento: Julio de 2023
    Licencia: Las Quintillizas
    Fabricado por: Otros Fabricantes
    Tamaño aproximado: 26 cms
    SKU: FIG21949
    GTIN: 4582666820032`,
    link: "https://kurogami.com/es/producto/figura-nino-nakano-fallen-angel-version-las-quintillizas",
    id: 14
},{

    nombreProducto: "Figura Ichika Nakano Fallen Angel",
    image: "/img/ichika.webp",
    image2: "/img/ichika2.jpg",
    image3: "/img/ichika3.jpg",
    Anime: "Quintillizas",
    nombre: "Ichika",
    precioTexto: "339,90 €",
    edicion: "Especial",
    informacion: `Lanzamiento: Julio de 2023
    Licencia: Las Quintillizas
    Fabricado por: Otros Fabricantes
    Tamaño aproximado: 25 cms
    SKU: FIG21948
    GTIN: 4582666820025`,
    link: "https://kurogami.com/es/producto/figura-ichika-nakano-fallen-angel-version-las-quintillizas",
    id: 15
},

{

    nombreProducto: "Figura Ganyu Genshin Impact",
    image: "/img/ganyu.jpg",
    image2: "/img/ganyu2.webp",
    image3: "/img/ganyu3.jpg",
    Anime: "GenshinImpact",
    nombre: "Ganyu",
    precioTexto: "57,30 €",
    edicion: "Basica",
    informacion: `Lanzamiento: noviembre de 2023
    Licencia: Genshin Impact
    Fabricado por: Otros Fabricantes
    Tamaño aproximado: 25 cms
    SKU: FIG14679
    GTIN: 2465389532161`,
    link: "https://m.es.aliexpress.com/i/1005004362666216.html",
    id: 16
},
{

    nombreProducto: "Figura Yae Miko Genshin Impact",
    image: "/img/yaeMiko.jpg",
    image2: "/img/yaeMiko2.jpg",
    image3: "/img/yaeMiko3.jpg",
    Anime: "GenshinImpact",
    nombre: "YaeMiko",
    precioTexto: "63,28 €",
    edicion: "Basica",
    informacion: `Lanzamiento: noviembre de 2023
    Licencia: Genshin Impact
    Fabricado por: Otros Fabricantes
    Tamaño aproximado: 23 cms
    SKU: FIG62830
    GTIN: 8642402045179`,
    link: "https://www.ebay.com/itm/125439199279",
    id: 17
},
{

    nombreProducto: "Figura Shenhe Genshin Impact",
    image: "/img/shenhe.jpg",
    image2: "/img/shenhe2.jpg",
    image3: "/img/shenhe3.jpg",
    Anime: "GenshinImpact",
    nombre: "shenhe",
    precioTexto: "307,16€",
    edicion: "Basica",
    informacion: `Lanzamiento: febrero de 2024
    Licencia: Genshin Impact
    Fabricado por: Otros Fabricantes
    Tamaño aproximado: 25 cms
    SKU: FIG31290
    GTIN: 0974412469623`,
    link: "https://www.etsy.com/mx/listing/1254752488/shenhe-collectible-figure-from-genshin",
    id: 18
},
{

    nombreProducto: "Figura Shogun Raiden Version Luz de la eternidad",
    image: "/img/raiden.jpg",
    image2: "/img/raiden2.jpg",
    image3: "/img/raiden3.jpg",
    Anime: "GenshinImpact",
    nombre: "Raiden",
    precioTexto: "48,86 €",
    edicion: "Especial",
    informacion: `Lanzamiento: julio de 2024
    Licencia: Genshin Impact
    Fabricado por: Otros Fabricantes
    Tamaño aproximado: 26 cms
    SKU: FIG36132
    GTIN: 1570877123435`,
    link: "https://shopee.com.co/30cm-Raiden-Shogun-Anime-Genshin-Impact-Figura-De-Acci%C3%B3n-Pvc-Colecci%C3%B3n-Modelo-Mu%C3%B1eca-i.576020038.14693083412?xptdk=f444d569-92ad-4d53-b41c-a2570771baed",
    id: 19
},
{
    nombreProducto: "Figura Nahida Genshin Impact",
    image: "/img/nahida.jpg",
    image2: "/img/nahida2.jpg",
    image3: "/img/nahida3.jpg",
    Anime: "GenshinImpact",
    nombre: "Nahida",
    precioTexto: "47,05 €",
    edicion: "Basica",
    informacion: `Lanzamiento: enero de 2024
    Licencia: Genshin Impact
    Fabricado por: Otros Fabricantes
    Tamaño aproximado: 21 cms
    SKU: FIG86551
    GTIN: 2465389532161`,
    link: "https://es.aliexpress.com/i/1005005115380661.html",
    id: 20
},
{
    nombreProducto: "Figura Alpha Shadow Garden",
    image: "/img/alpha.jpg",
    image2: "/img/alpha2.jpg",
    image3: "/img/alpha3.png",
    Anime: "The Eminence In Shadow",
    nombre: "Alpha",
    precioTexto: "338,92 €",
    edicion: "Especial",
    informacion: `Lanzamiento: julio de 2024
    Licencia: The Eminence In Shadow
    Fabricado por: Otros Fabricantes
    Tamaño aproximado: 20 cms
    SKU: FIG46311
    GTIN: 5635149579031`,
    link: "https://es.aliexpress.com/item/1005005180350039.html",
    id: 21
},

{
    nombreProducto: "Figura Rengoku Kimetsu no Yaiba",
    image: "/img/rengoku3.jpg",
    image2: "/img/rengoku2.jpg",
    image3: "/img/rengoku.jpg",
    Anime: "Kimetsu no Yaiba",
    nombre: "Rengoku",
    precioTexto: "35,49 €",
    edicion: "Basica",
    informacion: `Lanzamiento: abril de 2024
    Licencia: Kimetsu no Yaiba
    Fabricado por: Otros Fabricantes
    Tamaño aproximado: 18 cms
    SKU: FIG95104
    GTIN: 4521868240006`,
    link: "https://shopee.com.co/Demon-Slayer-Rengoku-Kyoujurou-Figuras-De-Acci%C3%B3n-Juguetes-GK-Anime-Kimetsu-No-Yaiba-Modelo-De-PVC-Figura-Mu%C3%B1ecas-De-Juguete-i.936985372.23818425043?sp_atk=a131852b-843c-4c60-92b1-afe776b321a9&xptdk=a131852b-843c-4c60-92b1-afe776b321a9",
    id: 22
},
]