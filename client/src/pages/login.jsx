import React from "react";



export default function login() {
    return (
        <>    <div id="loginWrapper">
        <div className="wrapper" style={{ display: 'block' }}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" id="username" placeholder="Username" required />
          </div>
          <div className="input-box">
            <input type="password" id="password" placeholder="Password" required />
          </div>
          <button onClick={login} className="btnL">Login</button>
          <p id="message" style={{ color: 'red' }}></p>
        </div>
      </div>
    </>
    );
}