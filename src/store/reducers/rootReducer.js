import {combineReducers} from "redux";
import {ReactReduxFirebaseProvider,firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})
export default rootReducer