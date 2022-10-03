import { AppViewInterface, Data } from '../../types/types';
import FiltersView from './filter-view/filter-viewer';
import Cart from './goods-view/cart';
import GoodsView from './goods-view/goods-viewer';
import Popup from './popup/popup';

class AppView implements AppViewInterface {
    filters: FiltersView;
    goods: GoodsView;
    cart: Cart;
    popup: Popup;

    constructor() {
        this.filters = new FiltersView();
        this.goods = new GoodsView();
        this.cart = new Cart();
        this.popup = new Popup();
    }

    drawFilters(data: Data) {
        const filters = data;
        if (filters) {
            this.filters.draw(data);
        }
    }

    drawGoods(data: Data) {
        if (data.length === 0) {
            const goodsSelect = document.querySelector('.main_goods');
            const sorryMessage = document.createElement('div');
            sorryMessage.classList.add('message');
            sorryMessage.innerHTML = '<h2>Sorry, no matches found :(</h2>';
            goodsSelect?.append(sorryMessage);
            return;
        } else {
            const goods = data;
            if (goods) {
                const sort = localStorage.getItem('sort');
                if (sort) {
                    if (sort === 'name_asc') {
                        goods.sort(function (a, b) {
                            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                                return -1;
                            } else {
                                return 1;
                            }
                        });
                    } else if (sort === 'name_desc') {
                        goods.sort(function (a, b) {
                            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                                return -1;
                            } else {
                                return 1;
                            }
                        });
                    } else if (sort === 'price_asc') {
                        goods.sort(function (a, b) {
                            if (a.price > b.price) {
                                return 1;
                            } else {
                                return -1;
                            }
                        });
                    } else if (sort === 'price_desc') {
                        goods.sort(function (a, b) {
                            if (a.price > b.price) {
                                return -1;
                            } else {
                                return 1;
                            }
                        });
                    }
                }
                const cards = goods;
                this.goods.draw(cards);
            }
        }

        const inCart = document.querySelectorAll('.card__in-cart');
        inCart.forEach((item) => {
            const itemCard = item.parentNode?.parentNode as HTMLElement;
            const itemName = item.parentNode?.parentNode
                ?.querySelector('.card__description')
                ?.querySelector('.card__description-title')?.textContent;
            if (itemName) {
                if (this.cart.itemCheck(itemName)) {
                    item.classList.add('card__in-cart-active');
                    itemCard.classList.add('item-card-active');
                }
            }
        });

        const goodsCart = document.querySelectorAll('.card__cart_img');
        goodsCart.forEach((item) => {
            item.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;
                const itemCard = target.parentNode?.parentNode?.parentNode as HTMLElement;
                const itemName = target.parentNode?.parentNode?.parentNode
                    ?.querySelector('.card__description')
                    ?.querySelector('.card__description-title')?.textContent;
                const itemInCart = item.parentNode?.parentNode?.querySelector('.card__in-cart') as HTMLElement;
                if (itemName) {
                    if (this.cart.itemCheck(itemName)) {
                        itemCard.classList.remove('item-card-active');
                        itemInCart.classList.remove('card__in-cart-active');
                        this.cart.delete(itemName);
                    } else {
                        if (this.cart.counterCheck()) {
                            alert('Sorry, all slots are full :(');
                            return;
                        } else {
                            itemCard.classList.add('item-card-active');
                            itemInCart.classList.add('card__in-cart-active');
                            this.cart.add(itemName);
                        }
                    }
                }
            });
        });

        const showMore = document.querySelectorAll('.show-more');
        if (showMore) {
            showMore.forEach((item) => {
                item.addEventListener('click', (e) => {
                    const target = e.target as HTMLElement;
                    const itemName = target.parentNode?.querySelector('.card__description-title')?.textContent;
                    if (itemName) {
                        this.popup.addPopup(itemName);
                    }
                });
            });
        }
    }

    clearGoods() {
        const sorryMessage = document.querySelector('.message');
        const goodsList = document.querySelectorAll('.item-card');
        sorryMessage?.remove();
        goodsList.forEach((item) => item.remove());
    }

    clearFilters() {
        const filtersList = document.querySelector('.search-sort-filter');
        filtersList?.remove();
    }
}

export default AppView;
