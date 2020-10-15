import React from "react";
import Card from "react-bootstrap/Card";

export default function NewsCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
  {props.data.map((item)=>{return (<><a target="_blank" rel="noopener noreferrer" href={item.url}>{item.name}</a><br/></>);})}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
