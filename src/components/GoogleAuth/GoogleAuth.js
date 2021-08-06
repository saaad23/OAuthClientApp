import React, { Component } from "react";
import "./google-auth.css";

export class GoogleAuth extends Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "996749247507-b7jkde9bj75of8fkcbea2n1ttaiai908.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
    console.log(this.auth.signOut());
  };
  //////// For Updating Authentication State ///
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="sign-in-out-btn">
          Google Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="sign-in-out-btn">
          Google Sign In
        </button>
      );
    }
  }
  render() {
    return (
      <div>
        <h1>{this.renderAuthButton()}</h1>
      </div>
    );
  }
}

export default GoogleAuth;
