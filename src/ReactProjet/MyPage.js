import { BrowserRouter,Route,Routes } from "react-router-dom";
import UserListe from "./component/UserListe";
import AddUser from "./component/AddUser";
import UpdateUser from "./component/UpdateUser";

    function MyPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<UserListe />}></Route>
        <Route path="/AddUser" element={<AddUser />}></Route>
        <Route path="/UpdateUser/:id" element={<UpdateUser/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default MyPage;
