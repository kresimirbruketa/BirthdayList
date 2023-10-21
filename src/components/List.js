import React from "react";

function List (props) {

    function handleClick () {
        return(
            props.onDelete(props.id)
        )
    }




    return (
        <article className="person">
            <img src={props.img} alt="person"></img>
            <div>
                <h4>{props.fullName}</h4>
                <p>{props.years} years</p>
                <button onClick={handleClick}>Delete</button>
            </div>
        </article>

    )
};


export default List;