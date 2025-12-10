
import { Row, Col } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campSlice';
import { useSelector } from 'react-redux';


const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
console.log('campsites:', campsites)
    return (
        <Row className="ms-auto">
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default CampsitesList;





// <Col 
//                  md={5}
//                  className="m-4" 
//                  key={campsite.id}
//                  onClick={() => setCampsiteId(campsite.id)}>
//                     <CampsiteCard campsite={campsite} />
//                 </Col>







// import {Col, Row } from 'reactstrap';
// import CampsiteCard from "./CampsiteCard";
// import { selectAllCampsites } from './campsitesSlice';
// import { useSelector } from 'react-redux';




// const CampsitesList = () => {
//     const campsites = selectAllCampsites();

//     return(
//         const CampsitesList = () => {
//     const campsites = useSelector(selectAllCampsites); // <-- useSelector is required

//     return (
//         // <Row className='ms-auto'>
//         //     {campsites.map((campsite) => {
//         //         return(
//         //         <Col md='5' className='m-4' key={campsite.id}> 
//         //         <CampsiteCard campsite={campsite}/> 
//         //         </Col>
//         //         );
//         //     })}
//         // </Row>
       
//     );
// }

        
//     );
// }
// export default CampsitesList;


