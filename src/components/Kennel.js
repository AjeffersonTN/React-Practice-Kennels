import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalList from "./animals/AnimalList"
import "./Kennel.css"


class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]
    animalsFromAPI = [
        { id: 1, name: "Biggy" },
        { id: 2, name: "Pac" },
        { id: 3, name: "Spot" },
        { id: 4, name: "Doggy" }
    ]

    // This will eventually get pulled from the API

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI

    }

    render() {
        return (
            <article className="kennel">
                <EmployeeList employees={this.state.employees} />
                <LocationList locations={this.state.locations} />
                <AnimalList animals={this.state.animals} />
            </article>
        )
    }
}

export default Kennel