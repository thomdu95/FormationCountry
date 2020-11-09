import React from 'react'

// Dump Component
class MyHeader extends React.Component {
    render() {
        return (
          <ul style={this.props.ulStyle}>
            {this.props.list &&
              this.props.list.map((elem) => {
                return <li key={elem} onClick={this.props.functionToCall.bind(this, elem)}>{elem}</li>;
              })}
          </ul>
        );
    }
}

export default MyHeader;