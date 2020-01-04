class GitHub {
	constructor() {
		this.client_id = "9e899de0e2623be755de";
		this.client_secret = "a0f19dff267882e1a7f2b08b455468f04408958e";
		this.repos_count = "5";
		this.sort_by = "created_at:asc";
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

		// clg
	}
}
