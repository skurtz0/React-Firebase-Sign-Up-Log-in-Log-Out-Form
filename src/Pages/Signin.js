import { useRef, useState } from "react";
import { signup, login, logout, useAuth,  } from "../firebase";

function Signin() {
    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth();
  
    const emailRef = useRef();
    const passwordRef = useRef();
  
    async function handleSignup() {
      setLoading(true);
      // try {
        await signup(emailRef.current.value, passwordRef.current.value);
      // } catch {
        // alert("Error!");
      // }
      setLoading(false);
    }
  
    async function handleLogin() {
      setLoading(true);
      try {
        await login(emailRef.current.value, passwordRef.current.value);
      } catch {
        alert("Error!");
      }
      setLoading(false);
    }
  
    async function handleLogout() {
      setLoading(true);
      try {
        await logout();
      } catch {
        alert("Error!");
      }
      setLoading(false);
    }
  return (
    <div class="container" id="container">
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-right">
                    <h1>Welcome !</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <a href="./"><button class="ghost" id="signIn">Sign Up</button></a>
                    <div>Currently logged in as: { currentUser?.email } </div>
                    <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        </div>
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Sign In</h1>
                <input type="email" ref={emailRef} placeholder="Email" />
                <input type="password" ref={passwordRef} placeholder="Password" />
                <button disabled={ loading || currentUser } onClick={handleLogin}>Sign In</button>
            </form>     
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-right">
                    <h1>If you don't have any account</h1>
                    <p>Click to sign up button!</p>
                    <a href="./"><button class="ghost" id="signIn">Sign Up</button></a>
                    <div>Currently logged in as: { currentUser?.email } </div>
                    <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Signin;