import React from 'react'

function RegisterModal() {
  return (
    // <!-- The RegisterModal -->
<div className="modal fade" id="RegisterModal">
  <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">

      {/* <!-- Modal Header --> */}
      <div className="modal-header border-0">
        <h4 className="modal-title">Register</h4>
        <button type="button" className="close" data-dismiss="modal"><i className="fa-solid fa-xmark"></i></button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="modal-body">
      	<form>
      		<div className="row">
      			<div className="col-12 col-md-6">
      				<div className="form-group">
		      			<input type="text" name="" className="field" placeholder="Email"/>
		      		</div>
      			</div>
      			<div className="col-12 col-md-6">
      				<div className="form-group">
		      			<input type="text" name="" className="field" placeholder="Username"/>
		      		</div>
      			</div>
      			<div className="col-12 col-md-6">
      				<div className="form-group">
		      			<input type="text" name="" className="field" placeholder="Password"/>
		      		</div>
      			</div>
      			<div className="col-12 col-md-6">
      				<div className="form-group">
		      			<input type="text" name="" className="field" placeholder="Confirm Password"/>
		      		</div>
      			</div>
      			<div className="col-12 col-md-12">
      				<div className="form-group form-check">
					    <label className="form-check-label" data-toggle="collapse" data-target="#wantBid">
					      <input className="form-check-input" type="checkbox"/> I want the ability to bid on auctions (optional)
					    </label>
					    <div id="wantBid" className="collapse pt-3">
					    	<p className="m-0">Bring a Trailer requires a credit card to bid. <a href="javascript:void(0)">Click here</a> for more info.</p> 
					    	<p className="small">There is no charge to register. Bring a Trailer will only authorize that your card is valid.</p>
					    	<div className="row">
					    		<div className="col-12 col-md-6">
					    			<div className="form-group">
					    				<input type="text" name="" className="field" placeholder="Name (as it appears on your card)"/>
					    			</div>
					    		</div>
					    		<div className="col-12 col-md-6">
					    			<div className="form-group">
					    				<input type="text" name="" className="field" placeholder="Phone"/>
					    			</div>
					    		</div>
					    		<div className="col-12 col-md-6">
					    			<div className="form-group">
					    				<input type="text" name="" className="field" placeholder="Address"/>
					    			</div>
					    		</div>
					    		<div className="col-12 col-md-6">
					    			<div className="form-group">
					    				<input type="text" name="" className="field" placeholder="Zip / Postal Code"/>
					    			</div>
					    		</div>
					    		<div className="col-12 col-md-6">
					    			<div className="form-group">
					    				<input type="text" name="" className="field" placeholder="Country"/>
					    			</div>
					    		</div>
					    		<div className="col-12 col-md-6">
					    			<div className="form-group">
					    				<input type="text" name="" className="field" placeholder="Credit Card Number"/>
					    			</div>
					    		</div>
					    		<div className="col-12 col-md-6">
					    			<div className="form-group">
					    				<label>Expiration</label>
					    				<div className="row row_gap_5">
					    					<div className="col-6">
					    						<select className="field">
							    					<option>1</option>
							    					<option>2</option>
							    					<option>3</option>
							    					<option>4</option>
							    					<option>5</option>
							    					<option>6</option>
							    					<option>7</option>
							    					<option>8</option>
							    					<option>9</option>
							    					<option>10</option>
							    					<option>11</option>
							    					<option>12</option>
							    				</select>
					    					</div>
					    					<div className="col-6">
					    						<select className="field">
							    					<option>2022</option>
							    					<option>2023</option>
							    					<option>2024</option>
							    					<option>2025</option>
							    					<option>2026</option>
							    					<option>2027</option>
							    					<option>2028</option>
							    					<option>2029</option>
							    					<option>2030</option>
							    				</select>
					    					</div>
					    				</div>
					    			</div>
					    		</div>
					    		<div className="col-12 col-md-6">
					    			<div className="form-group">
					    				<label className="mobileOnlyHide">&nbsp;</label>
					    				<input type="text" name="" className="field" placeholder="CVC"/>
					    			</div>
					    		</div>
					    		<div className="col-12 col-md-6">
					    			<div className="form-group">
					    				<label>Where did you hear about Shibnobi?</label>
					    				<select className="field">
					    					<option>Select one</option>
					    					<option>Facebook</option>
					    					<option>Google</option>
					    					<option>Instagram</option>
					    					<option>Log time Shibnobi reader</option>
					    					<option>Other</option>
					    				</select>
					    			</div>
					    		</div>
					    	</div>
					    </div>
					</div>
      			</div>
      			<div className="col-12 col-md-12">
      				<div className="form-group form-check">
					    <label className="form-check-label">
					      <input className="form-check-input" type="checkbox"/> I accept the Terms of Use and Privacy Notice
					    </label>
					  </div>
      			</div>
      			<div className="col-12 col-md-12">
      				<div className="form-group form-check">
      					<label className="form-check-label">
      						<input className="form-check-input" type="checkbox"/> Sign me up for the Shibnobi Daily Mail
      					</label>
      				</div>
      			</div>
      			<div className="col-12 col-md-12">
      				<div className="form-group">
		      			<p className="small">This site is protected by reCAPTCHA and the Google <a href="javascript:void(0)"> Privacy Policy</a> and <a href="javascript:void(0)">Terms of Service</a> apply</p>
		      		</div>
      			</div>
      			<div className="col-12 col-md-12">
      				<div className="form-group">
		      			<button type="button" className="btn">Register</button>
		      		</div>
      			</div>
      			<div className="col-12 col-md-12">
      				<div className="form-group">
		      			<p className="m-0">Already have an account? <a href="javascript:void(0)" data-dismiss="modal" data-toggle="modal" data-target="#loginModal"> Log in</a></p>
		      		</div>
      			</div>
      		</div>
      	</form>
      </div>
    </div>
  </div>
</div>
  )
}

export default RegisterModal