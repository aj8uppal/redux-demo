import React,{Component} from 'react';

class Main extends Component {
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
  }
  click(){
    this.props.setMood(0);
  }
  render() {
    return <div>
          <button onClick={this.click}>Click me!</button>
          <div>{this.props.mood}</div>
          </div>;
  }
}

export default Main;
