const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

function Header({ title }) {
    return (<h1>{title}</h1>)
}
// function Button({ label }) {
//     return (<button onClick={HandleLogin}>{label}</button>)
// }
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


function LoginPage() {
    function handleLogin() {
        console.log("Clicked");
        root.render(<DashboardPage />);
    }
    return (
        <>
            <Header title="Login to App" />
            <button onClick={handleLogin}>Login</button>

            {/* <GoogleOnload /> */}
            {/* <GoogleSignin /> */}
        </>
    );
}
function DashboardPage() {
    function handleNotifs() {
        console.log("Notifs+1");
        setNotifs(notifs + 1);
    }
    const nav = ['Home', 'My Account', 'Logout'];
    const [notifs, setNotifs] = React.useState(0);
    return (
        <>
            <Header title="Welcome Logged in User" />
            <button onClick={handleNotifs}>Notifs ({notifs})</button>
            <ul>
                {nav.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    )
}
root.render(<LoginPage />);

// const div1 = document.createElement('div');
// div1.innerHTML = g_id_onload;
// const div2 = document.createElement('div');
// div2.innerHTML = g_id_signin;
// app.appendChild(header);
// app.appendChild(div1);
// app.appendChild(div2);