(function() {
	//obtener input
	let inputs = document.querySelectorAll('input');

	var focusInput = function() {
		let input = this.parentElement.children[0];
		let label = this.parentElement.children[1];
		label.className = 'label active';
		input.className = this.parentElement.children[0].className.replace('error', '');
	};

	var blurInput = function() {
		let input = this.parentElement.children[0];
		let label = this.parentElement.children[1];

		if (this.value <= 0) {
			label.className = 'label';

			// buscar si el campo es necesario
			let complete = input.classList;
			for (let i = 0; i < complete.length; i++) {
				if (complete[i] == 'require') {
					input.className = input.className + ' error';
				}
			}

			//validar si el email es valido
			validateEmail(input);
		} else {
			label.className = 'label active';
			input.className = this.parentElement.children[0].className.replace('error', '');

			//validar si el email es valido
			validateEmail(input);
		}
	};

	function validateEmail(input) {
		if (!validarEmail(input.value) && input.type == 'email') {
			input.className = input.className + ' error';
		} else {
			input.className = input.className.replace('error', '');
		}
	}

	function validarEmail(valor) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)) {
			return true;
		} else {
			return false;
		}
	}

	for (let i = 0; i < inputs.length; i++) {
		//escojer los inputs de tipo text, password, email
		if (inputs[i].type == 'text' || inputs[i].type == 'password' || inputs[i].type == 'email') {
			inputs[i].addEventListener('focus', focusInput);
			inputs[i].addEventListener('blur', blurInput);
		}
	}
})();
