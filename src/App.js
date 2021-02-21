import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import AppBody from "./App.style";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";

function App() {
  return (
    <div className="app">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
