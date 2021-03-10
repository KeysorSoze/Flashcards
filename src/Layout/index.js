import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {Switch, Route} from "react-router-dom";
import Home from "./Home";
import Study from "./Study";
import NewDeck from "./NewDeck";
import Deck from "./Deck";
import AddCard from "./AddCard";
import EditCard from "./EditCard";
import EditDeck from "./EditDeck"

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/decks/new">
            <NewDeck />
          </Route>

          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>

          <Route exact path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
