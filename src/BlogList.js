import { Link } from 'react-router-dom';

const BlogList = ({blogs, title}) => {

    return ( 
    <div className="blog-list">
        <h2>{title}</h2>
        <div className="row row-cols-4">
            {blogs.map((blog) => (
                <div className="col mb-4" key={blog.id}>
                    <div className="blog-preview rounded border border-2 border-success shadow"> 
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{ blog.title }</h2>
                            <p> Customer No: { blog.memno }</p>
                            <p> Policy Taken: { blog.policy }</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}
 
export default BlogList;