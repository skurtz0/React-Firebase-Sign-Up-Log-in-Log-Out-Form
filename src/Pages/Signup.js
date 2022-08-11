import { useRef, useState } from "react";
import { signup, login, logout, useAuth,  } from "../firebase";

function Signup() {
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
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Sign Up</h1>
                <input type="email" ref={emailRef} placeholder="Email" />
                <input type="password" ref={passwordRef} placeholder="Password" />
                <button disabled={ loading || currentUser } onClick={handleSignup}>Sign Up</button>
            </form>     
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-right">
                    <h1>If you have any account</h1>
                    <p>Click to sing in button!</p>
                    <a href="./Signin"><button class="ghost" >Sign In</button></a>
                    <div>Currently logged in as: { currentUser?.email } </div>
                    <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Signup;