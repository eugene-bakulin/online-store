import { AppInterface, Data } from '../../types/types';
import Controller from '../data-loader/controller';
import DataLoader from '../data-loader/data-loader';
import AppView from '../view/appView';
import * as noUiSlider from 'nouislider';

class App implements AppInterface {
    controller: Controller;
    view: AppView;
    loader: DataLoader;

    constructor() {
        this.controller = new Controller();
        this.view = new AppView();
        this.loader = new DataLoader();
    }

    start() {
        const getType = localStorage.getItem('type');
        const getBrand = localStorage.getItem('brand');
        const getCountry = localStorage.getItem('country');
        const getColors = localStorage.getItem('color');
        const getData = localStorage.getItem('data');

        const typesOptions: string[] = getType ? JSON.parse(getType) : [];
        const manufacturersOptions: string[] = getBrand ? JSON.parse(getBrand) : [];
        const countriesOptions: string[] = getCountry ? JSON.parse(getCountry) : [];
        const colorsOptions: string[] = getColors ? JSON.parse(getColors) : [];

        if (!localStorage.data) {
            this.loader.dataToLStorage(this.loader.getInitData() as Data);
        } else {
            if (getData) {
                if (JSON.parse(getData).length === 0) {
                    this.loader.dataToLStorage(this.loader.getInitData() as Data);
                }
            }
        }

        this.view.drawFilters(this.loader.getInitData() as Data);
        this.view.drawGoods(JSON.parse(localStorage.data));

        const searchField = document.getElementById('search-field') as HTMLInputElement;
        const getSearchValue = localStorage.getItem('search');
        if (getSearchValue) {
            searchField.value = getSearchValue;
        }
        const searchSubmit = document.getElementById('search-submit');
        searchSubmit?.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.setItem('search', searchField.value);
            this.controller.getGoodsToLS();
            this.view.clearGoods();
            this.view.drawGoods(JSON.parse(localStorage.data));
        });
        searchField.addEventListener('search', (e) => {
            if (searchField.value !== '' || (e as InputEvent).inputType === 'deleteContentBackward') {
                return;
            } else {
                localStorage.removeItem('search');
                this.controller.getGoodsToLS();
                this.view.clearGoods();
                this.view.drawGoods(JSON.parse(localStorage.data));
            }
        });

        const sortPopular = document.getElementById('sort_only-popular') as HTMLInputElement;
        sortPopular.checked = localStorage.getItem('popular') === 'true' ? true : false;
        sortPopular?.addEventListener('change', () => {
            if (sortPopular.checked) {
                localStorage.setItem('popular', 'true');
                this.controller.getGoodsToLS();
                this.view.clearGoods();
                this.view.drawGoods(JSON.parse(localStorage.data));
            } else {
                localStorage.setItem('popular', 'false');
                this.controller.getGoodsToLS();
                this.view.clearGoods();
                this.view.drawGoods(JSON.parse(localStorage.data));
            }
        });

        const sortRadioNameAsc = document.getElementById('sort_name_asc') as HTMLInputElement;
        sortRadioNameAsc.checked = localStorage.getItem('sort') === 'name_asc' ? true : false;
        sortRadioNameAsc?.addEventListener('change', () => {
            localStorage.setItem('sort', 'name_asc');

            const getData = localStorage.getItem('data');
            if (getData) {
                const currentData: Data = JSON.parse(getData);
                currentData.sort(function (a, b) {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return -1;
                    } else {
                        return 1;
                    }
                });
                this.loader.dataToLStorage(currentData);
                this.view.clearGoods();
                this.view.drawGoods(JSON.parse(localStorage.data));
            }
        });

        const sortRadioNameDesc = document.getElementById('sort_name_desc') as HTMLInputElement;
        sortRadioNameDesc.checked = localStorage.getItem('sort') === 'name_desc' ? true : false;
        sortRadioNameDesc?.addEventListener('change', () => {
            localStorage.setItem('sort', 'name_desc');

            const getData = localStorage.getItem('data');
            if (getData) {
                const currentData: Data = JSON.parse(getData);
                currentData.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    } else {
                        return 1;
                    }
                });
                this.loader.dataToLStorage(currentData);
                this.view.clearGoods();
                this.view.drawGoods(JSON.parse(localStorage.data));
            }
        });

        const sortRadioPriceAsc = document.getElementById('sort_price_asc') as HTMLInputElement;
        sortRadioPriceAsc.checked = localStorage.getItem('sort') === 'price_asc' ? true : false;
        sortRadioPriceAsc?.addEventListener('change', () => {
            localStorage.setItem('sort', 'price_asc');

            const getData = localStorage.getItem('data');
            if (getData) {
                const currentData: Data = JSON.parse(getData);
                currentData.sort(function (a, b) {
                    if (a.price > b.price) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
                this.loader.dataToLStorage(currentData);
                this.view.clearGoods();
                this.view.drawGoods(JSON.parse(localStorage.data));
            }
        });

        const sortRadioPriceDesc = document.getElementById('sort_price_desc') as HTMLInputElement;
        sortRadioPriceDesc.checked = localStorage.getItem('sort') === 'price_desc' ? true : false;
        sortRadioPriceDesc?.addEventListener('change', () => {
            localStorage.setItem('sort', 'price_desc');

            const getData = localStorage.getItem('data');
            if (getData) {
                const currentData: Data = JSON.parse(getData);
                currentData.sort(function (a, b) {
                    if (a.price > b.price) {
                        return -1;
                    } else {
                        return 1;
                    }
                });
                this.loader.dataToLStorage(currentData);
                this.view.clearGoods();
                this.view.drawGoods(JSON.parse(localStorage.data));
            }
        });

        const sortRadioNoSort = document.getElementById('sort_no') as HTMLInputElement;
        sortRadioNoSort.checked = localStorage.getItem('sort') ? false : true;
        sortRadioNoSort?.addEventListener('change', () => {
            localStorage.removeItem('sort');

            this.controller.getGoodsToLS();
            this.view.clearGoods();
            this.view.drawGoods(JSON.parse(localStorage.data));
        });

        const inputs = document.querySelectorAll('input[type=checkbox]');
        inputs.forEach((input) => {
            input.addEventListener('change', (e) => {
                const target = e.target as HTMLInputElement;
                const optionName = target.parentElement?.parentElement?.classList[1];
                const optionValue = target.id;
                if (target.checked) {
                    if (optionName === 'type') {
                        typesOptions.push(optionValue);
                        localStorage.setItem(`${optionName}`, JSON.stringify(typesOptions));
                    } else if (optionName === 'brand') {
                        manufacturersOptions.push(optionValue);
                        localStorage.setItem(`${optionName}`, JSON.stringify(manufacturersOptions));
                    } else if (optionName === 'country') {
                        countriesOptions.push(optionValue);
                        localStorage.setItem(`${optionName}`, JSON.stringify(countriesOptions));
                    } else if (optionName === 'color') {
                        colorsOptions.push(optionValue);
                        localStorage.setItem(`${optionName}`, JSON.stringify(colorsOptions));
                    }
                    this.controller.getGoodsToLS();
                    this.view.clearGoods();
                    this.view.drawGoods(JSON.parse(localStorage.data));
                } else {
                    if (optionName === 'type') {
                        const index = typesOptions.indexOf(optionValue);
                        typesOptions.splice(index, 1);
                        if (typesOptions.length === 0) {
                            localStorage.removeItem(`${optionName}`);
                        } else {
                            localStorage.setItem(`${optionName}`, JSON.stringify(typesOptions));
                        }
                    } else if (optionName === 'brand') {
                        const index = manufacturersOptions.indexOf(optionValue);
                        manufacturersOptions.splice(index, 1);
                        if (manufacturersOptions.length === 0) {
                            localStorage.removeItem(`${optionName}`);
                        } else {
                            localStorage.setItem(`${optionName}`, JSON.stringify(manufacturersOptions));
                        }
                    } else if (optionName === 'country') {
                        const index = countriesOptions.indexOf(optionValue);
                        countriesOptions.splice(index, 1);
                        if (countriesOptions.length === 0) {
                            localStorage.removeItem(`${optionName}`);
                        } else {
                            localStorage.setItem(`${optionName}`, JSON.stringify(countriesOptions));
                        }
                    } else if (optionName === 'color') {
                        const index = countriesOptions.indexOf(optionValue);
                        colorsOptions.splice(index, 1);
                        if (colorsOptions.length === 0) {
                            localStorage.removeItem(`${optionName}`);
                        } else {
                            localStorage.setItem(`${optionName}`, JSON.stringify(colorsOptions));
                        }
                    }
                    this.controller.getGoodsToLS();
                    this.view.clearGoods();
                    this.view.drawGoods(JSON.parse(localStorage.data));
                }
            });
        });

        const priceSlider = document.getElementById('price_slider') as noUiSlider.target;
        const priceLS = localStorage.getItem('price');
        if (priceLS) {
            if (priceSlider.noUiSlider !== undefined) {
                const min = Number(JSON.parse(priceLS)[0]);
                const max = Number(JSON.parse(priceLS)[1]);
                priceSlider.noUiSlider.set([min, max]);
            }
        }
        priceSlider.noUiSlider?.on('update', () => {
            if (priceSlider.noUiSlider) {
                localStorage.setItem('price', JSON.stringify(priceSlider.noUiSlider.get()));
            }
            this.controller.getGoodsToLS();
            this.view.clearGoods();
            this.view.drawGoods(JSON.parse(localStorage.data));
        });

        const availabilitySlider = document.getElementById('availability_slider') as noUiSlider.target;
        const availabilityLS = localStorage.getItem('availability');
        if (availabilityLS) {
            if (availabilitySlider.noUiSlider !== undefined) {
                const min = Number(JSON.parse(availabilityLS)[0]);
                const max = Number(JSON.parse(availabilityLS)[1]);
                availabilitySlider.noUiSlider.set([min, max]);
            }
        }
        availabilitySlider.noUiSlider?.on('update', () => {
            if (availabilitySlider.noUiSlider) {
                localStorage.setItem('availability', JSON.stringify(availabilitySlider.noUiSlider.get()));
            }
            this.controller.getGoodsToLS();
            this.view.clearGoods();
            this.view.drawGoods(JSON.parse(localStorage.data));
        });

        const engineVSlider = document.getElementById('engineV_slider') as noUiSlider.target;
        const engineVLS = localStorage.getItem('engineV');
        if (engineVLS) {
            if (engineVSlider.noUiSlider !== undefined) {
                const min = Number(JSON.parse(engineVLS)[0]);
                const max = Number(JSON.parse(engineVLS)[1]);
                engineVSlider.noUiSlider.set([min, max]);
            }
        }
        engineVSlider.noUiSlider?.on('update', () => {
            if (engineVSlider.noUiSlider) {
                localStorage.setItem('engineV', JSON.stringify(engineVSlider.noUiSlider.get()));
            }
            this.controller.getGoodsToLS();
            this.view.clearGoods();
            this.view.drawGoods(JSON.parse(localStorage.data));
        });

        const cartCounter = document.querySelector('.cart-quantity') as HTMLInputElement;
        const getCounter = localStorage.getItem('countCart');
        const clearFiltersButton = document.querySelector('.clear-filters');
        clearFiltersButton?.addEventListener('click', () => {
            const keys = Object.keys(localStorage);
            for (const key of keys) {
                if (key != 'sort' && key != 'cart' && key != 'countCart') {
                    localStorage.removeItem(key);
                }
            }
            this.view.clearGoods();
            this.view.clearFilters();
            this.start();
        });
        if (cartCounter) {
            if (getCounter) {
                cartCounter.value = getCounter;
            } else {
                cartCounter.value = '0';
            }
        }

        const clearCartButton = document.querySelector('.clear-cart');
        clearCartButton?.addEventListener('click', () => {
            localStorage.removeItem('cart');
            localStorage.removeItem('countCart');
            this.view.clearGoods();
            this.view.clearFilters();
            this.start();
        });

        const clearAllButton = document.querySelector('.clear-all');
        clearAllButton?.addEventListener('click', () => {
            localStorage.clear();
            this.view.clearGoods();
            this.view.clearFilters();
            this.start();
        });
    }
}

export default App;
