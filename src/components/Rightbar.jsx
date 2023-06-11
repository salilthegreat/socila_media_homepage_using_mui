import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box  flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}> {/*flex with 2 portion length and displayed only when it reaches sm breakpoint */}
      <Box position={"fixed"} width={300}>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Online Friends</Typography>
        <AvatarGroup max={7}> {/* AvatarGroup is used to gruop a set of avatar and set the limit using max so rest are not shown but the number of left are written in numbers */}
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=800" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=800" />
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/4270224/pexels-photo-4270224.jpeg?auto=compress&cs=tinysrgb&w=800" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/3781545/pexels-photo-3781545.jpeg?auto=compress&cs=tinysrgb&w=800" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1572878/pexels-photo-1572878.jpeg?auto=compress&cs=tinysrgb&w=800" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/4058703/pexels-photo-4058703.jpeg?auto=compress&cs=tinysrgb&w=800" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/132589/pexels-photo-132589.png?auto=compress&cs=tinysrgb&w=800" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/7322519/pexels-photo-7322519.jpeg?auto=compress&cs=tinysrgb&w=800" />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Posts
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/7322519/pexels-photo-7322519.jpeg?auto=compress&cs=tinysrgb&w=800" alt="mobile" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/3781545/pexels-photo-3781545.jpeg?auto=compress&cs=tinysrgb&w=800" alt="mobile" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/132589/pexels-photo-132589.png?auto=compress&cs=tinysrgb&w=800" alt="mobile" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/4058703/pexels-photo-4058703.jpeg?auto=compress&cs=tinysrgb&w=800" alt="mobile" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=800" alt="mobile" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/4270224/pexels-photo-4270224.jpeg?auto=compress&cs=tinysrgb&w=800" alt="mobile" />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=800" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/4270224/pexels-photo-4270224.jpeg?auto=compress&cs=tinysrgb&w=800" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/7322519/pexels-photo-7322519.jpeg?auto=compress&cs=tinysrgb&w=800" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar