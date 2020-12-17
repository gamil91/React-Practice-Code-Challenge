import React from 'react'

const MoreButton = ({next}) => {
    return <button onClick={ () => {next()}}>
            More sushi!
          </button>
}

export default MoreButton