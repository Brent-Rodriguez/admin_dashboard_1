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
          <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <p className='title'> List</p>
          <li>
          <PeopleOutlineIcon />
            <span>Users</span>
          </li>
          <li>
          <LocalGroceryStoreOutlinedIcon />
            <span>Products</span>
          </li>
          <li>
          <CreditCardOutlinedIcon />
            <span>Orders</span>
          </li>
          <li>
          <LocalShippingOutlinedIcon />
            <span>Delivery</span>
          </li>

          <p className='title'>Links</p>
          <li>
          <QueryStatsOutlinedIcon />
            <span>Stats</span>
          </li>
          <li>
          <NotificationsActiveOutlinedIcon />
            <span>Notifications</span>
          </li>

          <p className='title'> System</p>
          <li>
          <MonitorHeartOutlinedIcon />
            <span>System Health</span>
          </li>
          <li>
          <WebStoriesOutlinedIcon />
            <span>Logs</span>
          </li>
          <li>
          <SettingsOutlinedIcon />
            <span>Settings</span>
          </li>
          <li>
          <AccountCircleOutlinedIcon />
            <span>Profile</span>
          </li>
          <li>
          <LogoutOutlinedIcon />
            <span>Logout</span>
          </li>

        </ul>
      </div>
      <div className='bottom'>Color Options</div>
    </div>
  )
}

export default Sidebar