import React, { useState } from "react";

import List from "./List";
import data from "./Data";

function App (){

    const [people, setPeople] = useState(data);

    function loopPeople(person){
        return(
            <List 
                key = {person.id}
                id = {person.id} 
                img = {person.image}
                fullName = {person.name}
                years = {person.age}
                onDelete = {deletePerson}

            />
        )
    };

    function deleteAll (){
        return (
            setPeople([])
        )
    }
    

    function deletePerson(id){
        const newPpl = people.filter((person) => person.id !== id);
        setPeople(newPpl);
    }
        


    return(
        <main>
            <section className="container">
                <h3>Today is: {new Date().toLocaleDateString("hr")}</h3>
                <h3>There are {people.length} birthdays today</h3>
                {people.map(loopPeople)}
                <button className="all-btn" onClick={deleteAll}>Clear all</button>
            </section>
        </main>
    )
};


export default App;