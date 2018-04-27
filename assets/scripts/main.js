class App {

	constructor() {
		this.templatePath = 'assets/templates/';

		this.init();
		this.populateUserProfile();
	}

	init() {
		
	}

	async populateUserProfile() {
		let user = store.get('user');

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

	updateUserInfo(formData) {

	}
}

document.addEventListener('DOMContentLoaded', function(event) {
	window.app = new App();
});