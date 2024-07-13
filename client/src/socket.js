import { io } from 'socket.io-client';

const URL = 'https://euphotic-assignment.onrender.com';

export const socket = io(URL);