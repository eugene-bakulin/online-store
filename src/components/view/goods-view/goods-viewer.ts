import './goods.css';
import { Data, GoodsViewInterface } from '../../../types/types';

class GoodsView implements GoodsViewInterface {
    draw(data: Data) {
        const fragment = document.createDocumentFragment();
        const goodsCardTemp = document.querySelector<HTMLTemplateElement>('#__goodsCardTemplate');

        data.forEach((item) => {
            if (goodsCardTemp != null) {
                const goodsItemClone = <Element>goodsCardTemp.content.cloneNode(true);

                const cardPhotoSelect = goodsItemClone.querySelector('.card__photo-img') as HTMLImageElement | null;
                const priceSelect = goodsItemClone.querySelector('.card__description-price');
                const titleSelect = goodsItemClone.querySelector('.card__description-title');
                const typeSelect = goodsItemClone.querySelector('.card__description-type');
                const colorSelect = goodsItemClone.querySelector('.card__description-color');
                const engineTypeSelect = goodsItemClone.querySelector('.card__description-engineType');
                const engineVSelect = goodsItemClone.querySelector('.card__description-engineV');
                const engineHPSelect = goodsItemClone.querySelector('.card__description-engineHp');
                const fuelTankVSelect = goodsItemClone.querySelector('.card__description-fuelTankV');
                const weightSelect = goodsItemClone.querySelector('.card__description-weight');
                const countrySelect = goodsItemClone.querySelector('.card__description-country');
                const descriptionSelect = goodsItemClone.querySelector('.card__description-description');
                const availabilitySelect = goodsItemClone.querySelector('.card__description-availability');

                if (cardPhotoSelect != null) {
                    cardPhotoSelect.src = `${item.imgSrc}`;
                    cardPhotoSelect.loading = 'lazy';
                }

                if (priceSelect != null) {
                    priceSelect.textContent = `Price: $${item.price}`;
                }

                if (titleSelect != null) {
                    titleSelect.textContent = item.name;
                }

                if (typeSelect != null) {
                    typeSelect.textContent = `Type of bike: ${item.type}`;
                }

                if (colorSelect != null) {
                    colorSelect.textContent = `Color: ${item.color}`;
                }

                if (engineTypeSelect != null) {
                    engineTypeSelect.textContent = `Engine type: ${item.engineType}`;
                }

                if (engineVSelect != null) {
                    engineVSelect.textContent = `Engine volume: ${item.engineV} cc`;
                }

                if (engineHPSelect != null) {
                    engineHPSelect.textContent = `Engine power:  ${item.engineHp} hp`;
                }

                if (fuelTankVSelect != null) {
                    fuelTankVSelect.textContent = `Fuel tank volume: ${item.fuelTankV} liters`;
                }

                if (weightSelect != null) {
                    weightSelect.textContent = `Weight: ${item.weight} kg`;
                }

                if (countrySelect != null) {
                    countrySelect.textContent = `Country of origin: ${item.country}`;
                }

                if (descriptionSelect != null) {
                    descriptionSelect.textContent = `Description: ${item.description}`;
                }

                if (availabilitySelect != null) {
                    availabilitySelect.textContent = `Availability: ${item.availability}`;
                }

                fragment.append(goodsItemClone);
            }
        });
        const goodsSelect = document.querySelector('.main_goods');

        if (goodsSelect != null) {
            goodsSelect.append(fragment);
        }
    }
}

export default GoodsView;
