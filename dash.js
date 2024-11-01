document.getElementById("btn-signout").addEventListener("click", signOut);

// Initialize the Google API client
function onLoad() {
    gapi.load('auth2', function() {
        gapi.auth2.init();
    });
}

// Sign out function
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        console.log('User signed out.');
        // Optional: Redirect or update the UI
        window.location.href = 'index.html';
    });
}
onLoad();