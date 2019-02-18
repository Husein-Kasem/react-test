import React, { Component } from "react";
import axios from "axios";
//import { Link } from "react-router-dom"

import Preloader from "./Preloader";

//import Pokeball from "../images/pokeball.png"

class Home extends Component {
  state = {
    posts: [],
    ms1: "",
    ms2: "",
    gateway: ""
  };

  componentDidMount() {
    // axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
    //   this.setState({
    //     posts: res.data.slice(0, 15)
    //   })
    // })
    axios.get("http://localhost:8080/ms1/conf").then(res => {
      this.setState({
        ms1: res.data
      });
    });

    axios.get("http://localhost:8080/ms2/conf").then(res => {
      this.setState({
        ms2: res.data
      });
    });

    axios.get("http://localhost:8080/conf").then(res => {
      this.setState({
        gateway: res.data
      });
    });
  }

  render() {
    //   const { posts } = this.state
    //   let postList = null
    //   if (posts.length) {
    //     postList = posts.map(post => {
    //       return (
    //         <div className="post card" key={post.id}>
    //           <img src={Pokeball} alt="A pokeball" />
    //           <div className="card-content">
    //             <Link to={"/posts/" + post.id}>
    //               <span className="card-title red-text">{post.title}</span>
    //             </Link>
    //             <p>{post.body}</p>
    //           </div>
    //         </div>
    //       )
    //     })
    //   } else {
    //     postList = <Preloader />
    //   }

    //   return (
    //     <div className="container home">
    //       <h4 className="center">Home</h4>
    //       {postList}
    //     </div>
    //   )
    // }

    const { ms1, ms2, gateway } = this.state;
    let postList = null;
    if (ms1 && ms2 && gateway) {
      return (
        <div>
          <div className="post card" key={1}>
            <div className="card-content">
              <span className="card-title red-text">
                Response from MS1 => {ms1}
              </span>
            </div>
          </div>
          <div className="post card" key={2}>
            <div className="card-content">
              <span className="card-title red-text">
                Response from MS2 => {ms2}
              </span>
            </div>
          </div>
          <div className="post card" key={3}>
            <div className="card-content">
              <span className="card-title red-text">
                Response from Gateway => {gateway}
              </span>
            </div>
          </div>
        </div>
      );
    } else {
      postList = <Preloader />;
    }

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
