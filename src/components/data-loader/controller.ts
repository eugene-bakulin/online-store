import DataLoader from './data-loader';
import { ControllerInterface, Options } from '../../types/types';
import AppView from '../view/appView';

class Controller extends DataLoader implements ControllerInterface {
    view: AppView;

    constructor() {
        super();
        this.view = new AppView();
    }

    getGoodsToLS() {
        const optionsArray: Options = Object.entries(localStorage).filter((item) => {
            if (item[0] != 'data') {
                return true;
            } else {
                return false;
            }
        });
        super.filterData(optionsArray);
    }
}

export default Controller;
