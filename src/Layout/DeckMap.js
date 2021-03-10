import React from "react";
import {deleteDeck} from "../utils/api/index";
import {Link} from "react-router-dom";

function DeckMap(props){
    const handleDeleteClick = async () => {
        if (
            window.confirm("Are you sure you would like to delete this deck?\nYou will not be able to recover it.")
        ){
            await deleteDeck(props.id);
        }
    };

    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    {props.name}
                </h5>
                <h5 className="card-title">
                    {props.cards.length} cards
                </h5>
                <p className="card-text">
                    {props.description}
                </p>
                <Link to={`/decks/${props.id}`} className="btn btn-info">
                    View
                </Link>
                <Link to={`/decks/${props.id}/study`} className="btn btn-info">
                    Study
                </Link>
                <button
                className="btn btn-outline-danger float-right"
                title="Delete Deck"
                onClick={handleDeleteClick}
                >
                    <span className="oi oi-trash" />
                </button>
            </div>
        </div>
    );
}

export default DeckMap;