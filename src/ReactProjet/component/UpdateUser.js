import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Update } from "../config/Action";

function UpdateUser(){

    const {id} = useParams() // use params bash katjbed lina mn url donne
    const user = useSelector((data)=>data.users.find((el)=>el.id === Number(id)));   // kan9arno les ids li endna f store mea l'id  li tsift lina f URL/2 
    const [name,setname]=useState(user.name);
    const [email,setemail]=useState(user.email);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    

    function Modifier(){
        dispatch( Update({id:id , name:name , email:email})) ;
        Navigate("/");
    }
    return(
        <form>
        <h1>Modification : </h1>
        <label className="form-label">Name:</label>
        <input className="form-control" style={{ width: "300px" }} type="text" value={name} onChange={(event)=>{setname(event.target.value)}}></input>

        <label className="form-label">Email:</label>
        <input className="form-control" style={{ width: "300px" }} type="text" value={email} onChange={(event)=>{setemail(event.target.value)}} ></input>
<br></br>
        <button type="button" className="btn btn-dark" style={{ width: "90px" }} onClick={Modifier}> <i class="bi bi-pencil"></i>  Edit</button>
    
        </form>
    )
    
}
export default UpdateUser;