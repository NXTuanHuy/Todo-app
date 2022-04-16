import useFetch from '../../customize/fetch';
import './Blog.scss';
import { Link } from "react-router-dom";
import { Spinner } from 'react-bootstrap';

const Blog = () => {

    const { data: dataBlogs, isLoading, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);

    let newData = [];
    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(0, 9)
    }

    return (
        <div className="blogs-container">
            {isLoading === false && newData && newData.length > 0 && newData.map(item => {

                return (
                    <div className="single-blog" key={item.id}>
                        <div className="title">{item.title}</div>
                        <div className="content">{item.body}</div>
                        <button>
                            <Link to={`/blog/${item.id}`}>  View detail</Link>
                        </button>
                    </div>
                )
            })}

            {isLoading === true &&
                <div style={{ textAlign: 'center !important', width: '100%', margin: '50px' }}>

                    <Spinner style={{ textAlign: 'center !important' }} animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
        </div>

    )
}

export default Blog;