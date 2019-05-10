
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Accueil from "./component/Accueil";
import Contact from "./component/Contact";
import Apropos from "./component/Apropos";
import Navigation from "./component/Navigation";
import "./App.css";

// principal
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Navigation/>
            <switch>
                <Route path = "/" component = {Accueil} exact/>
                <Route path = "/Contact" component = {Contact}/>
                <Route path = "/Apropos" component = {Apropos}/>
            </switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

