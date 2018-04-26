class App {
	
	constructor() {
		this.templatePath = 'assets/templates/';
		//the idea here is to use fetch to get the template from path 'assets/templates', but for now i'll keep it inline
		this.userProfile = `
			<p>Hello, <strong>{{userName}}</strong></p>
			{{#age}}<p><strong>Age:</strong> {{age}}</p>{{/age}}
			{{#email}}<p><strong>E-mail:</strong> {{email}}</p>{{/email}}
			{{#location}}<p><strong>Location:</strong> {{location}}</p>{{/location}}
			`;

	}
	
	populateUserProfile(userInfo) {
		if (!userInfo) {
			console.warn('There was a problem setting user info');
			return false;
		}

	}

	updateUserInfo(formData) {

	}
}

document.addEventListener('DOMContentLoaded', function(event) {
	window.app = new App();
});