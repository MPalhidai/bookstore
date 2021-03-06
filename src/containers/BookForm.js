import React from 'react';
import '../css/Form.css';

import { connect } from 'react-redux';
import { addBook } from '../actions/async';
import { initialState } from '../actions/constants'

class BookForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      category: 'Action',
      current_page: '',
      current_chapter: '',
      total_pages: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOptions = event => {
    // prevent book category from being 'All'
    this.setState({
      category: event.target.value
    });
  }

  handleSubmit = event => {
    // prevent an empty title
    // prevent reuse of id and duplicates
    event.preventDefault();
    this.props.addBook(this.state);
    this.setState({
      title: '',
      author: '',
      category: 'Action',
      current_page: '',
      current_chapter: '',
      total_pages: ''
    });
  }

  render() {
    return (
      <form className = 'Form'>
        <p className = 'formHeader'>ADD NEW BOOK <span className = 'formHeaderSub'>* all fields required</span></p>
        <div className = 'flexDiv row'>
          <input className = 'bookFormInput' type = 'text' name = 'title' value = { this.state.title } onChange = { this.handleChange } placeholder = 'Book title'/>
          <select className = 'formSelector' name = 'categories' onChange = { this.handleOptions } value = { this.state.category }>
            { initialState.filters.map( (category, idx) => (
              <option value = { category } key = { idx }>{ category }</option>
            ))}
          </select>
          <button className = 'formBtn' onClick = { this.handleSubmit }>
            Add Book
          </button>
        </div>
        <div className = 'flexDiv'>
          <input className = 'bookFormValue' type = 'text' name = 'author' value = { this.state.author } onChange = { this.handleChange } placeholder = 'Author'/>
          <input className = 'bookFormValue' type = 'number' name = 'total_pages' value = { this.state.total_pages } onChange = { this.handleChange } placeholder = 'Total Pages'/>
          <input className = 'bookFormValue' type = 'number' name = 'current_page' value = { this.state.current_page } onChange = { this.handleChange } placeholder = 'Current Page'/>
          <input className = 'bookFormValue' type = 'text' name = 'current_chapter' value = { this.state.current_chapter } onChange = { this.handleChange } placeholder = 'Current Chapter'/>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addBook
}

export default connect(null, mapDispatchToProps)(BookForm)
