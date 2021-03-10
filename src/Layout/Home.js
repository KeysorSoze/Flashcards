import React, {useEffect, useState} from "react"
import {listDecks} from "../utils/api/index";
import {Link} from "react-router-dom";
import DeckMap from "./DeckMap";

function Home (){
    const [deckList, setDeckList] = useState([])

    useEffect(() => {
        async function getDecks() {
            let Decks = await listDecks();
            setDeckList(Decks); 
        }
        getDecks();
    }, []);
    console.log(deckList);

    const mappedDecks = deckList.map((deck) => {
        return(
            <DeckMap 
                key={deck.id}
                description={deck.description}
                cards={deck.cards}
                id={deck.id}
                name={deck.name}
            />
        );
    });

    return(
        <div>
            <Link to="/decks/new" type="button" className="btn btn-secondary">
                <span className="oi oi-plus" />
                {``} Create Deck
            </Link>
            {mappedDecks}
        </div>
    );
}

export default Home;