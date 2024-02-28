import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Delete_User } from "../config/Action";

function UserListe(){
  const users = useSelector((data)=>data.users)
  const dispatch=useDispatch();

    function HandlDelete(id){
      dispatch(Delete_User(id)) 
    }
    return(
        <>

        <h1  class="col text-center "  style={{background: '#838897'}}> <i class="bi bi-person-lines-fill"></i>  Gestionnairs des stagiaires</h1>
       
        <br/>  <br/> 

        <table class="table table-bordered table-sm">
            <tr>
                <th>Id</th>
                <th>Nom Prénom</th>
                <th>Email</th>
                <th>Action</th>
            </tr>

          {users.map((x)=>{
            return(
                <tr >
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.email}</td>

                <td>
                  <Link to={`/UpdateUser/${x.id}`}><button className="btn btn-dark" style={{ width: "120px" }}> <i class="bi bi-pencil"></i> Edit</button></Link>    
                   <span> <button   className="btn btn-danger" style={{ width: "120px" }} onClick={()=>{HandlDelete(x.id)}}> <i class="bi bi-trash3"></i> Delete </button></span>
                </td>

             </tr>
            )
          })}

        </table>
<br></br>
        <div class="d-flex justify-content-center container ">
        <Link to="/AddUser">
            <button className="btn btn-secondary btn-sm" style={{ width: "450px" }}> Ajouter un Stagiaire </button>
        </Link>
        </div>
        
        </>
    )
}
export default UserListe;