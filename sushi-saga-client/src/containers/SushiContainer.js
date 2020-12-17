import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = ({ sushis, next, eaten, eatenSushis }) => {


  return (
    <Fragment>
      <div className="belt">
        {sushis.map(sushi => <Sushi sushi={sushi} eaten={eaten} taken={eatenSushis.includes(sushi)} key={sushi.id}/>)}
        <MoreButton next={next} />
      </div>
    </Fragment>
  )
}

export default SushiContainer