import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const CollectionCreate = (props) => {
    const [ glamBrand, setGlamBrand ] = useState('');
    const [ glamName, setGlamName ] = useState('');
    const [ glamCat, setGlamCat ] = useState('');
    const [ glamBuyLoc, setGlamBuyLoc ] = useState('');
    const [ glamBuyPrice, setGlamBuyPrice ] = useState('');
    const [ glamLinkPic, setGlamLinkPic ] = useState('');
    const [ glamComments, setGlamComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://glamrepo.herokuapp.com/api/glam/create', {
            method: 'POST',
            body: JSON.stringify({glam: {glamBrand: glamBrand, glamName: glamName, glamCat: glamCat, glamBuyLoc: glamBuyLoc, glamBuyPrice: glamBuyPrice, glamLinkPic: glamLinkPic, glamComments: glamComments}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((glamData) => {
            console.log(glamData);
            setGlamBrand('');
            setGlamName('');
            setGlamCat('');
            setGlamBuyLoc('');
            setGlamBuyPrice('');
            setGlamLinkPic('');
            setGlamComments('');
            props.fetchCollection();
        })
    }

    return(
        <>
        <h3>Add a Product to Your Collection</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="glamBrand"/>
                <Input name="glamBrand" placeholder="Brand"value={glamBrand} onChange={(e) => setGlamBrand(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="glamName"/>
                <Input name="glamName" placeholder="Name" value={glamName} onChange={(e) => setGlamName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="glamCat"/>
                <Input name="glamCat" placeholder="Category" value={glamCat} onChange={(e) => setGlamCat(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="glamBuyLoc"/>
                <Input name="glamBuyLoc" placeholder="Purchase Location" value={glamBuyLoc} onChange={(e) => setGlamBuyLoc(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="glamBuyPrice"/>
                <Input name="glamBuyPrice" placeholder="$" value={glamBuyPrice} onChange={(e) => setGlamBuyPrice(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="glamLinkPic"/>
                <Input name="glamLinkPic" placeholder="Link to Product" value={glamLinkPic} onChange={(e) => setGlamLinkPic(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="glamComments"/>
                <Input name="glamComments" placeholder="Comments" value={glamComments} onChange={(e) => setGlamComments(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
        </>
    )
}
export default CollectionCreate;