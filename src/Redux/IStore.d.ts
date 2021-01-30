// #region Interface Imports
import { IHomePage, IAuth } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    auth: IAuth.IStateProps;
    home: IHomePage.IStateProps;
}
