import axios from "axios";
import { Dispatch } from "react";
import { Double } from "react-native/Libraries/Types/CodegenTypes";

export interface NestModel {
    StoreId: number;
    StoreName: string;
    Latitude: number;
    Longitude: number;
}

export interface SetNestAction {
    readonly type: "ON_SET_NEST";
    payload: any
}

export type NestAction = SetNestAction;

export const getKeyNestList = () => {
    return async (dispatch: Dispatch<NestAction>) => {
        try {

            let response = await axios.post('https://appkeynesttest.azurewebsites.net/api/Store/GetNearestStore',{
                Latitude:"51.5025",
                Longitude:"-0.1414",
                Limit:"20",
                Radius:"20",
                SearchText:""
            }, {
                headers: {
                  'Content-Type': 'application/json',
                  'apiVersion': 2.0,
                  'UniqueId': '253d70e1011a2a52',
                  'AppVersion': '3.8'
                }
              });
            if (!response) {
                console.log("something wrong")
            }
            else {
                dispatch({ type: "ON_SET_NEST", payload: response.data }) 
            }
        } catch (error) {
            console.log(error)
        }
    }
}



