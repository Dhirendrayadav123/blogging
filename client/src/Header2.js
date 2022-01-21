import logo from './images/logo3.png';
import './Header2.css';
const Header2=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-lg">
        <div className="container-fluid">
              <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="" width="200" height="60"/>
                    </a>
                </div>
              </nav>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <form className="d-flex">
                <input className="form-control h-75 w-100 my-2 rounded-pill" type="search" placeholder="Search Blog" aria-label="Search"/>
              </form>
              <i class="fas fa-search searchIcon mx-8" width="25" height="25"></i>
              <i class="far fa-bell mx-4 my-4 notificationIcon " width="25" height="25"></i>
              <li className="nav-item">
                <a className="nav-link active my-2 mx-2" aria-current="page" href="/Login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link my-2" href="/Signup">SignUp</a>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    );
}
export default Header2;