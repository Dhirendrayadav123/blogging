import { Link } from "react-router-dom";
import img from '../images/bg-image.jpeg'
const Login = ()=>{
    return(
        <div>
            <div>
                <img className="vw-100 vh-100" src={img} alt="..."/>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle mt-3">
                <form>
                    <div className="mb-3">
                    <div><h className="title fs-1">Welcome Back..</h></div>
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email...'/>
                    <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password...'/>
                    </div>
                    <button type="submit" className="btn btn-danger rounded-pill">Log In</button>
                    <div className='d-flex'>
                    <p className='mt-2'>No Account?</p>
                    <button type="submit" className="btn btn-outline-danger btn-sm border-0 rounded-pill mb-2">
                    <Link className="link" to="/Signup" >Create One</Link>
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;