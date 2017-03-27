import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  ${props => props.styling}
`;

const GridItem = styled.div`
  background: pink;
`;

const TextArea = styled.textarea`
  height: 100px;
  width: 300px;
`;

const defaultContainerStyle = `display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 5px;
`;

class App extends Component {
  state = {
    styling: defaultContainerStyle,
  }
  updateContainerStyling = (e) => this.setState({ styling: e.target.value })
  render() {
    console.log(this.state.styling);
    return (
      <div className="App">
        <TextArea
          value={this.state.styling}
          onChange={this.updateContainerStyling} />
        <Container styling={this.state.styling}>
          {[...Array(10)].map((_, key) => <GridItem key={key}>{key}</GridItem>)}
        </Container>
      </div>
    );
  }
}

export default App;
