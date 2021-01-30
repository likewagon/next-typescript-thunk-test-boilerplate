// #region Local Imports
import { IAction, IAuth } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { AuthReducer } from ".";
// #endregion Local Imports

describe("Auth reducer", () => {
    it("should return the initial state", () => {
        expect(AuthReducer(
            undefined,
            {} as IAction<IAuth.IStateProps>)
        ).toEqual({});
    });
});
