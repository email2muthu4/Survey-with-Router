import "./styles.css";
import { Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { AppDataProvider, history } from "./AppData";
import { SForm } from "./form/SForm";
import { Summary } from "./summary/Summary";

export default function App() {
  return (
    <Container>
      <AppDataProvider>
        <Router history={history}>
          <div>
            <h1> Survey</h1>
            <Switch>
              <Route path="/summery">
                <Summary />
              </Route>
              <Route path="/q3">
                <SForm />
              </Route>
              <Route path="/q2">
                <SForm />
              </Route>
              <Route path="/q1">
                <SForm />
              </Route>
              <Route path="/">
                <SForm />
              </Route>
            </Switch>
          </div>
        </Router>
      </AppDataProvider>
    </Container>
  );
}
