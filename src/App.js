import './App.css';
import React from "react";
import MyHeader from "./MyHeader";
import CountryList from "./CountryList";
import axios from "axios"

// function App() {
class App extends React.Component {

  state = {
    country: [],
    countryToDisplay: []
  }

  componentDidMount() { // Provoque un Re render
    axios.get("https://restcountries.eu/rest/v2/all")
    .then((response) => {

      response.data.forEach(elem => {
        if (!elem.borders.length) {
          elem.borders[0] = "Inexistantes"
        } else {
          elem.borders.forEach((b, id) => {
            let paysCorrespondant = response.data.filter(pays => b === pays["alpha3Code"])
            if (paysCorrespondant.length && paysCorrespondant.length === 1) {
              elem.borders[id] = paysCorrespondant[0].translations.fr
            } 
          })
        }
      })

      this.setState({
        country: response.data,
        countryToDisplay: response.data
      })
    })
    .catch((error) => {
      console.error(error)
    })
    // .finally()
  }

  clickFunction = (elem) => {
    console.log("On a cliqué sur ", elem)
    if (elem === "Tout") {
      this.setState({
        countryToDisplay: this.state.country
      })
    } else {
      this.setState({
        countryToDisplay: this.state.country.filter(country => country.region === elem)
      })
    }
  }

  clickFunctionSub = (elem) => {
    console.log("On a cliqué sur le subContinent ", elem)
    this.setState({
      countryToDisplay: this.state.country.filter(country => country.subregion === elem)
    })
  }
  // Methode
  render() {
    const listOfLi = ["Tout"]
    const listOfLiFooter = [];
    if (this.state.country.length) {
      this.state.country.forEach((elem) => {
        if (!listOfLi.includes(elem.region)) {
          listOfLi.push(elem.region)
        }
        if (!listOfLiFooter.includes(elem.subregion)) {
          listOfLiFooter.push(elem.subregion)
        }
      })
    }
    const myUlStyle = {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      listStyleType: "none",
      width: "100vw"
    };
    const myUlStyleFooter = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      listStyleType: "none",
      width: "100vw",
    };
    // Retourner
    return (
      <div className="App">
        {/* list == nom de la props | listOfLi == valeur de la props */}
        <MyHeader
          list={listOfLi}
          ulStyle={myUlStyle}
          functionToCall={this.clickFunction}
        />
        <MyHeader list={listOfLiFooter} ulStyle={myUlStyleFooter} functionToCall={this.clickFunctionSub} />
        <CountryList listOfCountry={this.state.countryToDisplay} />
      </div>
    );
  }
}

export default App;
