class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        // console.log(user);
        // console.log('profile', this.profile)
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_black" btn btn-primary
                btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-primary">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company} </li>
                    <li class="list-group-item">Website/Blog: ${user.blog} </li>
                    <li class="list-group-item">Bio: ${user.bio}</li>
                    <li class="list-group-item">Location: ${user.location} </li>
                    <li class="list-group-item">Member Since: ${user.created_at} </li>
                </ul>
                </div>
            </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    // Clear Profile
    clearProfile(){
        this.profile.innerHTML = '';
    }

    // Show Alert
    showAlert(message, className){
        // clear remaining alert
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        // get Parrent
        const container = document.querySelector('.searchContainer');
        // get SearchBox
        setTimeout
        const search = document.querySelector('.search');
        container.insertBefore(div,search);

        // timeout after 3 seconds
        setTimeout(() =>{
            this.clearAlert()
        },3000);
    }

    //clear Alert Messages
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
}