import react from "react"

const Home = () => {
    return(
        <div className="home">
            <div className="container">
                <ChatSidebar />
                <ChatWindow />
            </div>
        </div>
    )
}

export default Home