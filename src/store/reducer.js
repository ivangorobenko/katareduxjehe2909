import {CREATE_APPLICATION_NAME} from "./actions";

const initialState = {applicationName: ""};

export const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case(CREATE_APPLICATION_NAME):
            return {...state, applicationName: action.data};
        default:
            return {...state};
    }
}

export const applicationSelector = (state) => state.applicationName;