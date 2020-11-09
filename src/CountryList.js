import React from "react"
import Country from "./Country"
import CardColumns from "react-bootstrap/CardColumns"

class CountryList extends React.Component {
    render() {
        console.log(this.props.listOfCountry);
        return (
            <div style={{width: '65vw'}}>
                <CardColumns>
                    {this.props.listOfCountry.length && 
                    this.props.listOfCountry.map((elem) => {
                        return (
                            <Country key={elem.name} country={elem} />
                        )
                    })}
                </CardColumns>
            </div>
        )
    }
}

export default CountryList