import React from "react"
import { withRouter } from "react-router"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import logo from "./logo.svg"
import "./App.css"
import PageForm from "./components/Form"
import InfoDisplay from "./components/InfoDisplay"

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  state = {
    values: {
      name: "",
      phoneNumber: "",
      email: "",
      degree: "",
      location: "",
      city: "",
      pinCode: null,
      totalExperience: "",
      skills: [],
      dateOfJoining: "",
    },
  }

  updateFormValues = (values: any) => {
    console.log(values)
    this.setState({ values })
    return true
  }
  render() {
    const { values } = this.state
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => (
                  <PageForm
                    values={values}
                    {...props}
                    onSubmit={this.updateFormValues}
                  />
                )}
              />

              <Route
                path="/display"
                exact
                render={(props) => <InfoDisplay values={values} {...props} />}
              />
              {/* <Route path="/another" component={AsyncPageAnother} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
