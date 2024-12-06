"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image"

const ChatComponentHooks = ({ userId, otherUserId, socket, loadingMessages ,setLoadingMessages}) => {
    console.log("start calling apiss",userId,otherUserId)
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.emit('getMessageHistory', { userId, otherUserId }, (response) => {
            setLoadingMessages(false);
            if (response.status === 'success') {
                setMessages(response.messages || []);
            } else {
                console.error("Error fetching messages:", response.message);
            }
        });
    
        return () => setMessages([]);
    }, [userId, otherUserId, socket]);
    
    return (
       

            <div className="w-full flex items-start gap-4 max-w-md self-start">
                       
                    
            {loadingMessages ? (
                <p>Loading messages...</p>
            ) : messages.length > 0 ? (
                messages.map((msg, index) => (
                    <>
                    <div key={index} className="relative h-8 w-8 min-w-8 rounded-full overflow-hidden">
                            <Image src="/dummy/sample-profile-photo.jpg"  fill/>
                        </div>
                        <div className="relative bg-white p-4 rounded-lg text-neutral-500 
                        font-medium shadow-inner text-base">
                            <p>{msg.sender}</p>
                            <p><strong>Message:</strong> {msg.message}</p>
                            <span className="absolute top-[calc(100%+4px)] text-sm">Sent 4:23pm</span>
                        </div>
                    </>

                   
                ))
            ) : (
                <p>No messages to display.</p>
            )}
        </div>
    );
};




export default ChatComponentHooks;






