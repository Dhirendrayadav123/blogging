import img from "../images/bg2.jpeg"
import { Link } from "react-router-dom";
const Signup = ()=>{
    return(
        <div>
            <div>
                <img className="vw-100 vh-100" src={img} alt="..."/>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle mt-3">
                <form>
                    <div><h className="fs-1">Join Blog...</h></div>
                    <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">UserName</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your Username...'/>
                    </div>
                    <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email...'/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password...'/>
                    </div>
                    <button type="submit" className="btn btn-danger rounded-pill">Sign Up</button>
                    <div className='d-flex'>
                    <p className='mt-2'>Already have an account?</p>
                    <button type="submit" className="btn btn-outline-danger btn-sm border-0 rounded-pill mb-2" href="/Signin">
                    <Link className="link" to="/Login" >Sign In</Link>
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Signup;