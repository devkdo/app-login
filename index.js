function handleCredentialResponse(response) {
    decodeJwtResponse(response.credential);
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
function decodeJwtResponse(data) {
    signIn(parseJwt(data))
}
function signIn(token){
    window.location.assign('dashboard.html');
    console.log(token);
}