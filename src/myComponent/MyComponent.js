import React from "react"

export const MyComponent = ({applicationName, createApplicationName}) => {
    return <>
        <button onClick={createApplicationName}>Click</button>
        <div>{applicationName}</div></>;
};