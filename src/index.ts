import './global.css';
import App from './components/app/app';

const app = new App();
app.start();

console.log(
    '--Self-check--\n',
    '--The main page contains all the products of the store as well as filters, a search bar, a sorting field. Layout requirements are met\n',
    '+ 10\n',
    '--The product card contains its image, name, quantity of this product in stock, color, manufacturer, whether the product is in the basket\n',
    '+ 10\n',
    '--Adding items to the cart\n',
    '+ 20\n',
    '--Sort\n',
    '+ 20\n',
    '--Filters in the specified range\n',
    '+ 30\n',
    '--Filters by value\n',
    '+ 30\n',
    '--You can filter products by several filters of different types\n',
    '+ 20\n',
    '--Filters reset\n',
    '+ 20\n',
    '--Saving settings to local storage\n',
    '+ 30\n',
    '--Search\n',
    '+ 30\n',
    'Summary: 220'
);
