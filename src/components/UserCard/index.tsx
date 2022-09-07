import { UserCardProps } from "./type";
import { Box, Divider, Stack, IconButton } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { sx } from './style';

const UserCard = ({
  user
}: UserCardProps) => {
  return (
    <Box sx={sx.root}>
      <Box sx={sx.imgContainer}>
        <img src={`https://avatars.dicebear.com/v2/avataaars/${user?.username}.svg?options[mood][]=happy`} />
      </Box>
      <Box sx={sx.userDetail}>
        <Box>{user?.name}</Box>
        <Box><MailOutlineIcon sx={sx.icon} /> {user?.email}</Box>
        <Box><PhoneIcon sx={sx.icon} /> {user?.phone}</Box>
        <Box><LanguageIcon sx={sx.icon} /> {user?.website}</Box>
      </Box>
      <Stack
        divider={<Divider orientation="vertical" flexItem />}
        sx={sx.buttons}
      >
        <IconButton sx={sx.loveIcon}>
          <FavoriteBorderIcon/>
        </IconButton>
        <IconButton>
          <BorderColorIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Box>
  )
};

export default UserCard;