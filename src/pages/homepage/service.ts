import axios from 'axios';
import { TUsers } from "./type";

export const getUsers = () => axios.get<TUsers>('https://jsonplaceholder.typicode.com/users');