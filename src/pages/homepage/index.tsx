import { useEffect, useState } from "react";
import { TUsers } from "./type";
import { getUsers } from './service';
import { Box } from '@mui/material';
import { sx } from './style'; 

const Homepage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<TUsers>([]);

  useEffect(() => {
    getUsers().then(res => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <>Loading...</>

  return (
    <Box sx={sx.root}>
      <h3>React Typescript Users</h3>
      {users.map(user => (
        <Box>
          <img src={`https://avatars.dicebear.com/v2/avataaars/${user?.username}.svg?options[mood][]=happy`} />
        </Box>
      ))}
    </Box>
  )
};

export default Homepage;