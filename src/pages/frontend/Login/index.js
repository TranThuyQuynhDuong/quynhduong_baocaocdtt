import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Login() {
        const [isLoggedIn, setIsLoggedIn] = useState(false);
      
        const handleLogin = () => {
          setIsLoggedIn(true);
        };
      
        // return (
        //   <div>
        //     {isLoggedIn ? null : <button onClick={handleLogin}>Login</button>}
        //   </div>
        // );
      
    return (
        
        <section class="h-100 gradient-form" style={{backgroundColor: `#eee`}}>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-10">
                        <div class="card rounded-3 text-black">
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="card-body p-md-5 mx-md-4">

                                        <div class="text-center">
                                            <img src="https://png.pngtree.com/template/20191127/ourmid/pngtree-logo-fruit-organic-leaf-vector-image_335742.jpg"
                                                style={{width: 185}} alt="logo" />
                                            <h4 class="mt-1 mb-5 pb-1">We are MIN FRUITS</h4>
                                        </div>

                                        <form>
                                            <p>Please login to your account</p>

                                            <div class="form-outline mb-4">
                                                <input type="email" id="form2Example11" class="form-control"
                                                    placeholder="Phone number or email address" />
                                                <label class="form-label" for="form2Example11">Username</label>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="password" id="form2Example22" class="form-control" />
                                                <label class="form-label" for="form2Example22">Password</label>
                                            </div>

                                            <div class="text-center pt-1 mb-5 pb-1">
                                                <Link to="/"> 
                                                <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={handleLogin}>Log
                                                    in</button> 
                                                </Link>
                                                <a class="text-muted" href="#!">Forgot password?</a>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-center pb-4">
                                                <p class="mb-0 me-2">Don't have an account?</p>
                                               <Link to="/register"> <button type="button" class="btn btn-outline-danger">Register here</button></Link>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                                <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div class="text-black px-3 py-4 p-md-5 mx-md-4">
                                        <h4 class="mb-4">MIN FRUITS</h4>
                                        <p class="small mb-0">Luôn mang tới những trải nghiệm tốt nhất và hài lòng nhất cho khách hàng.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;