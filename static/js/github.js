class GitHub {
	constructor() {
		this.client_id = "ca10d24386b608fb82d6";
		this.client_secret = "d7a975afbbfa33715e835b1fd2ff236209dc7a72";
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
