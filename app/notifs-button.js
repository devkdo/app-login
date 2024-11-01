'use client';

import { useState } from 'react';

export default function NotifsButton() {
    const [notifs, setNotifs] = useState(0);

    function handleNotifs() {
        console.log("Notifs+1");
        setNotifs(notifs + 1);
    }
    return (<button onClick={handleNotifs}>Notifs ({notifs})</button>);

}