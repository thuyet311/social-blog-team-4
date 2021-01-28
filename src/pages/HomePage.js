import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
import JumbotronBlog from '../components/JumbotronBlog';
import PaginationBar from '../components/PaginationBar';
import blogActions from '../redux/actions/blog.actions';
import BlogCard from '../components/BlogCard';

const HomePage = () => {
  const [pageNum, setPageNum] = useState(1);
  const limit = 10;
  const blogs = useSelector((state) => state.blog.blogs);
  const loading = useSelector((state) => state.blog.loading);
  const totalPages = useSelector((state) => state.blog.totalPages);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(blogActions.getBlogs(pageNum, limit));
  }, [dispatch, pageNum, limit]);

  const shouldShowPagination = blogs.length > 0 && totalPages > 1 && !loading;

  return (
    <Container>
      {pageNum === 1 && <JumbotronBlog />}

      <Row>
        <Col>
          {loading ? (
            <div className='text-center mt-5'>
              <ClipLoader color='#f86c6b' size={150} loading={true} />
            </div>
          ) : (
            <ul className='list-unstyled d-flex flex-wrap justify-content-between'>
              {blogs.map((b) => (
                <BlogCard key={b._id} blog={b} />
              ))}
            </ul>
          )}
        </Col>
      </Row>

      {shouldShowPagination && (
        <PaginationBar
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalPageNum={totalPages}
        />
      )}
    </Container>
  );
};

export default HomePage;
