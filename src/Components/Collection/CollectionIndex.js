import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';
import CollectionCreate from './CollectionCreate';
import CollectionTable from './CollectionTable';
import CollectionEdit from './CollectionEdit';

const CollectionIndex = (props) => {
   const [collection, setCollection ] = useState([]);
   const [updateActive, setUpdateActive] = useState(false);
   const[collectionToUpdate, setCollectionToUpdate] = useState({});

   const fetchCollection = () => {
       fetch('https://glamrepo.herokuapp.com/api/glam/getall', {
           method: 'GET',
           headers: new Headers ({
               'Content-Type': 'application/json',
               'Authorization': props.token
           })
       }) .then( (res)=> res.json())
       .then((logData)=> {
           console.log(logData);
           setCollection(logData)
       })
   }

   const editUpdateCollection = (collection) => {
       setCollectionToUpdate(collection);
       console.log(collection);
   }
   const updateOn = () => {
       setUpdateActive(true);
   }
   const updateOff= () => {
       setUpdateActive(false);
   }
   
   useEffect (() => {
       fetchCollection();
   }, [])
    return(
        <Container>
            <Row>
                <Col md="3">
                    <CollectionCreate fetchCollection={fetchCollection} token={props.token}/>
                </Col>
                <Col md="9">
                    <CollectionTable collection={collection} editUpdateCollection={editUpdateCollection} updateOn={updateOn} fetchCollection={fetchCollection}
                    token={props.token}/>
                </Col>
                {updateActive ? <CollectionEdit collectionToUpdate={collectionToUpdate} updateOff={updateOff} token={props.token} fetchCollection={fetchCollection}/> : <></>}
            </Row>
        </Container>
    )
}

export default CollectionIndex;