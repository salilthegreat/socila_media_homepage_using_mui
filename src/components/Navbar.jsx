import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({ //custom toolbar created  using mui Toolbar component
  display: "flex",
  justifyContent: "space-between",
})

const Search = styled("div")(({ theme }) => ({ //custom component using html component
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: "white"
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { //using theme we can set breakpoint like this,it will be display:flex if the screensize is sm and above
    display: "flex"
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false); //useState hook to open/close our Menu component
  return (
    <AppBar position='sticky'>  {/* AppBar is like navbar and toolbar gives some padding */}
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>SOCIAL</Typography> {/*Name will be diplayed after sm breakpoint only */}
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} /> {/*  icon will be displayed at xs breakpoint only */}
        <Search><InputBase placeholder='search...' /></Search> {/*  Inputbase is used as input */}
        <Icons>
          <Badge badgeContent={4} color="error"> {/* badges to show the number on top of element */}
            <MailIcon /> {/* icons */}
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src='https://images.pexels.com/photos/4153629/pexels-photo-4153629.jpeg?auto=compress&cs=tinysrgb&w=800' onClick={e => setOpen(true)} /> {/* profile pic rounded */}
        </Icons>
         <UserBox onClick={e => setOpen(true)}> {/*onClick event is set so that when clicking state will change and menu will be opened */}
          <Avatar sx={{ width: 30, height: 30 }} src='https://images.pexels.com/photos/4153629/pexels-photo-4153629.jpeg?auto=compress&cs=tinysrgb&w=800' /> 
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open} //first the basic state is set here, every change elsewhere will be reflected here
        onClose={e=>setOpen(false)} //anywhere else w click it will change the state and close the menu
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar