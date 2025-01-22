let database = [
    {
        category: "coffee",
        products: [
            {
            name: "Midnight Mirage",
            picture: "./assets/img/03_products/02_coffee/",
            description: "Geheimnisvoller Kaffee mit dunklen Beeren und einem Hauch von Schokolade.",
            categories: ["Fruchtig", "Dunkel", "Mystisch"],
            price: 7.50,
            inBasket: true,
            amountInStore: 25,
            rating: 4.8,
            origin: "Kolumbien"
            },
            {
            name: "Sunrise Serenade",
            picture: "./assets/img/03_products/02_coffee/",
            description: "Sanfter Weckruf mit blumigen Noten und einem Hauch von Zitrus.",
            categories: ["Blumig", "Leicht", "Zitrus"],
            price: 8.75,
            inBasket: true,
            amountInStore: 30,
            rating: 4.6,
            origin: "Äthiopien"
            },
            {
            name: "Desert Dusk",
            picture: "./assets/img/03_products/02_coffee/",
            description: "Warmer, nussiger Kaffee mit einer leichten Süße von Karamell.",
            categories: ["Nussig", "Karamell", "Süß"],
            price: 8.50,
            inBasket: true,
            amountInStore: 15,
            rating: 4.5,
            origin: "Brasilien"
            },
            {
            name: "Velvet Volcano",
            picture: "./assets/img/03_products/02_coffee/",
            description: "Intensiver, erdiger Kaffee mit einem rauchigen Abgang.",
            categories: ["Intensiv", "Erdig", "Rauchig"],
            price: 10.00,
            inBasket: true,
            amountInStore: 20,
            rating: 4.7,
            origin: "Guatemala"
            },
            {
            name: "Cosmic Cascade",
            picture: "./assets/img/03_products/02_coffee/",
            description: "Lebhafter Kaffee mit Noten von tropischen Früchten und einer spritzigen Säure.",
            categories: ["Tropisch", "Spritzig", "Lebhaft"],
            price: 12.50,
            inBasket: true,
            amountInStore: 10,
            rating: 4.9,
            origin: "Kenia"
            },
            {
            name: "Twilight Truffle",
            picture: "./assets/img/03_products/02_coffee/",
            description: "Luxuriöser, schokoladiger Kaffee mit einem Hauch von Vanille.",
            categories: ["Schokoladig", "Luxuriös", "Vanille"],
            price: 9.00,
            inBasket: true,
            amountInStore: 18,
            rating: 4.6,
            origin: "Indonesien"
            },
            {
            name: "Aurora Bliss",
            picture: "./assets/img/03_products/02_coffee/",
            description: "Heller, balancierter Kaffee mit Noten von Honig und Mandeln.",
            categories: ["Balanciert", "Honig", "Mandel"],
            price: 8.25,
            inBasket: true,
            amountInStore: 30,
            rating: 4.5,
            origin: "Costa Rica"
            },
            {
            name: "Stardust Symphony",
            picture: "./assets/img/03_products/02_coffee/",
            description: "Samtiger Kaffee mit einer subtilen Süße und Noten von roten Früchten.",
            categories: ["Samtig", "Süß", "Rote Früchte"],
            price: 7.75,
            inBasket: true,
            amountInStore: 22,
            rating: 4.8,
            origin: "Peru"
            }
        ],
    },
    {
        category: "kaffeemaschinen",
        products: [
            {
            name: "Brewzilla",
            picture: "./assets/img/03_products/01_coffeemachines/Brewzilla.jpeg",
            description: "Die ultimative Maschine für jede Kaffee-Herausforderung.",
            categories: ["Espresso", "Manuell", "Stahl"],
            price: 349.99,
            inBasket: true,
            amountInStore: 15,
            rating: 4.7,
            },
            {
            name: "Espresso King",
            picture: "./assets/img/03_products/01_coffeemachines/Espresso_King.jpeg",
            description: "Die Krönung des Espressogenusses.",
            categories: ["Espresso", "Automatisch", "Premium"],
            price: 299.99,
            inBasket: true,
            amountInStore: 10,
            rating: 4.5,
            },
            {
            name: "Coffeinator Gen X",
            picture: "./assets/img/03_products/01_coffeemachines/Coffeinator_x.jpeg",
            description: "High-Tech für die ultimative Koffein-Experience.",
            categories: ["Kaffeevollautomat", "High-Tech", "Stylisch"],
            price: 499.99,
            inBasket: true,
            amountInStore: 8,
            rating: 4.8,
            },
            {
            name: "Future Shot v1",
            picture: "./assets/img/03_products/01_coffeemachines/Future_shot_1.jpeg",
            description: "Die Zukunft des Espressos beginnt hier.",
            categories: ["Espresso", "Modern", "Kompakt"],
            price: 399.99,
            inBasket: true,
            amountInStore: 12,
            rating: 4.6,
            },
            {
            name: "Future Shot v2",
            picture: "./assets/img/03_products/01_coffeemachines/Future_shot_2.jpeg",
            description: "Noch besser, noch futuristischer.",
            categories: ["Espresso", "Fortschrittlich", "Stylisch"],
            price: 449.99,
            inBasket: true,
            amountInStore: 10,
            rating: 4.9,
            },
            {
            name: "Killing Sleep",
            picture: "./assets/img/03_products/01_coffeemachines/killingsleep.jpeg",
            description: "Keine Müdigkeit mehr dank dieser kraftvollen Maschine.",
            categories: ["Espresso", "Power", "Bold"],
            price: 329.99,
            inBasket: true,
            amountInStore: 18,
            rating: 4.4,
            },
            {
            name: "Bean Beast",
            picture: "./assets/img/03_products/01_coffeemachines/Bean_beast.jpeg",
            description: "Der ungezähmte Meister des Kaffees.",
            categories: ["Bohnen", "Stark", "Rugged"],
            price: 279.99,
            inBasket: true,
            amountInStore: 20,
            rating: 4.3,
            },
            {
            name: "Brew Blaster 3000",
            picture: "./assets/img/03_products/01_coffeemachines/Brew_Blaster_3000.jpeg",
            description: "Blastet dir den perfekten Kaffee in die Tasse.",
            categories: ["Automatisch", "Schnell", "Effizient"],
            price: 379.99,
            inBasket: true,
            amountInStore: 14,
            rating: 4.6,
            },
        ],
    },
    {
        category: "equipment",
        products: [
            {
                name: "Foam Master 5000",
                picture: "./assets/img/03_products/03_accessories/Foam_Master_5000.jpeg",
                description: "Schaum wie aus der Meisterhand, für den perfekten Cappuccino.",
                categories: ["Milchaufschäumer", "Elektrisch", "Stahl"],
                price: 39.99,
                inBasket: true,
                amountInStore: 30,
                rating: 4.8,
            },
            {
                name: "Bean Buddy",
                picture: "./assets/img/03_products/03_accessories/Bean_Buddy.jpeg",
                description: "Der treue Begleiter für frisch gemahlene Kaffeebohnen.",
                categories: ["Kaffeemühle", "Manuell", "Kompakt"],
                price: 49.99,
                inBasket: false,
                amountInStore: 25,
                rating: 4.7,
            },
            {
                name: "Steamy Steve",
                picture: "./assets/img/03_products/03_accessories/Steamy_Steve.jpeg",
                description: "Lässt deinen Kaffee noch heißer erscheinen.",
                categories: ["Milchkännchen", "Stahl", "Hitzeresistent"],
                price: 24.99,
                inBasket: true,
                amountInStore: 40,
                rating: 4.5,
            },
            {
                name: "Grindzilla",
                picture: "./assets/img/03_products/03_accessories/Grindzilla.jpeg",
                description: "Der Gigant unter den Kaffeebohnenschreddern.",
                categories: ["Kaffeemühle", "Elektrisch", "Profi"],
                price: 99.99,
                inBasket: true,
                amountInStore: 15,
                rating: 4.9,
            },
            {
                name: "Spoon of Destiny",
                picture: "./assets/img/03_products/03_accessories/Spoon_of_Destiny.jpeg",
                description: "Der Löffel, der die perfekte Menge misst.",
                categories: ["Messlöffel", "Holz", "Ergonomisch"],
                price: 9.99,
                inBasket: false,
                amountInStore: 50,
                rating: 4.6,
            },
            {
                name: "Filter Frenzy",
                picture: "./assets/img/03_products/03_accessories/Filter_Frenzy.jpeg",
                description: "Für kristallklaren Kaffeegenuss.",
                categories: ["Kaffeefilter", "Papier", "Kompostierbar"],
                price: 4.99,
                inBasket: true,
                amountInStore: 100,
                rating: 4.4,
            },
            {
                name: "Cup Claw",
                picture: "./assets/img/03_products/03_accessories/Cup_Claw.jpeg",
                description: "Griffiger als eine Bärenpranke, für den perfekten Griff.",
                categories: ["Tasse", "Keramik", "Rutschfest"],
                price: 14.99,
                inBasket: false,
                amountInStore: 60,
                rating: 4.7,
            },
            {
                name: "Drip Defender",
                picture: "./assets/img/03_products/03_accessories/Drip_Defender.jpeg",
                description: "Schützt deine Küche vor Kaffeeunfällen.",
                categories: ["Tropfschale", "Silikon", "Antirutsch"],
                price: 19.99,
                inBasket: true,
                amountInStore: 35,
                rating: 4.6,
            }
        ]
    }
];