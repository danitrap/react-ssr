import React, { useEffect, useState } from "react";

export const App: React.FC<{ source: string }> = ({ source }) => {
    const [clientMessage, setClientMessage] = useState("");
    
    useEffect(() => {
        setClientMessage("Hello From React useEffect Hook");
    }, [])

    return <>
        <h1>Hello World from {source}</h1>
        <h2>{clientMessage}</h2>
    </>
}
