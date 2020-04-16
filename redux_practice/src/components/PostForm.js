import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from './store/actions/actions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ' ',
      body: ' ',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.createPost(post);
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(post),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.props.title}
            ></input>
          </div>
          <br />
          <div>
            <label>Body:</label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.props.body}
            ></textarea>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes ={
    createPost: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.items,
  };
};
// const mapDispatcherToProps = (dispatch) => {
//   return {
//     updateList: () => {
//       dispatch(actions.updateThunk());
//     },
//   };
// };

export default connect(mapStateToProps, { createPost })(PostForm);

//export default PostForm;
