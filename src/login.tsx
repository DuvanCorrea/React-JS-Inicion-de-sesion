import React from "react";
import whitFarebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseKeys from "./firebase";

const firebaseApp = firebase.initializeApp(firebaseKeys);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Login extends React.Component {
  render() {
    const { user, singOut, singWhitGoogle }: any = this.props;
    return (
      <div>
        {user ? <p>Hello {user.displayName}</p> : <p>Please, sing in</p>}
        {user ? (
          <button onClick={() => singOut}>Sing out</button>
        ) : (
          <button onClick={() => singWhitGoogle}>Sing in whit google</button>
        )}
      </div>
    );
  }
}

export default whitFarebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);
