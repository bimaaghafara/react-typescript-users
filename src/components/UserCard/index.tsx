import { UserCardProps } from "./type";
import { Box } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
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
    </Box>
  )
};

export default UserCard;