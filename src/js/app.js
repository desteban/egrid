import '../sass/index.scss';
import Headroom from 'headroom.js';

//iniciar headroom
var myElement = document.querySelector('header');
var headroom = new Headroom(myElement, {
	offset: 30,
	tolerance: 5
});
headroom.init();
