import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from "react-router-dom"; 

const BlogDetails = () => {

    //This will allow us to get the id passed in the URL
    const { id } = useParams(); 
    const { data: blog, error, isPending} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${id}`,{
            method: 'DELETE', //type of request.
        }).then(() => {
            console.log("Blog has been deleted.");
            history.push("/");
        })

    }

    return (  
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div> { error } </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Customer No: {blog.memno}</p>
                    <div>{blog.body}</div>
                    <button onClick={ handleClick }>Delete policy</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;