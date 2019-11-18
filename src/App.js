import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
          error: null,
          isLoaded: false,
          items: [],
          flag:0
        };
  }

  MyGETAPI=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response)
      // alert(response)
      this.setState({isLoaded:true,
                      items:response.data,
                      flag:1
                    })
    })
    .catch(error => {
      alert("error");
      console.log(error);
    })
  }

MyPOSTAPI=()=>{
  console.log('Console Testing');
  var dict = { title: 'foo', body: 'bar', userId: 1 };
  axios.post('https://jsonplaceholder.typicode.com/posts',dict)
  .then(response => {
    console.log(response)
    this.setState({isLoaded:true,
                    flag:2
                  })
  })
  .catch(error => {
    alert(error);
    console.log(error);
  })

}

  render() {

    const { error, isLoaded, items } = this.state;

    if (this.state.flag==1){

    return(
      <div>

      <button onClick={this.MyGETAPI}>
      GET API CALL
      </button>

      <button onClick={this.MyPOSTAPI}>
      POST API CALL
      </button>

      <h1> GET API RESULTS AFTER BUTTON CLICK </h1>

      <ul>
           {items.map(item => (
             <li key={item.name}>
               {item.id} {item.title}
             </li>
           ))}
      </ul>

      </div>

      );


    }else if (this.state.flag==2){

      return(
      <div>
      <button onClick={this.MyGETAPI}>
      GET API CALL
      </button>

      <button onClick={this.MyPOSTAPI}>
      POST API CALL
      </button>

      <h1> Akhzar Post Request Submitted Successfully</h1>

      </div>

      );


    }else{

      return(
      <div>

      <button onClick={this.MyGETAPI}>
      GET API CALL
      </button>

      <button onClick={this.MyPOSTAPI}>
      POST API CALL
      </button>

      <h1> GET API RESULTS </h1>

      <ul>
           {items.map(item => (
             <li key={item.name}>
               {item.id} yes yes {item.body}
             </li>
           ))}
      </ul>

      </div>

      );

    }

  }

  componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response)
      // alert(response)
      this.setState({isLoaded:true,
                      items:response.data})
    })
    .catch(error => {
      alert("error");
      console.log(error);
    })


    // If you dont want to use third party axios you can use below code

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         this.setState({
    //           isLoaded: true,
    //           items: result
    //         });
    //       },
    //       (error) => {
    //         this.setState({
    //           isLoaded: true,
    //           error
    //         });
    //       }
    //     )

    }
}

export default App;
