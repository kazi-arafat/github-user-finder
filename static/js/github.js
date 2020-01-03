class GitHub {
	constructor() {
		this.client_id = '9e899de0e2623be755de';
		this.client_secret = '24d9cc74dbcebc51ecac78c97bb30c291f95fcf8';
	}

	async getUser(user) {
		const profileResponse = await fetch(
            `https://api.github.com/users/${user}?
            client_id=${this.client_id}&
            client_secret=${this.client_secret}`
        );
        
        const profileData = await profileResponse.json();

        return {
            profile : profileData
        }
	}
}
