import { useMutation } from 'react-query'
import qs from 'qs'

import { LoginData } from '../pages/login'
import { User } from './User'
import client from '../shared/axios'
import { ParkingCarResp } from '../models/response/ParkingCarResp'

export interface SignInResp extends ParkingCarResp {
    info: User;
  }

const signIn = (account: LoginData) => client.post('/login', qs.stringify(account));

export const useSignInMutation = () => useMutation(signIn);