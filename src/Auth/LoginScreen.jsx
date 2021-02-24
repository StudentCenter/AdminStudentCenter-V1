import React from 'react';

const LoginScreen = () => {
    return (
        <>
            <div className="auth-wrapper d-flex no-block justify-content-center align-items-center position-relative" style={{ background: 'url(../assets/images/big/auth-bg.jpg) no-repeat center center' }}>
                <div className="auth-box row" >
                    <div className="col-lg-7 col-md-5 modal-bg-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80)' }}>
                    </div>
                    <div className="col-lg-5 col-md-7 bg-white" style={{ paddingBottom: '5%', paddingTop: '5%' }}>
                        <div className="p-3">
                            <div className="text-center">
                                <img src="../assets/images/big/icon.png" alt="wrapkit" />
                            </div>
                            <h2 className="mt-3 text-center">Sign In</h2>
                            <p className="text-center">Enter your email address and password to access admin panel.</p>
                            <form className="mt-4">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="text-dark" htmlFor="uname">Username</label>
                                            <input className="form-control" id="uname" type="text" placeholder="enter your username" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="text-dark" htmlFor="pwd">Password</label>
                                            <input className="form-control" id="pwd" type="password" placeholder="enter your password" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <button type="submit" style={{ borderRadius: 5 }} className="btn btn-block btn-primary">Sign In</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginScreen