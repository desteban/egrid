(function() {
	//obtener input
	let inputs = document.querySelectorAll('input');

	var focusInput = function() {
		this.parentElement.children[1].className = 'label active';
		this.parentElement.children[0].className = this.parentElement.children[0].className.replace(
			'error',
			''
		);
	};

	var blurInput = function() {
		if (this.value <= 0) {
			this.parentElement.children[1].className = ' label';
			// buscar si el campo es necesario
			let complete = this.parentElement.children[0].classList;
			for (let i = 0; i < complete.length; i++) {
				if (complete[i] == 'require') {
					console.log('require');
					this.parentElement.children[0].className =
						this.parentElement.children[0].className + ' error';
				}
			}
		} else {
			this.parentElement.children[1].className = ' label active';
		}
	};

	for (let i = 0; i < inputs.length; i++) {
		//escojer los inputs de tipo text, password, email
		if (inputs[i].type == 'text' || inputs[i].type == 'password' || inputs[i].type == 'email') {
			inputs[i].addEventListener('focus', focusInput);
			inputs[i].addEventListener('blur', blurInput);
		}
	}
})();
