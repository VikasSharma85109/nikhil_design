import React from 'react'

function ForgotPasswordModal() {
  return (
    // <!-- The forgotPasswordModal -->
<div className="modal fade" id="forgotPasswordModal">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      {/* <!-- Modal Header --> */}
      <div className="modal-header border-0">
        <h4 className="modal-title">Forgot your password</h4>
        <button type="button" className="close" data-dismiss="modal"><i className="fa-solid fa-xmark"></i></button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="modal-body">
      	<p>Please enter your username or email</p>
      	<form>
      		<div className="form-group">
      			<input type="text" name="" className="field" placeholder="Username or Email"/>
      		</div>
      		<div className="form-group">
      			<button type="button" className="btn">Get New Password</button>
      		</div>
      		<div className="form-group">
      			<p>Having trouble? Email us at <a href="javascript:void(0)">mail@bringatrailer.com</a> with any questions.</p>
      		</div>
      	</form>
      </div>
    </div>
  </div>
</div>
  )
}

export default ForgotPasswordModal