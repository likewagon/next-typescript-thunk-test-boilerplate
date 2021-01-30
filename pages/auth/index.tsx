// #region Global Imports
import React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { AuthActions } from "@Actions";
// #endregion Local Imports

// #region Interface Imports
import { ReduxNextPageContext, IAuth } from "@Interfaces";
// #endregion Interface Imports

export const Auth: NextPage<
    IAuth.IProps,
    IAuth.InitialProps
> = ({ t, i18n }) => {
    const auth = useSelector((state: IStore) => state.auth);
    const dispatch = useDispatch();

    return (
        <section id="auth">
            Auth Page
        </section>
    );
};

Auth.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IAuth.InitialProps> => {

    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(Auth);
