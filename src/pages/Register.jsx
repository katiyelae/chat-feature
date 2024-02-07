import react from "react"


const Register = () => {
    return(
        <div className = "formContainer">
            <div className ="formWrapper">
                <span className="logo">Coffee Chat</span>
                <span className="title">Register</span>

                <form>
                    <input type = "text" placeholder="display name"/>
                    <input type = "email" placeholder="email"/>
                    <input type = "password" placeholder="password"/>
                    {/* this is for adding profile avatar/image for account */}
                    {/* <input style ={{display:none;}}type = "file" id="file"/> */}
                    {/* <label htmlFor="file">
                        <img src="#" alt="#" />
                    </label> */}
                    <button>Sign Up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}

export default Register