(() => {
	let btn = document.querySelector('.btn-menu');

	const showMenu = () => {
		sideNav = document.querySelector('.sidenav');
	};

	const hideMenu = () => {
		console.log('hide...');
	};

	const toogle = () => {
		console.log('toogle');

		sideNav = document.querySelector('.sidenav');
		sideNav.classList.toggle('sidenav-show');
	};

	btn.addEventListener('focus', toogle);

	btn.addEventListener('blur', toogle);
})();
