import React from "react";
import { Provider, connect } from "react-redux";
import Counter from "./counter";
import reactLogo from "../assets/react-logo.png";
import Parcel from "single-spa-react/parcel";

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "off",
      parcels: null,
      store: this.props.store,
      globalEventDistributor: this.props.globalEventDistributor
    };

    SystemJS.import("/reactParcel/singleSpaEntry.js").then(result => {
      this.setState({
        parcels: result
      });

      console.log(result);
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        value: "on"
      });
    }, 1000);
  }
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    let ret = <div />;

    if (this.state.store && this.state.globalEventDistributor) {
      ret = (
        <Provider store={this.state.store}>
          <div style={{ marginTop: 100 }}>
            <img src={reactLogo} style={{ width: 100 }} /> <br />
            This was rendered by App1, which is written in React.
            <Counter
              globalEventDistributor={this.state.globalEventDistributor}
            />
            <div>
              {this.state.parcels && (
                <Parcel
                  value={this.state.value}
                  config={this.state.parcels.reactComponentParcel}
                />
              )}
              {/* {this.state.parcels && (
                <Parcel
                  value={this.state.value}
                  config={this.state.parcels.reactComponentWithHooksParcel}
                />
              )} */}
            </div>
          </div>
        </Provider>
      );
    }
    // console.log(ret);
    return ret;
  }
}
