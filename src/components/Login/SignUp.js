import Navbar from "../Navbar/Navbar";

const Signup = () => {
  return (
    <>
    <Navbar/>

    <div className="body">
      <div class="center">
        <h1>Sign Up</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>Email</label>
          </div>
          <div class="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div class="txt_field">
            <input type="tel" required />
            <span></span>
            <label>Mobile No.</label>
          </div>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    </div>
    </>
  );
};

export default Signup;