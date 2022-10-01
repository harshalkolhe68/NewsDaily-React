import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} style={{width: '300px' , height: '200px'}} className='my-3' alt="loading" />
      </div>
    )
  }
}
