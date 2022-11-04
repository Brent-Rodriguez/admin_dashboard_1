import React from 'react'

import './Sidebar.scss'
import ExploreIcon from '@mui/icons-material/Explore';
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ApartmentIcon from '@mui/icons-material/Apartment';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <ExploreIcon className='icon' />
        <span className='logo'>Exodus Admin</span>
      </div>
      <hr/>
      <div className='center'>
        <ul>
          <p className='title'> Main</p>
          <li>
          <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className='title'> List</p>
          <li>
          <GroupIcon className='icon'/>
            <span>Users</span>
          </li>
          <li>
          <FlightTakeoffIcon className='icon'/>
            <span>Traveled</span>
          </li>
          <li>
          <ApartmentIcon className='icon'/>
            <span>Dorms</span>
          </li>
          <p className='title'>Reports</p>
          <li>
          <QueryStatsOutlinedIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
          <NotificationsActiveIcon className='icon'/>
            <span>Notifications</span>
          </li>

          <p className='title'> System</p>
          <li>
          <MonitorHeartIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
          <WebStoriesIcon className='icon'/>
            <span>Reports</span>
          </li>
          <li>
          <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li>
          <li>
          <AccountCircleIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
          <LogoutOutlinedIcon className='icon'/>
            <span>Logout</span>
          </li>

        </ul>
      </div>
      <div className='bottom'>
      </div>
    </div>
  )
}

export default Sidebar