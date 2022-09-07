import { useEffect, useState } from "react";
import { TUsers } from "./type";
import { getUsers } from './service';
import { Box, Grid } from '@mui/material';
import UserCard from '../../components/UserCard';
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
      <h1>React Typescript Users</h1>
      <Grid container spacing={2}>
        {users.map(user => (
          <Grid key={user.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
};

export default Homepage;