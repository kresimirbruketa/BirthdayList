import React from "react";

function List (props) {
    return (
        <article className="person">
            <img src={props.img} alt="person"></img>
            <div>
                <h4>{props.fullName}</h4>
                <p>{props.years} years</p>
                <button onClick={props.onDelete}>Delete</button>
            </div>
        </article>

    )
};


export default List;