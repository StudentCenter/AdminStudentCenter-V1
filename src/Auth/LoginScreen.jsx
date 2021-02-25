import React, {
    useState,
    useEffect
} from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const LoginScreen = (props) => {
    const URL_API = `http://localhost:8000`
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const MySwal = withReactContent(Swal)

    const handleLogin = async e => {
        e.preventDefault()
        let formData = new FormData(e.target)

        try {
            const datalogin = await fetch(`${URL_API}/login`, {
                method: 'POST',
                body: formData,
            })
            const resp = await datalogin.json()
            console.log(resp)
            if (resp.success) {
                localStorage.setItem('username', resp.result.username)
                localStorage.setItem('token', resp.result.token)
                props.setData({
                    loggedIn: true,
                    user: resp.result.username
                })
                MySwal.fire({
                    title: 'Loading...',
                    timer: 1000,
                    didOpen: () => {
                        MySwal.showLoading()
                    }
                })
                window.location.replace('/home')
            } else {
                MySwal.fire({
                    icon: 'error',
                    title: 'There is an error!',
                    text: 'Email or password is not correct!'
                })
            }
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            props.history.push('/home')
        }
    }, [props.history])

    return (
        <>
            <div className="auth-wrapper d-flex no-block justify-content-center align-items-center position-relative" style={{ background: 'url(../assets/images/big/auth-bg.jpg) no-repeat center center' }}>
                <div className="auth-box row" >
                    <div className="col-lg-7 col-md-5 modal-bg-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80)' }}>
                    </div>
                    <div className="col-lg-5 col-md-7 bg-white" style={{ paddingBottom: '5%', paddingTop: '5%' }}>
                        <div className="p-3">
                            <div className="text-center">
                                <i class="fa fa-home" aria-hidden="true" style={{ color: 'red', fontSize: '500%' }}></i>
                            </div>
                            <h2 className="mt-3 text-center">Sign In</h2>
                            <p className="text-center">Enter your email address and password to access admin panel.</p>
                            <form className="mt-4" onSubmit={handleLogin}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="text-dark" htmlFor="uname">Username</label>
                                            <input
                                                className="form-control"
                                                id="uname"
                                                type="text"
                                                name="username"
                                                placeholder="enter your username"
                                                value={username}
                                                onChange={e => setUsername(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="text-dark" htmlFor="pwd">Password</label>
                                            <input
                                                className="form-control"
                                                id="pwd"
                                                type="password"
                                                name="password"
                                                placeholder="enter your password"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                required
                                            />
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