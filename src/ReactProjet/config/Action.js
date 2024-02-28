export const  Add_User=(newuser)=>{
    return {type:"ajouter",payload:newuser}
} 

export const Update=(user)=>{
    return {type:"modifier",payload:user}
}

export const Delete_User=(id)=>{
    return{type:"supp",payload:id}
}

