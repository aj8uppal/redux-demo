import React,{Component} from 'react';

class Main extends Component {
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
    //get scenario by id == 2
    this.state = {id: 2};
    let scenario = this.props.scenarios.filter(i => this.state.id === 2)[0];

  }
  onsubmitage(){
    
    this.props.setMood(0);
  }
  onsubmitname(){
    this.props.setMood(0);
  }
  render() {
    return <div>
    <input ref={node=>this.node = node} placeholder="age" />
    <button onClick={this.onsubmitage}>Submit Age</button>
    <input ref={node2=>this.node2 = node} placeholder="name" />
    <button onClick={this.onsubmitname}>Submit Name</button>
          {/*<button onClick={this.click}>Click me!</button>
          <div>{this.props.mood}</div>*/}
          </div>;
  }
}

export default Main;
