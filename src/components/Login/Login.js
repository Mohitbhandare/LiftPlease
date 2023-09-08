import './Login.css'
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
// import Signup from './SignUp';

const Login = () => {
  return (
    <>
    <Navbar/>
   
    <div className="body">
      <div class="center">
        <h1>Login</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div class="pass">Forgot Password?</div>
          <input type="submit" value="Login" />
          <div class="signup_link">
            Not a member? <Link to='/Signup'>Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
