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
            <h2>Add a new customer.</h2>
            <form onSubmit={ handleSubmit }>
                <label>Customer Title:</label>
                <input 
                type = 'text' 
                required 
                value= { title }
                // The below is an anonymous function which will change the state 
                // of title to the values being entered
                onChange = {(e) => setTitle(e.target.value)}/>

                <label>First Name:</label>
                <input
                required
                value= {fname} 
                onChange={(e) => setBody(e.target.value)}/> 

                <label>Last Name:</label>
                <input
                required
                value= {body} 
                onChange={(e) => setBody(e.target.value)}/> 
                
                <label>Date of Birth:</label>
                <input
                required
                value= {body} 
                onChange={(e) => setBody(e.target.value)}/> 

                <label>Gender:</label>
                <select
                value = {author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value='Male'> Male </option>
                    <option value='Female'> Female </option>
                    <option value='PNTS'> Prefer Not To Say </option>
                </select>

                <label>Phone Number:</label>
                <input
                required
                value= {body} 
                onChange={(e) => setBody(e.target.value)}/>

                <label>Physical Address:</label>
                <textarea 
                required
                value= {body} 
                onChange={(e) => setBody(e.target.value)}> </textarea>

                <label>Email Address:</label>
                <input
                required
                value= {body} 
                onChange={(e) => setBody(e.target.value)}/> 

                <label>Occupation:</label>
                <input
                required
                value= {body} 
                onChange={(e) => setBody(e.target.value)}/> 
                
                <label>Profile Status:</label>
                <select
                value = {author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value='Active'> Active </option>
                    <option value='Suspended'> Suspended </option>
                    <option value='Closed'> Closed </option>
                    <option value='PH'> Policy Holder </option>
                </select>
                     
                <label>Description:</label>
                <textarea
                required
                value= {body} 
                onChange={(e) => setBody(e.target.value)}> </textarea>
                
                {!isPending && <button>Add Customer</button>}
                {isPending && <button disabled>Add Customer</button>}
            </form>
        </div>
     );
}
 
export default CreateCustomer;