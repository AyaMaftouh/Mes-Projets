
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import MyPage from "./MyPage";
import Reducer from "./config/Reducer";

function Apps(){
    const store = legacy_createStore(Reducer)
    return(
    <Provider store={store}>
      <MyPage/>
    </Provider>
    )
}
export default Apps;