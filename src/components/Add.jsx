import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import DateRangeIcon from '@mui/icons-material/DateRange';


const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip onClick={e => setOpen(true)} title="AddPost" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50%)", md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant='h6' color={"gray"} textAlign={"center"}>Create Post</Typography>
                    <UserBox>
                        <Avatar src='https://images.pexels.com/photos/4107121/pexels-photo-4107121.jpeg?auto=compress&cs=tinysrgb&w=800'>
                        </Avatar>
                        <Typography fontWeight={500} variant='span'>John Doe</Typography>
                    </UserBox>
                    <TextField sx={{ width: "100%" }} id="standard-multiline-static" multiline rows={3} placeholder="What's on your mind?"
                        variant="standard"
                    // label="Multiline"
                    // defaultValue="Default Value"
                    />
                    <Stack direction={"row"} gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color='warning' />
                        <ImageIcon color='success' />
                        <VideoCallIcon color='error' />
                        <PersonAddAltIcon color='primary' />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}><DateRangeIcon/></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add