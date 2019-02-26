import React, { Component } from 'react'


export default class LocationList extends Component {
    render() {
        return (
            <article>
                <h1>Location List</h1>
                <section>Nashville South Location</section>
                    <h5>500 Puppy Way</h5>
                    <h5>Nashville, TN 37421</h5>
                <section>Nashville North Location</section>
                    <h5>600 Puppy Drive</h5>
                    <h5>Nashville, TN 37421</h5>
            </article>
        );
    }
}
