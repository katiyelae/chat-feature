import React from "react"


//map through this component to generate live version of who is online for show
//look to add identify key to each user for differentiating purposes
const ChatHeader = () => {
    return (
        <div className="header">
            <h2>Inbox</h2>
            <UsersOnline />
        </div>
    )
}

const UsersOnline = () => {
    return(
        <div className="userList">
            <div className="users">
                <img src="#" alt="#"/>
                <span></span> 
            </div>
        </div>
    )
}

export default ChatHeader