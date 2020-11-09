import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Country extends React.Component {
    render() {
        return (
          <Card>
            <Card.Img variant="top" src={this.props.country.flag} />
            <Card.Body>
              <Card.Title>{this.props.country.translations.fr}</Card.Title>
              <Card.Text as="div">
                La capitale de ce pays est {this.props.country.capital}. Sa
                population est de {this.props.country.population} habitants.
                <p>
                  Ses frontières sont{" "}
                  {this.props.country.borders.map(
                    (elem) => {
                      return <span key={elem}>{elem}, </span>;
                    }
                  )}

                </p>
              </Card.Text>
              <Button
                variant="secondary"
                target="_blank"
                href={`https://fr.wikipedia.org/wiki/${this.props.country.translations.fr}`}
              >
                Visiter
              </Button>
            </Card.Body>
          </Card>
        );
    }
}

export default Country;