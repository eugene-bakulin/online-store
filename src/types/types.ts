import Controller from '../components/data-loader/controller';
import DataLoader from '../components/data-loader/data-loader';
import AppView from '../components/view/appView';
import FiltersView from '../components/view/filter-view/filter-viewer';
import Cart from '../components/view/goods-view/cart';
import GoodsView from '../components/view/goods-view/goods-viewer';
import Popup from '../components/view/popup/popup';

export type Options = [string, string][];
export type Data = {
    article: string;
    name: string;
    brand: string;
    type: string;
    color: string;
    engineType: string;
    engineV: number;
    engineHp: number;
    fuelTankV: number;
    weight: number;
    country: string;
    description: string;
    imgSrc: string;
    availability: number;
    price: number;
    popular: boolean;
}[];

export interface AppInterface {
    controller: Controller;
    view: AppView;
    loader: DataLoader;
    start(): void;
}

export interface DataLoaderInterface {
    getInitData(): void;
    filterData(options: Options): Data;
    dataToLStorage(data: Data): void;
}

export interface ControllerInterface {
    view: AppView;
    getGoodsToLS(): void;
}

export interface FiltersViewInterface {
    draw(data: Data): void;
}

export interface GoodsViewInterface {
    draw(data: Data): void;
}

export interface CartInterface {
    loader: DataLoader;
    add(itemName: string): void;
    delete(itemName: string): void;
    itemCheck(itemName: string): boolean;
    counterCheck(): boolean;
}

export interface PopupInterface {
    loader: DataLoader;
    addPopup(itemName: string): void;
    destroy(): void;
}

export interface AppViewInterface {
    filters: FiltersView;
    goods: GoodsView;
    cart: Cart;
    popup: Popup;
    drawFilters(data: Data): void;
    drawGoods(data: Data): void;
    clearGoods(): void;
    clearFilters(): void;
}
