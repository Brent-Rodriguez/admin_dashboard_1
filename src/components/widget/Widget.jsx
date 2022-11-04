import React from 'react'
import './Widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonIcon from '@mui/icons-material/Person'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ApartmentIcon from '@mui/icons-material/Apartment';

import FlightLandIcon from '@mui/icons-material/FlightLand';



export const Widget = ({ type }) => {

  let data;

  // Temporary Data
  const traveled = 1000
  const diff = 20

  switch (type) {
    case 'user':
      data = {
        title: "Users",
        isMoney: false,
        link: "See all users",
        icon: (
        <PersonIcon 
        className='icon' 
        style={{
          backgroundColor: "rgba(255, 0, 0, 0.2)",
          color: "crimson",
        }}
        />),
      }
      break
    case 'travel':
      data = {
        title: "Traveled",
        isMoney: false,
        link: "View all Travelers",
        icon: (
        <FlightTakeoffIcon
        className='icon' 
        style={{
          backgroundColor: "rgba(218, 165, 32, 0.2)",
          color: "goldenrod",
        }}
        />),
      }
      break
    case 'return_travel':
      data = {
        title: "Return Travel",
        isMoney: true,
        link: "View Late Travelers",
        icon: (
        <FlightLandIcon 
        className='icon' 
        style={{
          backgroundColor: "rgba(0, 128, 0, 0.2)",
          color: "green",
        }}
        />),
      }
      break
    case 'dorms':
      data = {
        title: "Dorm",
        isMoney: true,
        link: "See all Dorm Residence",
        icon: (<ApartmentIcon
         className='icon' 
         style={{
          backgroundColor: "rgba(128, 0, 128, 0.2)",
          color: "purple",
        }}
         />),
      }
      break
    default:
      break;
  }
   


  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{traveled}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}
