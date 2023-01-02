import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import "./Navbar.css"

export default function Navbar() {
  let userId = 2;

  return (
    <div>
 
 <Menu inverted size='huge' className='menu'>
        <Menu.Item
        name='CagriMedia'/>

        
        <Menu.Item
          name='home'>
          <Link to="/">Home</Link>
          </Menu.Item>
        <Menu.Item
          name='messages'>
        <Link to={"/users/" + userId}> User </Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Dropdown item text='dene'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  )
}
