// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const AuthActions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.Auth.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.Auth.ResetReducer
    })
};
