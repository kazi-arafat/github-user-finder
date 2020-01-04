class GitHub {
	constructor() {
<<<<<<< HEAD
		this.client_id = "9e899de0e2623be755de";
		this.client_secret = "a0f19dff267882e1a7f2b08b455468f04408958e";
		this.repos_count = "5";
		this.sort_by = "created_at:asc";
=======
		this.client_id = '9e899de0e2623be755de';
		this.client_secret = '24d9cc74dbcebc51ecac78c97bb30c291f95fcf8';
>>>>>>> 8b6e97360602f9a32fa6feac189a3e5bae76ca3b
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.sort_by}&client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const profileData = await profileResponse.json();
		const repoData = await repoResponse.json();

		return {
            profile: profileData,
            repos: repoData
		};
	}
}
