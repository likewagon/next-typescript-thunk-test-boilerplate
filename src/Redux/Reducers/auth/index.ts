// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IAuth } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: IAuth.IStateProps = { };

type IMapPayload = IAuth.Actions.IMapPayload;

export const AuthReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.Auth.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.Auth.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
