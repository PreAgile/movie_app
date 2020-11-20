import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  getMovies = async () => {
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
  };
  componentDidMount() {
    let { isLoading } = this.state;
    this.getMovies();
    isLoading = false;
  }
  state = {
    isLoading: true,
  };
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'READY!'}</div>;
  }
}

export default App;
