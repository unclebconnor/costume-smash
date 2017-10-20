import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let items = [{
				itemName:"Thor's Helmet",
				description: "This is a dope helmet",
				size: "XL",
				imageUrl: "img/thorsHelmet.jpg",
				price: 14.99,
				bodySection: "head",
				characterName: "Thor",
				amazonLink: "www.amazon.blah"
			},{
				itemName:"Thor's Armor",
				description: "This is dope armor",
				size: "XL",
				imageUrl: "img/thorsArmor.jpg",
				price: 19.99,
				bodySection: "bodyWear",
				characterName: "Thor",
				amazonLink: "www.amazon.blah"
			},	itemName:"Thor's Helmet",
				description: "This is a dope helmet",
				size: "XL",
				imageUrl: "img/thorsHelmet.jpg",
				price: 14.99,
				bodySection: "head",
				characterName: "Thor",
				amazonLink: "www.amazon.blah"
			},{
				itemName:"Thor's Hair",
				description: "This is dope hair",
				size: "XL",
				imageUrl: "img/thorsArmor.jpg",
				price: 19.99,
				bodySection: "head",
				characterName: "Thor",
				amazonLink: "www.amazon.blah"
			},	itemName:"Thor's Pecs",
				description: "These are dope pecs",
				size: "XL",
				imageUrl: "img/thorsHelmet.jpg",
				price: 14.99,
				bodySection: "bodyWear",
				characterName: "Thor",
				amazonLink: "www.amazon.blah"
			},{
				itemName:"Thor's Pants",
				description: "Flattering Pants",
				size: "XL",
				imageUrl: "img/thorsArmor.jpg",
				price: 19.99,
				bodySection: "legWear",
				characterName: "Thor",
				amazonLink: "www.amazon.blah"
			},	itemName:"Thor's Socks",
				description: "Sweet socks",
				size: "XL",
				imageUrl: "img/thorsHelmet.jpg",
				price: 14.99,
				bodySection: "footWear",
				characterName: "Thor",
				amazonLink: "www.amazon.blah"
			},{
				itemName:"Thor's Hammer",
				description: "Boom",
				size: "XL",
				imageUrl: "img/thorsArmor.jpg",
				price: 19.99,
				bodySection: "Accessories",
				characterName: "Thor",
				amazonLink: "www.amazon.blah"
			}]

ReactDOM.render(<App items={items}/>, document.getElementById('root'));
registerServiceWorker();
