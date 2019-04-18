import React, { Component } from 'react';
import { Link } from "react-router-dom"

import axios from "axios"

export default class ClassList extends Component {
  constructor() {
    super()

    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`) // see notes in routes about this.props.match.params.class
      .then(res => {
        this.setState({
          students: res.data
        })
      })
      .catch(err => {
        console.log(`ClassList GET error ${err}`)
      })
  }

  render() {

    let studentList = this.state.students.map((student, index) => {
      return <Link key={index} to={`/student/${student.id}`}>
        <h3>{student.first_name} {student.last_name}</h3>
      </Link>
    })

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {studentList}
      </div>
    )
  }
}
