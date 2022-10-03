import { Data, DataLoaderInterface, Options } from '../../types/types';

class DataLoader implements DataLoaderInterface {
    initialData: Data = [
        {
            article: '001',
            brand: 'Bars',
            name: 'Bars TTR 125',
            type: 'Pitbike',
            color: 'red',
            engineType: 'four-stroke',
            engineV: 119.7,
            engineHp: 7.9,
            fuelTankV: 3.2,
            weight: 67,
            country: 'China',
            description:
                'Bars TTR 125 is the so-called pitbike - a powerful motorcycle of small size, designed for entertainment outside the city or on specialized tracks.',
            imgSrc: './goods/img/bars-ttr-125.jpg',
            availability: 2,
            price: 600,
            popular: true,
        },
        {
            article: '002',
            brand: 'Bars',
            name: 'Bars TTR 250',
            type: 'Enduro',
            color: 'blue',
            engineType: 'four-stroke',
            engineV: 223,
            engineHp: 15.6,
            fuelTankV: 12,
            weight: 125,
            country: 'China',
            description:
                'Bars TTR 250 is the big brother of Bars TTR 125. This bike is able to cross fords and makes it possible to perform jumps and simple tricks.',
            imgSrc: './goods/img/bars-ttr-250.jpg',
            availability: 3,
            price: 999,
            popular: true,
        },
        {
            article: '003',
            brand: 'Legasi',
            name: 'Legasi Smart 150',
            type: 'Pitbike',
            color: 'yellow',
            engineType: 'four-stroke',
            engineV: 150,
            engineHp: 13,
            fuelTankV: 6.5,
            weight: 87,
            country: 'Spain',
            description:
                'Legasi pit bikes are designed for beginners. Well suited for enduro rides due to the presence of a dashboard and an enlarged tank.',
            imgSrc: './goods/img/legasi-smart-150.png',
            availability: 1,
            price: 1990,
            popular: false,
        },
        {
            article: '004',
            brand: 'Yamana',
            name: 'Yamana TTR 250',
            type: 'Enduro',
            color: 'blue',
            engineType: 'four-stroke',
            engineV: 249,
            engineHp: 30,
            fuelTankV: 16,
            weight: 141,
            country: 'Japan',
            description:
                'A good unpretentious motorcycle, reliable as a Swiss watch. Great for both beginners and experienced riders.',
            imgSrc: './goods/img/yamana-ttr-250.jpg',
            availability: 1,
            price: 5500,
            popular: false,
        },
        {
            article: '005',
            brand: 'Regmoto',
            name: 'Regmoto Legend 300',
            type: 'Enduro',
            color: 'blue',
            engineType: 'four-stroke',
            engineV: 300,
            engineHp: 25,
            fuelTankV: 8.5,
            weight: 140,
            country: 'China',
            description:
                'Reliable technology from the most popular components. Due to the balanced base, the motorcycle has excellent handling.',
            imgSrc: './goods/img/regmoto-legend-300.png',
            availability: 2,
            price: 5200,
            popular: false,
        },
        {
            article: '006',
            brand: 'Kato',
            name: 'Kato T4 250 Enduro',
            type: 'Enduro',
            color: 'orange',
            engineType: 'four-stroke',
            engineV: 250,
            engineHp: 19,
            fuelTankV: 10,
            weight: 115,
            country: 'China',
            description:
                'This affordable multi-purpose enduro bike is well-deserved attention of motorcycle enthusiasts due to its high reliability, simplicity and low-cost service, wide possibilities of practical use.',
            imgSrc: './goods/img/kato-t4-250-enduro.png',
            availability: 2,
            price: 4550,
            popular: true,
        },
        {
            article: '007',
            brand: 'Apollon',
            name: 'Apollon RXF Open 125E',
            type: 'Pitbike',
            color: 'red',
            engineType: 'four-stroke',
            engineV: 125,
            engineHp: 9,
            fuelTankV: 5.3,
            weight: 87,
            country: 'China',
            description:
                'This pitbike is perfect for both teenagers and real fans who recognize pit bikes only on 14/12 wheels. Even a child can start the engine with an electric starter.',
            imgSrc: './goods/img/apollon-rxf-open-125e.jpg',
            availability: 2,
            price: 2100,
            popular: false,
        },
        {
            article: '008',
            brand: 'BST',
            name: 'BST XT1 LIME',
            type: 'ATV',
            color: 'lime',
            engineType: 'four-stroke',
            engineV: 125,
            engineHp: 8,
            fuelTankV: 5,
            weight: 122,
            country: 'China',
            description:
                "Meet the first children's ATV with a bright sporty design! Powerful and reliable Zongshen ZS154FMI engine with automatic transmission and energy-intensive suspension.",
            imgSrc: './goods/img/bst-xt1-lime.jpg',
            availability: 1,
            price: 2000,
            popular: true,
        },
        {
            article: '009',
            brand: 'Motoland',
            name: 'Motoland 200 Wild Track PRO',
            type: 'ATV',
            color: 'green',
            engineType: 'four-stroke',
            engineV: 200,
            engineHp: 16,
            fuelTankV: 8,
            weight: 167,
            country: 'China',
            description:
                'The ATV stands out for a number of distinctive features and interesting equipment, and also has a high rating and a lot of positive feedback from customers.',
            imgSrc: './goods/img/motoland-200-wild-track.jpg',
            availability: 1,
            price: 4000,
            popular: true,
        },
        {
            article: '010',
            brand: 'BST',
            name: 'BST Kids 50e A Minecraft',
            type: 'Pitbike',
            color: 'grey',
            engineType: 'four-stroke',
            engineV: 49.9,
            engineHp: 2.5,
            fuelTankV: 2,
            weight: 45,
            country: 'China',
            description:
                'Pitbike BST Kids 50e is a modern motorcycle for beginner crossmen from 4 years old. Engine start - electric starter. Centrifugal clutch and stable traction make it easy for kids to start learning.',
            imgSrc: './goods/img/bst-kids-50e-a-Minecraft.jpg',
            availability: 3,
            price: 1100,
            popular: false,
        },
        {
            article: '011',
            brand: 'Boltmotors',
            name: 'Boltmotors ATV 2x2 Vanguard',
            type: 'ATV',
            color: 'green',
            engineType: 'four-stroke',
            engineV: 200,
            engineHp: 6.5,
            fuelTankV: 8.5,
            weight: 110,
            country: 'Russia',
            description:
                'The all-wheel drive version of the ATV is equipped with a unique all-wheel drive system and a small-sized variator. The all-terrain vehicle can be used for year-round trips through the forest, overcoming off-road.',
            imgSrc: './goods/img/boltmotors-atv-vanguard.jpg',
            availability: 1,
            price: 4200,
            popular: false,
        },
        {
            article: '012',
            brand: 'Ruslight',
            name: 'Ruslight Marten 200',
            type: 'ATV',
            color: 'black',
            engineType: 'four-stroke',
            engineV: 196,
            engineHp: 6.5,
            fuelTankV: 5,
            weight: 76,
            country: 'Russia',
            description:
                'Compact single-seat all-terrain vehicle with a powerful and unpretentious 196 cc engine and automatic transmission.',
            imgSrc: './goods/img/ruslight-marten-200.jpg',
            availability: 1,
            price: 900,
            popular: false,
        },
        {
            article: '013',
            brand: 'Husky',
            name: 'Husky F5 250',
            type: 'Enduro',
            color: 'red',
            engineType: 'four-stroke',
            engineV: 249,
            engineHp: 21,
            fuelTankV: 6.3,
            weight: 132,
            country: 'China',
            description: 'The Husky F5 motorcycle is an evolutionary step from a pit bike to a full-size motorcycle.',
            imgSrc: './goods/img/husky-f5-250.jpg',
            availability: 4,
            price: 3100,
            popular: false,
        },
        {
            article: '014',
            brand: 'Avantis',
            name: 'Avantis Enduro 300',
            type: 'Enduro',
            color: 'blue',
            engineType: 'four-stroke',
            engineV: 280,
            engineHp: 25,
            fuelTankV: 6.5,
            weight: 140,
            country: 'China',
            description:
                "The Avantis Enduro 300 motorcycle is new for 2021, it's speed, endurance and impeccable workmanship in one bottle.",
            imgSrc: './goods/img/avantis-enduro-300.jpg',
            availability: 2,
            price: 4400,
            popular: true,
        },
        {
            article: '015',
            brand: 'BST',
            name: 'BST Z10 260',
            type: 'Enduro',
            color: 'red',
            engineType: 'four-stroke',
            engineV: 250,
            engineHp: 25,
            fuelTankV: 6.3,
            weight: 122,
            country: 'China',
            description:
                'This is the most lightweight sports equipment with a new engine and a new adjustable suspension.',
            imgSrc: './goods/img/bst-z10-250.jpg',
            availability: 2,
            price: 3800,
            popular: false,
        },
        {
            article: '016',
            brand: 'Bars',
            name: 'Bars Tungus 600 L',
            type: 'ATV',
            color: 'red',
            engineType: 'four-stroke',
            engineV: 620,
            engineHp: 21,
            fuelTankV: 10,
            weight: 232,
            country: 'China',
            description: 'The Bars Tungus snowmobile has all the qualities of a utility snowmobile.',
            imgSrc: './goods/img/bars-tungus-600l.jpg',
            availability: 1,
            price: 5600,
            popular: false,
        },
        {
            article: '017',
            brand: 'Motoland',
            name: 'Motoland SnowFox 200',
            type: 'ATV',
            color: 'orange',
            engineType: 'four-stroke',
            engineV: 200,
            engineHp: 10,
            fuelTankV: 8,
            weight: 120,
            country: 'China',
            description:
                'The snowmobile has a convenient basket for carrying gear and other items, is equipped with a dashboard and a convenient windshield.',
            imgSrc: './goods/img/snowfox-200.jpg',
            availability: 2,
            price: 2900,
            popular: false,
        },
        {
            article: '018',
            brand: 'Avantis',
            name: 'Avantis ATV Classic 800w',
            type: 'ATV',
            color: 'blue',
            engineType: 'electric',
            engineV: 0,
            engineHp: 1,
            fuelTankV: 0,
            weight: 58.5,
            country: 'China',
            description:
                'This compact, eco-friendly model is ideal for toddlers ages 3 and up for fun and memorable walks on flat packed ground.',
            imgSrc: './goods/img/avantis-atv-classic-e-800w.jpeg',
            availability: 5,
            price: 1250,
            popular: true,
        },
        {
            article: '019',
            brand: 'USSR',
            name: 'USSR Core 125',
            type: 'Pitbike',
            color: 'red',
            engineType: 'four-stroke',
            engineV: 125,
            engineHp: 8,
            fuelTankV: 3,
            weight: 87,
            country: 'China',
            description:
                'The main advantage of USSR Core pit bikes is its ease of control and development, because you no longer need to depress the clutch and change gears.',
            imgSrc: './goods/img/ussr-core-125.jpg',
            availability: 2,
            price: 1050,
            popular: true,
        },
        {
            article: '020',
            brand: 'PWR',
            name: 'PWR Racing FRZ 50',
            type: 'Pitbike',
            color: 'green',
            engineType: 'four-stroke',
            engineV: 50,
            engineHp: 3,
            fuelTankV: 4,
            weight: 52,
            country: 'China',
            description: "Designed as your child's first motorcycle.",
            imgSrc: './goods/img/pwr-racing-50.jpg',
            availability: 2,
            price: 1230,
            popular: false,
        },
        {
            article: '021',
            brand: 'Wels',
            name: 'Wels Thunder 125',
            type: 'ATV',
            color: 'white',
            engineType: 'four-stroke',
            engineV: 125,
            engineHp: 8,
            fuelTankV: 2.2,
            weight: 102,
            country: 'China',
            description:
                "Thunder is a completely new model in the line of children's ATVs, the novelty has a modern design, high quality materials, the model is perfect for growing off-road enthusiasts.",
            imgSrc: './goods/img/wels-thunder-125.png',
            availability: 3,
            price: 1899,
            popular: true,
        },
        {
            article: '022',
            brand: 'Sym',
            name: 'Sym MaxSym TL 500i',
            type: 'Scooter',
            color: 'blue',
            engineType: 'four-stroke',
            engineV: 500,
            engineHp: 40,
            fuelTankV: 12.5,
            weight: 234,
            country: 'Taiwan',
            description:
                'The MaxSym TL 500i is not just an ordinary novelty, but the first scooter in the SYM line, which received a two-cylinder engine.',
            imgSrc: './goods/img/maxsym-tl-500.jpg',
            availability: 1,
            price: 9999,
            popular: true,
        },
    ];

