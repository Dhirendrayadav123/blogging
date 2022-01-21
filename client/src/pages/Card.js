import img from '../images/ts.png'
import './Card.css';

const Card=()=>{
 return(
             <div className="card mb-3 border-0 shadow mx-5" >
                <div className="row g-0">
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title ">Card title</h5>
                        <div className='text-truncate-container'>
                        <p className="card-text description ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.My name is dhirendra yadav.i am a ssoftware engineer specifically software developer.</p>
                        </div>
                        <p className="card-text"><small className="text-muted">Augest 5</small></p>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <img src={img} className="img-fluid rounded my-2 mx-5" alt="..."/>
                    </div>
                </div>
            </div>
        );
    }
export default Card;       