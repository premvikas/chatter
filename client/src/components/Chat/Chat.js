import React, { useEffect } from "react";
//import queryString from 'query-string';
import io from 'socket.io-client';

const Chat = () => {
    //  const ENDPOINT = "locahost:5000";

    useEffect(() => {
        console.log("yo");
        //const socket = io(ENDPOINT);
        const socket = io.connect('localhost:5000', { reconnect: true });
        console.log({ socket });
        socket.emit("chat", "test");
    });


    return (
        <h1>chat</h1>
    );
};

export default Chat;