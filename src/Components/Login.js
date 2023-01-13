import { useFormik } from "formik";
import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

function Login() {
  const {setUser}= useContext(UserContext);
  const navigate = useNavigate();
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setUser({email : values.email})
      navigate("/portal/dashboard")
    // async (values) => {
      // try {
      //   const user = await axios.post(`${config.api}/user/login`,values);
      //   localStorage.setItem("myreact",user.data.token)
      //   if (user.data.message === "Success") {
      //     navigate("/portal/dashboard");
      //   }
      // } catch (error) {
      //   alert(error.response.data.message);
      // }
      
    // },
    }
  });
     
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome!</h1>
                    </div>
                    <form onSubmit={loginForm.handleSubmit} className="user">
                      <div className="form-group">
                        <input
                          name="email"
                          onChange={loginForm.handleChange}
                          value={loginForm.values.email}
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="password"
                          onChange={loginForm.handleChange}
                          value={loginForm.values.password}
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>
                      
                      <button
                        type="Submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Login
                      </button>
                      <hr />
                    </form>
                    <hr />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
