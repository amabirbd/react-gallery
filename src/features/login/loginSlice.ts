import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoginState{
  isAuthenticated: boolean;
}

const initialState: LoginState = {
  isAuthenticated: false
}

interface LoginCred {
  username: string;
  password: string;
}

export const loginSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginCred>) => {

      const {username, password} = action.payload

      if (username === "admin" && password === "Test12345"){
        state.isAuthenticated = true;
      }
    },
    
  },
})

export const { login } = loginSlice.actions;

export default loginSlice.reducer;