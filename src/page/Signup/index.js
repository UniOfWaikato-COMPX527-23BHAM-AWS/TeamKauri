import "./index.css";

const SignUp = () => {
  return (
    <div class="wrapper">
      <div class="main">
        <div class="container">
          <div class="left">
            <div class="background-img"></div>
            <div class="text">
              <p>
                <i>Sign up to meet your Kiwi bird.</i>
              </p>
            </div>
          </div>
          <div class="right">
            <div class="signup">
              <p class="firstname">First Name</p>
              <div class="input">
                <input type="text" placeholder="" />
              </div>
              <p class="lastname">Last Name</p>
              <div class="input">
                <input type="text" placeholder="" />
              </div>
              <p class="email">Email</p>
              <div class="input">
                <input type="text" placeholder="" />
              </div>
              <p class="phonenumber">Phone Number</p>
              <div class="input">
                <input type="text" placeholder="" />
              </div>
              <div class="button">
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
