import './post.css';
import Card from './pages/Card';
import img2 from "./images/img2.jpeg"
import img3 from "./images/gmk.png"
import img4 from "./images/wl.jpeg"
import img5 from "./images/dheeru.jpg"
import { Link } from 'react-router-dom';

const Posts=()=> {
    return (
    <div className='d-flex'>
        <div className="col-8">
            <div className=' d-flex p-5 hstack gap-3'>
            <p className='my-1'>YOUR TOPICS</p>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner ">
                    <div className='row'>
                        <div className="carousel-item active">
                        
                            <button type="button" className='btn btn-secondary rounded-pill btn-sm '>Technology</button>
                        </div>
                        <div className="carousel-item">
                            <button type="button" className='btn btn-secondary rounded-pill btn-sm'>Self improvement</button>
                        </div>
                        <div className="carousel-item">
                            <button type="button" className='btn btn-secondary rounded-pill btn-sm'>React</button>
                        </div>
                        <div className="carousel-item">
                            <button type="button" className='btn btn-secondary rounded-pill btn-sm '>Psychology</button> 
                        </div>
                        <div className="carousel-item">
                            <button type="button" className='btn btn-secondary rounded-pill btn-sm'>Block chain</button> 
                        </div>
                        <div className="carousel-item">
                            <button type="button" className='btn btn-secondary rounded-pill btn-sm'>Java script</button>
                        </div>
                        <div className='carousel-item'>
                            <button type="button" className='btn btn-secondary rounded-pill btn-sm'>Programming</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            <div className='container-fluid'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
        <div className="col-4 border-start border-dark d-flex d-none d-lg-block">
            <div className='card  bg-color text-center w-75 my-4 mx-5 align-self-center'>
                <div>
                    <h4>Write on Blog</h4>
                    <p>New Writer FAQ</p>
                    <p>Expert writing advice</p>
                    <p>Grow your readership</p> 
                    <button type="button" className='btn btn-dark'>
                    <Link className='link' to="/Write">Start writing</Link>
                    </button>  
                </div>
            </div>
            
                <div className='border-top border-1  '>
                    <h6 className='mx-5'>Recommended topics</h6>
                </div>
                <div className=' recommend mx-5'>
                    <button type="button" className='btn btn-secondary rounded-pill btn-sm mx-1 my-2'>Java script</button>
                    <button type="button" className='btn btn-secondary rounded-pill btn-sm mx-1 my-2'>programming</button>
                    <button type="button" className='btn btn-secondary rounded-pill btn-sm mx-1 my-2'>React</button>
                    <button type="button" className='btn btn-secondary rounded-pill btn-sm mx-1 my-2'>Node</button>
                    <button type="button" className='btn btn-secondary rounded-pill btn-sm mx-1 my-2'>GATE</button>
                    <button type="button" className='btn btn-secondary rounded-pill btn-sm mx-1 my-2'>Block chain</button>
                    <button type="button" className='btn btn-secondary rounded-pill btn-sm mx-1 my-2'>Technology</button>
                    <button type="button" className='btn btn-secondary rounded-pill btn-sm mx-1 my-2'>Psychology</button>
                    <button type="button" className='btn btn-secondary rounded-pill btn-sm mx-1 my-2'>Node js</button>
                    <button type="button" className='btn btn-secondary rounded-pill btn-sm mx-1 my-2'>Hackthon</button>
                </div>
                <div>
                    <h6 className='mx-5 mt-3'>Who to follow</h6>
                   <div className='container-fluid'>
                   <div className="card followCard border-0 " >
                        <div className="row g-0 ">
                            <div className="col-md-2">
                                <img src={img2} className="img-fluid followCardImage mx-5 my-4 " alt="..."/>
                            </div>
                            <div className="col-md-10">
                                <div className="card-body mx-4 d-flex">
                                    <div className='cardItems'>
                                        <h5 className="card-title mx-3">Gideon M-K</h5>
                                        <p className="card-text mx-3">Epidemiologist. Writer </p>
                                    </div>
                                    <button type="button" className='btn rounded-pill btn-outline-dark my-2'>Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card followCard border-0 " >
                        <div className="row g-0 ">
                            <div className="col-md-2">
                                <img src={img3} className="img-fluid followCardImage mx-5 my-4 " alt="..."/>
                            </div>
                            <div className="col-md-10">
                                <div className="card-body mx-4 d-flex">
                                    <div className='cardItems'>
                                        <h5 className="card-title mx-3">Will Smith</h5>
                                        <p className="card-text mx-3">Hollywood Actor </p>
                                    </div>
                                    <button type="button" className='btn rounded-pill btn-outline-dark my-2'>Follow</button>
                                </div>
                            </div>
                        </div>
                    </div> <div className="card followCard border-0 " >
                        <div className="row g-0 ">
                            <div className="col-md-2">
                                <img src={img4} className="img-fluid followCardImage mx-5 my-4 " alt="..."/>
                            </div>
                            <div className="col-md-10">
                                <div className="card-body mx-4 d-flex">
                                    <div className='cardItems'>
                                        <h5 className="card-title mx-3">Will Leitch</h5>
                                        <p className="card-text mx-3">Author of five books</p>
                                    </div>
                                    <button type="button" className='btn rounded-pill btn-outline-dark my-2'>Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div> <div className="card followCard border-0 " >
                        <div className="row g-0 ">
                            <div className="col-md-2">
                                <img src={img5} className="img-fluid followCardImage mx-5 my-4 " alt="..."/>
                            </div>
                            <div className="col-md-10">
                                <div className="card-body mx-4 d-flex">
                                    <div className='cardItems'>
                                        <h5 className="card-title mx-3">Dhirendra Yadav</h5>
                                        <p className="card-text mx-3">Full stack developer</p>
                                    </div>
                                    <button type="button" className='btn rounded-pill btn-outline-dark my-2'>Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className='mx-5'>Reading List</h5>
                        <p className='mx-5'>Click the <span> <i className="listIcon fas fa-list"></i></span>  on any story to easily add it to your reading list or a custom list that you can share.</p>
                    </div> 
                    <div className='d-flex flex-wrap mx-4'>
                        <button type="button" className='btn btn-sm rounded-pill btn-outline-dark my-2 mx-2 border-0'>Help</button>
                        <button type="button" className='btn btn-sm rounded-pill btn-outline-dark my-2 mx-2 border-0'>Status</button>
                        <button type="button" className='btn btn-sm rounded-pill btn-outline-dark my-2 mx-2 border-0'>Writter</button>
                        <button type="button" className='btn btn-sm rounded-pill btn-outline-dark my-2 mx-2 border-0'>Blog</button>
                        <button type="button" className='btn btn-sm rounded-pill btn-outline-dark my-2 mx-2 border-0'>Careers</button>
                        <button type="button" className='btn btn-sm rounded-pill btn-outline-dark my-2 mx-2 border-0'>Privacy</button>
                        <button type="button" className='btn btn-sm rounded-pill btn-outline-dark my-2 mx-2 border-0'>Terms</button>
                        <button type="button" className='btn btn-sm rounded-pill btn-outline-dark my-2 mx-2 border-0'>About</button>
                    </div>                  
                </div>
            </div>
    </div>  
    );
}
export default Posts;