import React, { Component } from "react";
import { hasRole, isAllowed } from "../components/auth";
import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";
import GridData from "../components/gridData";
import Logout from "../containers/Logout";
const user = {
  roles: ["user"],
  rights: ["can_view_weather_data"]
};

const admin = {
  roles: ["user", "admin"],
  rights: ["can_view_weather_data", "can_view_users"]
};

export class Dashboard extends Component {
    state = {
        loggedInUser:""
    };
    componentDidMount(){
        debugger;
        this.setState({
            loggedInUser: sessionStorage.getItem('userEmail')
        });
    }

    render() {
        if(hasRole(admin, ["admin"]) && isAllowed(admin, ["can_view_users"]) && localStorage.getItem('userType') == 'admin'){
            return (
                <React.Fragment>
                    <h5 style={{textAlign: "right"}}>Welcome {this.state.loggedInUser}</h5>
                    <Logout/>
                    <SearchBar/>
                    <WeatherList/>
                    <GridData/>
                </React.Fragment>
              )
        } else if (hasRole(user, ["user"]) && isAllowed(user, ["can_view_weather_data"]) && localStorage.getItem('userType') == 'user') {
            return (
                <React.Fragment>
                    <Logout/>
                    <SearchBar/>
                    <WeatherList/>
                </React.Fragment>
              )
        } 
    }
}