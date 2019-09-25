import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const CollectionEdit = (props) => {
    const [editBrand, setEditBrand] = useState(props.collectionToUpdate.glamBrand);
    const [editName, setEditName] = useState(props.collectionToUpdate.glamName);
    const [editCat, setEditCat] = useState(props.collectionToUpdate.glamCat);
    const [editBuyLoc, setEditBuyLoc] = useState(props.collectionToUpdate.glamBuyLoc);
    const [editPrice, setEditPrice] = useState(props.collectionToUpdate.glamBuyPrice);
    const [editLink, setEditLink] = useState(props.collectionToUpdate.glamLinkPic);
    const [editComments, setEditComments] = useState(props.collectionToUpdate.glamComments);

    const collectionUpdate = (event, collection) => {
        event.preventDefault();
        fetch(`https://glamrepo.herokuapp.com/api/glam/${props.collectionToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({log: {glamBrand: editBrand, glamName: editName, glamCat: editCat, glamBuyLoc: editBuyLoc, glamPrice: editPrice, glamLinkPic: editLink, glamComments: editComments}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => {
            props.fetchCollection();
            props.updateOff();
        })
    }

    return(
       <Modal isOpen={true}>
           <ModalHeader>Add to My Collection</ModalHeader>
           <ModalBody>
               <Form onSubmit={collectionUpdate}>
                   <FormGroup>
                       <Label htmlFor='glamBrand'>Edit Brand:</Label>
                       <Input name="Brand" value={editBrand} onChange={(e) => setEditBrand(e.target.value)}/>
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor='glamName'>Edit Name:</Label>
                       <Input name="Name" value={editName} onChange={(e) => setEditName(e.target.value)}/>
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor='glamCat'>Edit Category:</Label>
                       <Input name="Category" value={editCat} onChange={(e) => setEditCat(e.target.value)}/>
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor='glamBuyLoc'>Edit Purchase Location:</Label>
                       <Input name="Purchase Location" value={editBuyLoc} onChange={(e) => setEditBuyLoc(e.target.value)}/>
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor='glamBuyPrice'>Edit Price:</Label>
                       <Input name="Price" value={editPrice} onChange={(e) => setEditPrice(e.target.value)}/>
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor='glamLinkPic'>Edit Link:</Label>
                       <Input name="Link" value={editLink} onChange={(e) => setEditLink(e.target.value)}/>
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor='glamComments'>Edit Comments:</Label>
                       <Input name="Comments" value={editComments} onChange={(e) => setEditComments(e.target.value)}/>
                   </FormGroup>
                   <Button type="submit">Update</Button>
               </Form>
           </ModalBody>
       </Modal>
    )
}
export default CollectionEdit;