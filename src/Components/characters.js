import {callGetApi} from './apis';

// STUB GET
export const charactersCall = () => {
    return callGetApi('Characters?count=20');
  };
  export const getCharacterByName = () => {
    return callGetApi('Characters/by/')
  }