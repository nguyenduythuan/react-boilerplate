import React from 'react';

import Table from '../../components/Table';

class SimpleTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios.get("https://18zomq9m3.sse.codesandbox.io/users") 
      	.then(response => {
        	this.setState({ users: response.data });
      	})
		.catch(err => console.log(err));
  } 
  render(){
    return (
      <Table dataUser ={this.state.users}/>
    );
  }
}
export default SimpleTable;