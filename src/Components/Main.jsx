import React,{Component} from 'react';
import axios from 'axios';

class Main extends Component {
  constructor(props){
    super(props);
    // this.click = this.click.bind(this);
    //get scenario by id == 2
    this.state = {id: 2, closed: [], drafts: [], open: [], sim_id: "", sim_desc: null};
    this.onsubmitage = this.onsubmitage.bind(this);
    this.onsubmitname = this.onsubmitname.bind(this);
    this.loadDashboard = this.loadDashboard.bind(this);
    this.getIntro = this.getIntro.bind(this);
    this.onChange = this.onChange.bind(this);
    // let scenario = this.props.scenarios.filter(i => this.state.id === 2)[0];

  }
  // login/authenticate method: return an Auth Token to the frontend
  //   store Auth Token (in redux store)
  //   user navigates through flow
  //   user clicks on View dashboard
  //     In the componentdidmount on dashboard, make axios request with redux store auth token
  componentDidMount(){
    // // HTTP 1/1
    // // METHOD: GET
    // // Content-Type: application/json
    // // Authorization: Bearer fbeuygdoh783u2ihdnlijaskhdlasiuhdliajskhdla;
    // let TOKEN = "abcdefghijklmnopqrstuvwxyz"; //ur gonna want to access ur redux store for this
    // let headers = {
    //   'Authorization': `Bearer ${TOKEN}`,
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json',
    //   'Accept-Encoding': 'gzip, deflate, br'
    // }
    // let config = {
    //   headers: headers
    // }
    // axios.get('http://b25d490fedad.ngrok.io/api/v1/dashboard/', config).then(res => {
    //   debugger;
    // })
  }
  onsubmitage(){
    this.props.setMood(0);
  }
  onsubmitname(){
    this.props.setMood(0);
  }
  loadDashboard(){
    let TOKEN = "abcdefghijklmnopqrstuvwxyz"; //ur gonna want to access ur redux store for this
    let headers = {
      'Authorization': `Bearer ${TOKEN}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br'
    }
    let config = {
      headers: headers
    }
    axios.get('http://b25d490fedad.ngrok.io/api/v1/dashboard/', config).then(res => {
      let data = res.data;
      this.setState({...data});
    })
  }
  onChange(event){
    this.setState({sim_id: event.target.value});
  }
  getIntro(){
    let TOKEN = "abcdefghijklmnopqrstuvwxyz"; //ur gonna want to access ur redux store for this
    let headers = {
      'Authorization': `Bearer ${TOKEN}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br'
    }
    let config = {
      headers: headers
    }
    axios.get(`http://b25d490fedad.ngrok.io/api/v1/simulation/${this.state.sim_id}/introduction`, config).then(res => {
      // let data = res.data;
      // this.setState({...data});
      // debugger;
      this.setState({sim_desc: res.data.summary});
    })
  }
  render() {
    let drafts = this.state.drafts.map(draft => {
          return <li key={draft.simulation_id}>Draft id: {draft.simulation_id}, introduction: {draft.introduction}</li>;
        });
    return <div>
    {/*}<input ref={node=>this.node = node} placeholder="age" />
    <button onClick={this.onsubmitage}>Submit Age</button>
    <input ref={node2=>this.node2 = node2} placeholder="name" />
    <button onClick={this.onsubmitname}>Submit Name</button>
          */}
          <button onClick={this.loadDashboard}>Click me!</button>
          {drafts}
          <input ref={node=>this.node = node} onChange={this.onChange} placeholder="Simulation Id" />
          <button onClick={this.getIntro}>Get Intro!</button>
          <div>{this.state.sim_desc
            ?
              this.state.sim_desc
            :
          ""}</div>
          </div>;
  }
}

export default Main;
