import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import AppBody, { AppLoading, AppLoadingContent } from "./App.style";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt="Slack"
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContent>
      </AppLoading>
    );
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <React.Fragment>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route exact path="/">
                  {/* <Home /> */}
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </React.Fragment>
        )}
      </Router>
    </div>
  );
}

export default App;
