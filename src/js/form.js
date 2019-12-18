(function() {
	//obtener input
	let inputs = document.querySelectorAll('input');

	var focusInput = function() {
		this.parentElement.children[1].className = 'label active';
	};

	var blurInput = function() {
		this.parentElement.children[1].className = 'label';
	};

	for (let i = 0; i < inputs.length; i++) {
		//escojer los inputs de tipo text, password, email
		if (
			inputs[i].type == 'text' ||
			inputs[i].type == 'password' ||
			inputs[i].type == 'email'
		) {
			inputs[i].addEventListener('focus', focusInput);
			inputs[i].addEventListener('blur', blurInput);
		}
	}
})();
