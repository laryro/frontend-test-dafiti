class App {

	constructor() {
		this.templatePath = 'assets/templates/';

		this.populateUserProfile();
		this.updateUserInfo();
	}

	async populateUserProfile() {
		const user = store.get('user');

		if (!user) {
			return false;
		}

		const templateName = 'userProfile.html';
		const template = await this.getTemplate(templateName);
		const userInfo = Mustache.render(template, user);
		document.querySelector('.profile-info').innerHTML = userInfo;
	}

	async getTemplate(templateName = '') {
		if (templateName === '') {
			return '';
		}

		const templateResponse = await fetch(this.templatePath + templateName)
		const template = await templateResponse.text();
		return template;
	}

	updateUserInfo() {
		//sorry about jquery :(
		$('#change-profile').on('show.bs.modal', (event) => {
			const user = store.get('user');
			if (user) {
				document.querySelector('#form-profile-info #name').value = user.name;
				document.querySelector('#form-profile-info #age').value = user.age;
				document.querySelector('#form-profile-info #location').value = user.location;
				document.querySelector('#form-profile-info #email').value = user.email;
			}
		});

		document.querySelector('#form-profile-info').addEventListener('submit', (event) =>{
			event.preventDefault();
			const 
				name = document.querySelector('#form-profile-info #name').value,
				age = document.querySelector('#form-profile-info #age').value,
				location = document.querySelector('#form-profile-info #location').value,
				email = document.querySelector('#form-profile-info #email').value;
			
			const userInfo = {
				'name': name,
				'age': age,
				'location': location,
				'email': email,
			};

			store.set('user', userInfo);
			this.populateUserProfile();

			//sorry about jquery :(
			$('#change-profile').modal('hide');

		});
	}
}

document.addEventListener('DOMContentLoaded', function(event) {
	window.app = new App();
});