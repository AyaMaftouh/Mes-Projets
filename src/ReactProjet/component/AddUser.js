import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Add_User } from "../config/Action";

function AddUser(){
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const id = useSelector((data)=>data.users.length) // jbdena dik tol data b use selector o zedna elih 1 bash maybdach lina b 0

    const dispatch = useDispatch();
    const navigate = useNavigate(); // bash mnin nbrek ela enregistrer ydini l home page.


    function Enregistrer(){
       dispatch( Add_User({ id:id+1, name:name , email:email }));// HAD LES OBJETS HUMA LI GAHDI T AJOUTAW LIA F TABLEAU
       navigate("/");
       
    }
    
    return(
        <form>
        <h1> Ajouter un stagiaire: </h1>
        <label className="form-label">Nom Prénom:</label>
        <input className="form-control "  style={{ width: "300px" }} type="text" value={name} onChange={(event)=>{setname(event.target.value)}}></input>

        <label className="form-label">Email:</label>
        <input className="form-control"  style={{ width: "300px" }} type="text" value={email} onChange={(event)=>{setemail(event.target.value)}} ></input>
<br></br>
        <button type="button" className="btn btn-secondary" onClick={Enregistrer}>Enregistrer</button>
    
        </form>
    )

}
export default AddUser;