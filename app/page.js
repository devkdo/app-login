import LoginButton from './login-button';
import NotifsButton from './notifs-button';

function Header({ title }) {
    return (<h1>{title}</h1>)
}
// function Button({ label }) {
//     return (<button onClick={HandleLogin}>{label}</button>)
// }

export default function LoginPage() {
   
    return (
        <>
            <Header title="Login to App" />
            <LoginButton />
            
            {/* <GoogleOnload /> */}
            {/* <GoogleSignin /> */}
        </>
    );
}
export function DashboardPage() {

    const nav = ['Home', 'My Account', 'Logout'];
    return (
        <>
            <Header title="Welcome Logged in User" />
            <NotifsButton />
            <ul>
                {nav.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    )
}

// const div1 = document.createElement('div');
// div1.innerHTML = g_id_onload;
// const div2 = document.createElement('div');
// div2.innerHTML = g_id_signin;
// app.appendChild(header);
// app.appendChild(div1);
// app.appendChild(div2);

// Google Sign In
function GoogleOnload() {
    const g_id_onload = `<div id="g_id_onload" data-client_id="114789551290-jcb4lpdnkkgh9s06udtkhcgk679fhg7a.apps.googleusercontent.com"
                data-context="signin" data-ux_mode="popup" data-callback="handleCredentialResponse"
                data-auto_prompt="false">
                </div>`;
    return (g_id_onload)
}
function GoogleSignin() {
    const g_id_signin = `<div class="g_id_signin" data-type="standard" data-shape="pill" data-theme="outline" data-text="signin_with"
                data-size="large" data-logo_alignment="left">
                </div>`;
    return (g_id_signin)
}
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
function signIn(token) {
    window.location.assign('dashboard.html');
    console.log(token);
}