import React, { Component } from 'react';
import Card from '../Card/Card';
import axios from 'axios';
import socket from 'socket.io-client';
import './List.scss';

class List extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    this.fetchUnderstandings();
    this.io = socket(`http://127.0.0.1:8001`);
    this.io.on('update', (data) => {
      let { posts } = this.state;
      posts.push({
        understanding: data.understanding
      });
      this.setState({ posts });
    });
  }
  fetchUnderstandings = () => {
    axios.get('/understandings')
      .then((res) => {
        this.setState({
          posts: res.data
        });
      })
  }
  render() {
    const cards = this.state.posts.map((post, index) => {
      return <Card description={post.understanding} key={index} index={index} />
    });
    return (
      <div className='card-list'>
        <div className="card-columns">
          {cards}
        </div>
      </div>
    )
  }
}
export default List;