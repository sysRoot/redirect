import React from "react";
import { CSSTransition } from "react-transition-group";

import THN from "./THN";
import Slip from "./Slip";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

function App(props) {
    return (
        <Router>
            <div className="App">
            <Route exact path='/'>
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                        >
                            <div className="page">
                                <THN />
                            </div>
                        </CSSTransition>
                    )}
                </Route> <Route exact path='/to-slip'>
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                        >
                            <div className="page">
                                <Slip />
                            </div>
                        </CSSTransition>
                    )}
                </Route>
            </div>
        </Router>
    );
}

export default App;
