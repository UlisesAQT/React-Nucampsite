import { Container, Row, Col, Button } from "reactstrap";
// import CampsiteDetail from "../features/campsites/CampsiteDetail";
// import CampsiteList from "../features/campsites/CampsitesList";
// import { selectRandomCampsite } from "../features/campsites/campSlice";
import {useState} from 'react';
import {selectCampsiteById} from '../features/campsites/campSlice';
import CampsitesList from "../features/campsites/CampsitesList";

const CampsiteDirectoryPage = () => {
  const [campsiteId, setCampsiteId] = useState(0)
  const selectedCampsite = selectCampsiteById(campsiteId);

  return (
    <Container>
      <CampsitesList/>
    </Container>
  );
};
export default CampsiteDirectoryPage;
