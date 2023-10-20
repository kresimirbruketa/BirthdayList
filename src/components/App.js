import React, { useState } from "react";

import List from "./List";
import data from "./Data";

function App (){

    const [people, setPeople] = useState(data);

    function loopPeople(person){
        return(
            <List 
                img = {person.image}
                fullName = {person.name}
                years = {person.age}
                onDelete = {deletePerson}
            />
        )
    }

    function deleteAll (people){
        return (
            setPeople([])
        )
    }

    function deletePerson (){
        
    }


    return(
        <main>
            <section className="container">
                <h3>Today is:</h3>
                <h3>There are {people.length} birthdays today</h3>
                {people.map(loopPeople)}
                <button className="all-btn" onClick={deleteAll}>Clear all</button>
            </section>
        </main>
    )
};


export default App;