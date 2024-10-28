'use client';
import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function LoginButton() {
    const [login, setLogin] = useState(false);

    function handleLogin() {
        // root.render(<DashboardPage />);
        setLogin(true);
        console.log("Login", login);
    }

    return <button onClick={handleLogin}>Login</button>;
}
