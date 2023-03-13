import React from 'react'

const Sresult = (props) => {

    const img = `https://picsum.photos/400/400?${props.name}`

  return (
    <>
        <div className='container center'>
            <img src={img} alt='image' />
        </div>
    </>
  )
}

export default Sresult