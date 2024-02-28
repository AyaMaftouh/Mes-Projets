const initialstate = {users:[
    {id:1 ,name:"Aya maftouh" , email:"ayamaftouh99@gmail.com"},
    {id:2,name:"Leanne Graham", email:"Sincere@gmail.com"},
    {id:3,name:"Doe John", email:"john.doe@example.com"},

]}

const Reducer=(state=initialstate,action)=>{
    switch(action.type){
        case "ajouter":
            return{...state,users:[...state.users,action.payload]}
        
        case "modifier":
            const user = state.users.find((el)=>el.id === Number(action.payload.id)); // id tani howa li qlika elih l'utilisateur
            if(user){
                user.name = action.payload.name;
                user.email= action.payload.email;
            }
            return state
        
        case "supp":
            return {...state,users:[...state.users.filter((el)=> el.id !== parseInt(action.payload ) )]} 
        default:
            return state
           
    }
}
export default Reducer;