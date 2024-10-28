const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

function Header({ title }) {
    return (<h1>{title}</h1>)
}
function Button({ label }) {
    return (<button>{label}</button>)
}
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
    return (
        <>
            <Header title="Login to App" />
            <Button label="Signin" />

            {/* <GoogleOnload /> */}
            {/* <GoogleSignin /> */}
        </>
    );
}
function DashboardPage() {
    return (
        <>
            <Header title="Welcome Logged in User" />

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