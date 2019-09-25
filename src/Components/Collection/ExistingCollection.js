import React, { useState } from 'react';
import AddItems from './AddItems';


const ExistingCollection = () => {
      return(
        <table>
          <thead>
            <tr>
              <td>Brand</td>
              <td>Name</td>
              <td>Category</td>
              <td>Purchase Location</td>
              <td>Purchase Price</td>
              <td>Link to Product</td>
              <td>Comments</td>
            </tr>
          </thead>
          <tbody>
            {AddItems.map((glam, index)=> {
              return (
                <AddItems glam={glam} key={index} index={index}/>
              )
            })}
          </tbody>
        </table>
        
      )    
}
export default ExistingCollection;