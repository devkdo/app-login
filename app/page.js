import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
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
            <GoogleOAuthProvider clientId='114789551290-jcb4lpdnkkgh9s06udtkhcgk679fhg7a.apps.googleusercontent.com'>
                <Header title="Login to App" />
                <GoogleLogin />
                {/* <LoginButton /> */}
                {/* <GoogleOnload /> */}
                {/* <GoogleSignin /> */}
            </GoogleOAuthProvider>
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