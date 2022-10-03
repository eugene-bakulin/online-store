import { PopupInterface } from '../../../types/types';
import DataLoader from '../../data-loader/data-loader';
import './popup.css';

class Popup implements PopupInterface {
    loader: DataLoader;

    constructor() {
        this.loader = new DataLoader();
    }

    addPopup(itemName: string) {
        const popup = document.createDocumentFragment();
        const popupTemp = document.querySelector<HTMLTemplateElement>('#__popup');

        const data = this.loader.getInitData();
        const itemFromData = data.filter((item) => {
            if (item.name === itemName) {
                return true;
            }
        })[0];

        if (popupTemp) {
            const popupClone = <Element>popupTemp.content.cloneNode(true);

            const popupPhotoSelect = popupClone.querySelector('.popup__card__photo-img') as HTMLImageElement | null;
            const popupTitleSelect = popupClone.querySelector('.popup__card__description-title');
            const popupPriceSelect = popupClone.querySelector('.popup__card__description-price');
            const popupTypeSelect = popupClone.querySelector('.card__description-type');
            const popupColorSelect = popupClone.querySelector('.card__description-color');
            const popupEngineTypeSelect = popupClone.querySelector('.card__description-engineType');
            const popupEngineVSelect = popupClone.querySelector('.card__description-engineV');
            const popupEngineHpSelect = popupClone.querySelector('.card__description-engineHp');
            const popupFuelTankSelect = popupClone.querySelector('.card__description-fuelTankV');
            const popupWeightSelect = popupClone.querySelector('.card__description-weight');
            const popupCountrySelect = popupClone.querySelector('.card__description-country');
            const popupDescriptionSelect = popupClone.querySelector('.card__description-description');
            const popupAvailabilitySelect = popupClone.querySelector('.card__description-availability');

            if (popupPhotoSelect) {
                popupPhotoSelect.src = `${itemFromData.imgSrc}`;
            }

            if (popupTitleSelect) {
                popupTitleSelect.textContent = `${itemFromData.name}`;
            }

            if (popupPriceSelect) {
                popupPriceSelect.textContent = `Price: $${itemFromData.price}`;
            }

            if (popupTypeSelect) {
                popupTypeSelect.innerHTML = `<h4>Type of moto:</h4> ${itemFromData.type}`;
            }

            if (popupColorSelect) {
                popupColorSelect.innerHTML = `<h4>Color:</h4> ${itemFromData.color}`;
            }

            if (popupEngineTypeSelect) {
                popupEngineTypeSelect.innerHTML = `<h4>Engine type:</h4> ${itemFromData.engineType}`;
            }

            if (popupEngineVSelect) {
                popupEngineVSelect.innerHTML = `<h4>Engine volume:</h4> ${itemFromData.engineV} cc`;
            }

            if (popupEngineHpSelect) {
                popupEngineHpSelect.innerHTML = `<h4>Engine power:</h4> ${itemFromData.engineHp} Hp`;
            }

            if (popupFuelTankSelect) {
                popupFuelTankSelect.innerHTML = `<h4>Fuel tank volume:</h4> ${itemFromData.fuelTankV} l`;
            }

            if (popupWeightSelect) {
                popupWeightSelect.innerHTML = `<h4>Weight:</h4> ${itemFromData.weight} kg`;
            }

            if (popupCountrySelect) {
                popupCountrySelect.innerHTML = `<h4>Country of origin:</h4> ${itemFromData.country}`;
            }

            if (popupDescriptionSelect) {
                popupDescriptionSelect.innerHTML = `<h4>Description:</h4> </br> ${itemFromData.description}`;
            }

            if (popupAvailabilitySelect) {
                popupAvailabilitySelect.innerHTML = `<h4>Availability:</h4> ${itemFromData.availability}`;
            }

            popup.append(popupClone);
        }

        const popupSelect = document.querySelector('.popup');
        const body = document.querySelector('body');
        if (popupSelect) {
            popupSelect.append(popup);
            if (body) {
                body.classList.add('antiscroll');
            }
            popupSelect.addEventListener('click', () => {
                if (body) {
                    body.classList.remove('antiscroll');
                }
                this.destroy();
            });
        }
    }

    destroy() {
        const popup = document.querySelector('.popup-overlay');
        if (popup) {
            popup.remove();
        }
    }
}

export default Popup;
