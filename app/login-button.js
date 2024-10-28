'use client';
import { useState } from 'react';

export default function LoginButton() {
    const [login, setLogin] = useState(false);

    function handleLogin() {
        // root.render(<DashboardPage />);
        setLogin(true);
        console.log("Login", login);
    }

    return <button onClick={handleLogin}>Login</button>;
}
