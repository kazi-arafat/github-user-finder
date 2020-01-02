//init GitHub
const github = new GitHub();
//init UI
const ui = new UI();

// search input
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup',(e) => {
    // get the input
    const userText = e.target.value;

    if(userText !== ''){
        // make http call
        github.getUser(userText)
        .then(data =>{
            if(data.profile.message == 'Not Found'){
                // alert error
            }
            else{
                // show the user profile
                ui.showProfile(data.profile);
            }
        })
    }
    else{
        // clear profile
    }

});