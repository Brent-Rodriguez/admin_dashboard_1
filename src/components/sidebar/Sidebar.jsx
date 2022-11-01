import React from 'react'

import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import WebStoriesOutlinedIcon from '@mui/icons-material/WebStoriesOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
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
          <PeopleOutlineIcon className='icon'/>
            <span>Users</span>
          </li>
          <li>
          <LocalGroceryStoreOutlinedIcon className='icon'/>
            <span>Products</span>
          </li>
          <li>
          <CreditCardOutlinedIcon className='icon'/>
            <span>Orders</span>
          </li>
          <li>
          <LocalShippingOutlinedIcon className='icon'/>
            <span>Delivery</span>
          </li>

          <p className='title'>Links</p>
          <li>
          <QueryStatsOutlinedIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
          <NotificationsActiveOutlinedIcon className='icon'/>
            <span>Notifications</span>
          </li>

          <p className='title'> System</p>
          <li>
          <MonitorHeartOutlinedIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
          <WebStoriesOutlinedIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
          <SettingsOutlinedIcon className='icon'/>
            <span>Settings</span>
          </li>
          <li>
          <AccountCircleOutlinedIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
          <LogoutOutlinedIcon className='icon'/>
            <span>Logout</span>
          </li>

        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  )
}

export default Sidebar