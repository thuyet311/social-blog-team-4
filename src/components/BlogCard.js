import React from 'react';
import Moment from 'react-moment';
import { Card } from 'react-bootstrap';

const BlogCard = ({ blog }) => {
  const addDefaultSrc = (e) => {
    e.target.src = 'https://media.giphy.com/media/l2JJDrvnFUEboRgSQ/giphy.gif';
  };

  const imgSrc =
    blog.images && blog.images.length > 0
      ? blog.images[0]
      : 'https://media.giphy.com/media/l2JJDrvnFUEboRgSQ/giphy.gif';

  return (
    <li>
      <Card
        style={{
          width: '18rem',
          marginBottom: '2rem',
        }}
      >
        <Card.Img variant='top' src={imgSrc} onError={addDefaultSrc} />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>{blog.content}</Card.Text>
        </Card.Body>
        <Card.Footer className='text-muted'>
          @{blog.author.name} wrote <Moment fromNow>{blog.createdAt}</Moment>
        </Card.Footer>
      </Card>
    </li>
  );
};

export default BlogCard;
