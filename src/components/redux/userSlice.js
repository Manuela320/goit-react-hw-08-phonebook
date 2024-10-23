import { createSlice } from '@reduxjs/toolkit';

// Definim slice-ul pentru utilizator
const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => action.payload,  
    logoutUser: () => null,  
  },
});

// Exportăm acțiunile și reducer-ul
export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;