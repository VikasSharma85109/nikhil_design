import React from 'react'

function LoginModal() {
  return (
    // <!-- The loginModal -->
    <div className="modal fade" id="loginModal">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

        {/* <!-- Modal Header --> */}
        <div className="modal-header border-0">
            <h4 className="modal-title">Log In</h4>
            <button type="button" className="close" data-dismiss="modal"><i className="fa-solid fa-xmark"></i></button>
        </div>

        {/* <!-- Modal body --> */}
        <div className="modal-body">
            <form>
                <div className="form-group">
                    <input type="text" name="" className="field" placeholder="Username or Email"/>
                </div>
                <div className="form-group">
                    <input type="text" name="" className="field" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <a href="javascript:void(0)" data-dismiss="modal" data-toggle="modal" data-target="#forgotPasswordModal">Forgot your password?</a>
                </div>
                <div className="form-group">
                    <button type="button" className="btn">Log In</button>
                </div>
                <div className="form-group">
                    <p>Not registered with Shibnobi? <a href="javascript:void(0)" data-dismiss="modal" data-toggle="modal" data-target="#RegisterModal">Sign up</a></p>
                </div>
            </form>
        </div>
        </div>
    </div>
    </div>
  )
}

export default LoginModal