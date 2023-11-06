import "./login.css"
import { Link } from "react-router-dom";
import AlphLogo from "./6191831_alpha-symbol-alpha-symbol-white-png-png-download-removebg-preview.png"
const Login = () => {
  return ( 
    <div class="login">
    <form class="login-form">
      <div class="fir-d">
        <p>Login</p>
        <div class="sec-d">
          <img class="alpha-img" src={AlphLogo} alt=""/>
          <p>Alpha Bank</p>
        </div>
      </div>
      <div class="thi-d">
        <label>User ID*</label>
        <input placeholder="     Enter Your User ID"/>
      </div>
      <div class="for-d">
        <label>Password*</label>
        <input type="password" placeholder="     Enter Your Password"/>
        <div class="checkbox">
          <input id="checkid1" type="checkbox" value="test"/>
          <label for="checkid1">Remember me</label>
        </div>
      </div>
      <div class="buttons">
        <Link to="/payment-details"><button class="cancel-but">Cancel</button></Link>
        <Link to="/payment-details"><button class="login-but">Login</button></Link>
      </div>
    </form>
  </div>
  );
}

export default Login;