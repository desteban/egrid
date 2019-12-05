import '../sass/index.scss';
import '../sass/font-awesome.scss';
import Headroom from 'headroom.js';

//font-awesome
require('./font-awesome');
require('./pictures');
require('./form');

//iniciar headroom
var myElement = document.querySelector('header');
var headroom = new Headroom(myElement, {
	offset: 30,
	tolerance: 5
});
headroom.init();
