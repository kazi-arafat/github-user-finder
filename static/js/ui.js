class UI {
	constructor() {
		this.profile = document.getElementById("profile");
	}

	showProfile(user) {
		// console.log(user);
		this.clearProfile();
		this.clearAlert();
		this.profile.innerHTML = `
        <div class="card card-body mb-4">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}" >
                    <a href="${
						user.html_url
					}" target="_blank" class="btn btn-primary btn-block mb-4" >View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${
						user.public_repos
					}</span>
                    <span class="badge badge-secondary">Public Gists: ${
						user.public_gists
					}</span>
                    <span class="badge badge-success">Followers: ${
						user.followers
					}</span>
                    <span class="badge badge-primary">Following: ${
						user.following
					}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${
							user.company == "" || user.company == null
								? "<small>NA</small>"
								: user.company
						}</li>
                        <li class="list-group-item">Blog/Website: ${
							user.blog == "" ? "<small>NA</small>" : user.blog
						}</li>
                        <li class="list-group-item">Bio: ${
							user.bio == null ? "<small>NA</small>" : user.bio
						}</li>
                        <li class="list-group-item">Location: ${
							user.location
						}</li>
                        <li class="list-group-item">Member Since: ${new Date(
							user.created_at
						).toString()}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>`;

		// const container = document.querySelector('.')
    }
    
    // Show repos
    showRepos(repos){
        let output = '';
        repos.forEach((repo) => {
            output +=
            `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Star: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watcher: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks}</span>
                    </div>
                </div>
            </div>
            `;
        });

        document.getElementById('repos').innerHTML = output;

    }

	// clear Profile
	clearProfile() {
		this.profile.innerHTML = "";
	}

	// show alert
	showAlert(message, className) {
		this.clearAlert();
		const div = document.createElement("div");
		div.className = className;
		div.appendChild(document.createTextNode(message));
		// div.innerHTML = message;  // this also works

		//get container
		const container = document.querySelector(".searchContainer");
		const search = document.querySelector(".search");
        container.insertBefore(div, search);
        
        setTimeout(() =>{
            this.clearAlert();
        },3500);
	}

	// remove alert
	clearAlert() {
		const alert = document.querySelector(".alert");
		if (alert) {
			alert.remove();
		}
	}
}
