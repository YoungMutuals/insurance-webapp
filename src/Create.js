import { useState } from "react";
import { useHistory } from "react-router-dom"; 

const CreateCustomer = () => {
    const  [title, setTitle] = useState('');
    const  [{body,fname}, setBody] = useState('');
    const  [author, setAuthor] = useState('Mario');
    const  [isPending, setIsPending] = useState(false);

    const history = useHistory(); //We can use this to go forwards or back in history

    const handleSubmit = (e) => {
        e.preventDefault(); //Prevents the refresh.
        const blog = {title, body, author};

        setIsPending(true); // True while the request is happening. 

        fetch('http://localhost:8000/blogs/', {
            method: 'POST', //type of request.
            headers: { "Content-Type": "application/json" }, // We sending JSON data with this request.
            body: JSON.stringify(blog) // Sending the data.

        }).then(() => {
            console.log("New Blog Added");
            setIsPending(false); // False once the request is done. 
            history.push("/"); //Going back one page
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new policy</h2>
            <form onSubmit={ handleSubmit }>
            <label>Cover type:</label>
                <select
                value = {author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value='House'> House </option>
                    <option value='Car'> Car </option>
                </select>

                <label>Customer ID:</label>
                <input
                required
                value= {fname} 
                onChange={(e) => setBody(e.target.value)}/> 

                {!isPending && <button>Add Policy</button>}
                {isPending && <button disabled>Add Policy</button>}
            </form>
        </div>
     );
}
 
export default CreateCustomer;