import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <div>
    <div className="post">
    <div className="image">
      {' '}
      <img
        src="https://blog.hubspot.com/hs-fs/hubfs/parts-url_1.webp?width=1190&height=800&name=parts-url_1.webp"
        alt=""
      />
    </div>

    <div className="text">
      <h2>Full house-battery backup coming later this year</h2>
      <p className="info">
        <Link to='/author' className="author">Abhishek</Link>
        <time>2023-3-12 16:45</time>
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
        placeat totam beatae minima perspiciatis illum earum dolore id
        laborum nobis, doloribus, cum odio eaque soluta harum tenetur. Nemo
        ipsum eaque aspernatur quo doloribus.lorem22
      </p>
    </div>
  </div>

    </div>
  )
}

export default Post
