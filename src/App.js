import React from 'react';
import Button from './component/Button'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: ""
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleOperations = this.handleOperations.bind(this)
  }

  // handleChange() {
  //   this.setState(display: this.state.display)
  // }

  handleClick(e) {
    this.setState({display : this.state.display + e.target.value});
  }

  handleOperations() {
    let answer = eval(this.state.display);
    // console.log(answer);
    this.setState({display : answer});
  }

  render() {
    return (
      <section className='App'>
        <input className='disp' disabled onChange={(event) => this.handleClick(event)} value={this.state.display}/>
        <div>
          <Button handleClick={() => this.setState({display: ""})} text="C"/>
          <Button handleClick={() => this.setState({display: this.state.display.slice(0, -1)})} text="Del" />
          <Button handleClick={(event) => this.handleClick(event)} text="/" />
          <Button handleClick={(event) => this.handleClick(event)} text="*" />
        </div>
        <div>
          <Button handleClick={(event) => this.handleClick(event)} text="7" />
          <Button handleClick={(event) => this.handleClick(event)} text="8" />
          <Button handleClick={(event) => this.handleClick(event)} text="9" />
          <Button handleClick={(event) => this.handleClick(event)} text="-" />
        </div>
        <div>
          <Button handleClick={(event) => this.handleClick(event)} text="4" />
          <Button handleClick={(event) => this.handleClick(event)} text="5" />
          <Button handleClick={(event) => this.handleClick(event)} text="6" />
          <Button handleClick={(event) => this.handleClick(event)} text="+" />
        </div>
        <div>
          <Button handleClick={(event) => this.handleClick(event)} text="1" />
          <Button handleClick={(event) => this.handleClick(event)} text="2" />
          <Button handleClick={(event) => this.handleClick(event)} text="3" />
          <Button handleClick={(event) => this.handleClick(event)} text="." />
        </div>
        <div>
          <Button handleClick={(event) => this.handleClick(event)} text="0" />
          <Button handleClick={(event) => this.handleClick(event)} text="00" />
          {/* <Button handleClick={(event) => this.handleClick(event)} text="" /> */}
          <button className='equals' onClick={this.handleOperations}>=</button>
        </div>
      </section>
    );
  }
}

export default App;
