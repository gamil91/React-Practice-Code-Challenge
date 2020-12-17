import React, { Fragment } from 'react'

const Sushi = ({ sushi, eaten, taken }) => {

      const { name, price, img_url, id } = sushi
      
  return (
    <Fragment>
      <div className="sushi" onClick={() => eaten(sushi)}>
        <div className="plate">
          { taken ? null : <img src={img_url} width="100%" alt={name}/> }
        </div>
        <h4 className="sushi-details">
          {name} - ${price} sushi no. {id}
        </h4>
      </div>
    </Fragment>
    )
}


export default Sushi