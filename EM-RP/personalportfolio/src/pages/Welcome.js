import React from "react";
import { Collection, CollectionItem } from "react-materialize";

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome ">
        <Collection className="MSD" header="Welcome, please select a mood">
          <CollectionItem href="/welcome">Pretty</CollectionItem>
          <CollectionItem href="/">Confident</CollectionItem>
          <CollectionItem href="/no">Bold</CollectionItem>
          <CollectionItem href="#">Weird</CollectionItem>
        </Collection>
      </div>
    );
  }
}

export default Welcome;
