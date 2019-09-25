import React from 'react';
import {Table, Button} from 'reactstrap';

const CollectionTable = (props) => {

    const deleteCollection = (collection) => {
        fetch(`https://glamrepo.herokuapp.com/api/glam/${collection.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchCollection())
    }

    const collectionMapper = () => {
        return props.collection.map((collection, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{collection.id}</th>
                    <td>{collection.glamBrand}</td>
                    <td>{collection.glamName}</td>
                    <td>{collection.glamCat}</td>
                    <td>{collection.glamBuyLoc}</td>
                    <td>{collection.glamBuyPrice}</td>
                    <td>{collection.glamLinkPic}</td>
                    <td>{collection.glamComments}</td>
                    <td>
                        <Button color="warning" onClick={() => {props.editUpdateCollection(collection); props.updateOn()}}>Update</Button>
                        <Button color="danger" onClick={() => {deleteCollection(collection)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>My Collection</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Purchase Location</th>
                    <th>Purchase Price</th>
                    <th>Link</th>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
            {collectionMapper()}
            
        </Table>
        </>
    )
}
export default CollectionTable;