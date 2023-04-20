import { useNavigate } from 'react-router-dom';
import sadCloud from '../icons/sad-cloud.png';
const NotFound = () => {
    const history= useNavigate();
    return ( 
        <div className="notFound d-flex flex-column align-items-center gap-3">
            <img className='not-found-img' src={sadCloud} alt="" />
            <p className="fs-2 fw-bold">Not Found !</p>
            <button className='my-btn p-2'
            onClick={()=>history(-1)}>Go Back</button>
        </div>
    );
}
export default NotFound;