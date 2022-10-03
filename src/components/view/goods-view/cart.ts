import { CartInterface, Data } from '../../../types/types';
import DataLoader from '../../data-loader/data-loader';

class Cart implements CartInterface {
    loader: DataLoader;
    constructor() {
        this.loader = new DataLoader();
    }

    add(itemName: string) {
        const initData = this.loader.getInitData();
        let goodsArray: Data = [];

        if (localStorage.cart) {
            goodsArray = JSON.parse(localStorage.cart);
        }

        initData.forEach((item) => {
            if (item.name === itemName) {
                goodsArray.push(item);
            }
        });
        localStorage.setItem('cart', JSON.stringify(goodsArray));

        const cartCounter = document.querySelector('.cart-quantity') as HTMLInputElement;
        const number = Number(cartCounter.value) + 1;
        cartCounter.value = number.toString();

        localStorage.setItem('countCart', cartCounter.value);
    }

    delete(itemName: string) {
        let goodsArray: Data = [];

        if (localStorage.cart) {
            goodsArray = JSON.parse(localStorage.cart);
        }

        let index: number | undefined;
        for (let i = 0; i < goodsArray.length; i++) {
            if (goodsArray[i].name === itemName) {
                index = i;
            }
        }

        if (index !== undefined) {
            goodsArray.splice(index, 1);
        }

        localStorage.setItem('cart', JSON.stringify(goodsArray));

        const cartCounter = document.querySelector('.cart-quantity') as HTMLInputElement;
        const number = Number(cartCounter.value) - 1;
        cartCounter.value = number.toString();

        localStorage.setItem('countCart', cartCounter.value);
    }

    itemCheck(itemName: string) {
        let goodsArray: Data = [];

        if (localStorage.cart) {
            goodsArray = JSON.parse(localStorage.cart);
        }

        return goodsArray.some((item) => {
            if (item.name === itemName) {
                return true;
            }
        });
    }

    counterCheck() {
        const getCounter = localStorage.getItem('countCart');
        if (Number(getCounter) > 19) {
            return true;
        } else {
            return false;
        }
    }
}

export default Cart;