    getInitData() {
        return this.initialData;
    }

    filterData(options: Options) {
        if (options.length === 0) {
            this.dataToLStorage(this.getInitData() as Data);
        } else {
            let filteredTypeData: Data = [];
            let filteredBrandData: Data = [];
            let filteredCountryData: Data = [];
            let filteredColorData: Data = [];
            let filteredPriceData: Data = [];
            let filteredAvailabilityData: Data = [];
            let filteredSearchData: Data = [];
            let filteredEngineVData: Data = [];
            let filteredPopularData: Data = [];

            let typeIndex: number | boolean = false;
            let brandIndex: number | boolean = false;
            let countryIndex: number | boolean = false;
            let colorIndex: number | boolean = false;
            let priceIndex: number | boolean = false;
            let availabilityIndex: number | boolean = false;
            let searchIndex: number | boolean = false;
            let engineVIndex: number | boolean = false;
            let popularIndex: number | boolean = false;

            for (let i = 0; i < options.length; i++) {
                if (options[i][0] === 'type') {
                    typeIndex = i;
                } else if (options[i][0] === 'brand') {
                    brandIndex = i;
                } else if (options[i][0] === 'country') {
                    countryIndex = i;
                } else if (options[i][0] === 'color') {
                    colorIndex = i;
                } else if (options[i][0] === 'price') {
                    priceIndex = i;
                } else if (options[i][0] === 'availability') {
                    availabilityIndex = i;
                } else if (options[i][0] === 'search') {
                    searchIndex = i;
                } else if (options[i][0] === 'engineV') {
                    engineVIndex = i;
                } else if (options[i][0] === 'popular') {
                    popularIndex = i;
                }
            }

            if (searchIndex !== false) {
                filteredSearchData = this.initialData.filter((item) => {
                    if (
                        item.name.toLowerCase().includes(options[searchIndex as number][1].toLowerCase()) ||
                        item.brand.toLowerCase().includes(options[searchIndex as number][1].toLowerCase()) ||
                        item.type.toLowerCase().includes(options[searchIndex as number][1].toLowerCase())
                    ) {
                        return true;
                    }
                });
            } else {
                filteredSearchData = this.initialData.slice();
            }

            if (typeIndex !== false) {
                for (let i = 0; i < filteredSearchData.length; i++) {
                    if (JSON.parse(options[typeIndex][1]).indexOf(filteredSearchData[i].type) + 1) {
                        filteredTypeData.push(filteredSearchData[i]);
                    }
                }
            } else {
                filteredTypeData = filteredSearchData.slice();
            }

            if (brandIndex !== false) {
                filteredBrandData = filteredTypeData.filter((item) => {
                    if (JSON.parse(options[brandIndex as number][1]).indexOf(item.brand) + 1) {
                        return true;
                    } else {
                        return false;
                    }
                });
            } else {
                filteredBrandData = filteredTypeData.slice();
            }

            if (countryIndex !== false) {
                filteredCountryData = filteredBrandData.filter((item) => {
                    if (JSON.parse(options[countryIndex as number][1]).indexOf(item.country) + 1) {
                        return true;
                    } else {
                        return false;
                    }
                });
            } else {
                filteredCountryData = filteredBrandData.slice();
            }

            if (colorIndex !== false) {
                filteredColorData = filteredCountryData.filter((item) => {
                    if (JSON.parse(options[colorIndex as number][1]).indexOf(item.color) + 1) {
                        return true;
                    } else {
                        return false;
                    }
                });
            } else {
                filteredColorData = filteredCountryData.slice();
            }

            if (priceIndex !== false) {
                filteredPriceData = filteredColorData.filter((item) => {
                    if (
                        Number(JSON.parse(options[priceIndex as number][1])[0]) <= item.price &&
                        Number(JSON.parse(options[priceIndex as number][1])[1]) >= item.price
                    ) {
                        return true;
                    } else {
                        return false;
                    }
                });
            } else {
                filteredPriceData = filteredColorData.slice();
            }

            if (availabilityIndex !== false) {
                filteredAvailabilityData = filteredPriceData.filter((item) => {
                    if (
                        Number(JSON.parse(options[availabilityIndex as number][1])[0]) <= item.availability &&
                        Number(JSON.parse(options[availabilityIndex as number][1])[1]) >= item.availability
                    ) {
                        return true;
                    } else {
                        return false;
                    }
                });
            } else {
                filteredAvailabilityData = filteredPriceData.slice();
            }

            if (engineVIndex !== false) {
                filteredEngineVData = filteredAvailabilityData.filter((item) => {
                    if (
                        Number(JSON.parse(options[engineVIndex as number][1])[0]) <= item.engineV &&
                        Number(JSON.parse(options[engineVIndex as number][1])[1]) >= item.engineV
                    ) {
                        return true;
                    } else {
                        return false;
                    }
                });
            } else {
                filteredEngineVData = filteredAvailabilityData.slice();
            }

            if (popularIndex !== false) {
                if (localStorage.getItem('popular') === 'true') {
                    filteredPopularData = filteredEngineVData.filter((item) => {
                        if (item.popular === true) {
                            return true;
                        } else {
                            return false;
                        }
                    });
                } else if (localStorage.getItem('popular') === 'false') {
                    filteredPopularData = filteredEngineVData.slice();
                }
            } else {
                filteredPopularData = filteredEngineVData.slice();
            }

            this.dataToLStorage(filteredPopularData);
        }
        return localStorage.data as Data;
    }

    dataToLStorage(data: Data) {
        localStorage.setItem('data', JSON.stringify(data));
    }
}

export default DataLoader;
