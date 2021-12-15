import axios from 'axios';
import {Config} from 'react-native-config';

export const callGetApi = apiEndPoint => {
    return axios({
      method: 'GET',
      data: body,
      headers: getAuthHeader(),
      url: config.API_URL + apiEndPoint,
    }).then(response => {
      return response.json;
    });
  };
  
  export const getAuthHeader = () => {
    try {
      const headers = {
        accept: application/json,
      };
      return headers;
    } catch (error) {
      return null;
    }
  };