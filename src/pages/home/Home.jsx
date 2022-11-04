import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Widget } from '../../components/widget/Widget'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user'/>
          <Widget type='travel'/>
          <Widget type='return_travel'/>
          <Widget type='dorms'/>
        </div>
      </div>
    </div>
  )
}

export default Home