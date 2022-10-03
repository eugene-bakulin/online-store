import './filters.css';
import { Data, FiltersViewInterface } from '../../../types/types';
import 'nouislider/dist/nouislider.css';
import * as noUiSlider from 'nouislider';
import wNumb from 'wnumb';

class FiltersView implements FiltersViewInterface {
    draw(data: Data) {
        const types: string[] = [];
        const manufacturers: string[] = [];
        const countries: string[] = [];
        const colors: string[] = [];
        const price: number[] = [];
        const availability: number[] = [];
        const engineV: number[] = [];

        function check(filterElem: string) {
            const options = Object.entries(localStorage).filter((item) => {
                if (item[0] != 'data' && item[0] != 'cart') {
                    return true;
                } else {
                    return false;
                }
            });
            for (let i = 0; i < options.length; i++) {
                if (options[i][1].includes(filterElem)) {
                    return true;
                }
            }
        }

        data.forEach((item) => {
            types.push(item.type);
            manufacturers.push(item.brand);
            countries.push(item.country);
            colors.push(item.color);
            price.push(item.price);
            availability.push(item.availability);
            engineV.push(item.engineV);
        });

        const typesCollection = new Set(types);
        const manufacturersCollection = new Set(manufacturers);
        const countriesCollection = new Set(countries);
        const colorsCollection = new Set(colors);

        const fragment = document.createDocumentFragment();
        const filtersTemp = document.querySelector<HTMLTemplateElement>('#__filtersTemplate');

        if (filtersTemp != null) {
            const filtersClone = <Element>filtersTemp.content.cloneNode(true);

            const filterTypeSelect = filtersClone.querySelector('.filter__type');
            const filterManufacturerSelect = filtersClone.querySelector('.filter__manufacturer');
            const filterCountrySelect = filtersClone.querySelector('.filter__origin-country');
            const filterColorSelect = filtersClone.querySelector('.filter__color');
            const filterPriceSelect = filtersClone.querySelector('.filter__price');
            const filterAvailabilitySelect = filtersClone.querySelector('.filter__availability');
            const filterEngineVSelect = filtersClone.querySelector('.filter__engineV');

            if (filterTypeSelect != null) {
                for (const item of typesCollection) {
                    const filterItem = document.createElement('div');
                    filterItem.classList.add('filter-item');
                    const filterItemInput = document.createElement('input');
                    filterItemInput.classList.add('input-type');
                    filterItemInput.type = 'checkbox';
                    filterItemInput.id = `${item}`;
                    if (check(`${item}`)) {
                        filterItemInput.checked = true;
                    }
                    const filterItemLabel = document.createElement('label');
                    filterItemLabel.setAttribute('for', `${item}`);
                    filterItemLabel.textContent = `${item}`;
                    filterItem.appendChild(filterItemInput);
                    filterItem.appendChild(filterItemLabel);
                    filterTypeSelect.append(filterItem);
                }
            }

            if (filterManufacturerSelect != null) {
                for (const item of manufacturersCollection) {
                    const filterItem = document.createElement('div');
                    filterItem.classList.add('filter-item');
                    const filterItemInput = document.createElement('input');
                    filterItemInput.classList.add('input-manufacturer');
                    filterItemInput.type = 'checkbox';
                    filterItemInput.id = `${item}`;
                    if (check(`${item}`)) {
                        filterItemInput.checked = true;
                    }
                    const filterItemLabel = document.createElement('label');
                    filterItemLabel.setAttribute('for', `${item}`);
                    filterItemLabel.textContent = `${item}`;
                    filterItem.appendChild(filterItemInput);
                    filterItem.appendChild(filterItemLabel);
                    filterManufacturerSelect.append(filterItem);
                }
            }

            if (filterColorSelect != null) {
                for (const item of colorsCollection) {
                    const filterItem = document.createElement('div');
                    filterItem.classList.add('filter-item');
                    const filterItemInput = document.createElement('input');
                    filterItemInput.classList.add('input-color');
                    filterItemInput.type = 'checkbox';
                    filterItemInput.id = `${item}`;
                    if (check(`${item}`)) {
                        filterItemInput.checked = true;
                    }
                    const filterItemLabel = document.createElement('label');
                    filterItemLabel.setAttribute('for', `${item}`);
                    filterItemLabel.textContent = `${item}`;
                    filterItem.appendChild(filterItemInput);
                    filterItem.appendChild(filterItemLabel);
                    filterColorSelect.append(filterItem);
                }
            }

            if (filterCountrySelect != null) {
                for (const item of countriesCollection) {
                    const filterItem = document.createElement('div');
                    filterItem.classList.add('filter-item');
                    const filterItemInput = document.createElement('input');
                    filterItemInput.classList.add('input-country');
                    filterItemInput.type = 'checkbox';
                    filterItemInput.id = `${item}`;
                    if (check(`${item}`)) {
                        filterItemInput.checked = true;
                    }
                    const filterItemLabel = document.createElement('label');
                    filterItemLabel.setAttribute('for', `${item}`);
                    filterItemLabel.textContent = `${item}`;
                    filterItem.appendChild(filterItemInput);
                    filterItem.appendChild(filterItemLabel);
                    filterCountrySelect.append(filterItem);
                }
            }

            if (filterPriceSelect != null) {
                const priceSlider = document.createElement('div') as noUiSlider.target;
                priceSlider.id = 'price_slider';
                if (priceSlider) {
                    noUiSlider.create(priceSlider, {
                        start: [Math.min(...price), Math.max(...price)],
                        tooltips: [wNumb({ decimals: 0, prefix: '$' }), wNumb({ decimals: 0, prefix: '$' })],
                        connect: true,
                        step: 100,
                        range: {
                            min: Math.min(...price),
                            max: Math.max(...price),
                        },
                    });
                }
                filterPriceSelect.append(priceSlider);
            }

            if (filterAvailabilitySelect != null) {
                const availabilitySlider = document.createElement('div') as noUiSlider.target;
                availabilitySlider.id = 'availability_slider';
                noUiSlider.create(availabilitySlider, {
                    start: [Math.min(...availability), Math.max(...availability)],
                    tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
                    connect: true,
                    step: 1,
                    range: {
                        min: Math.min(...availability),
                        max: Math.max(...availability),
                    },
                });
                filterAvailabilitySelect.append(availabilitySlider);
            }

            if (filterEngineVSelect != null) {
                const engineVSlider = document.createElement('div') as noUiSlider.target;
                engineVSlider.id = 'engineV_slider';
                noUiSlider.create(engineVSlider, {
                    start: [Math.min(...engineV), Math.max(...engineV)],
                    tooltips: [wNumb({ decimals: 1 }), wNumb({ decimals: 1 })],
                    connect: true,
                    step: 1,
                    range: {
                        min: Math.min(...engineV),
                        max: Math.max(...engineV),
                    },
                });
                filterEngineVSelect.append(engineVSlider);
            }

            fragment.append(filtersClone);
        }

        const filterSelect = document.querySelector('.main_filter');

        if (filterSelect != null) {
            filterSelect.append(fragment);
        }
    }
}

export default FiltersView;
