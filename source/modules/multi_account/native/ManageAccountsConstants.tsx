// Module ID: 14980
// Function ID: 112786
// Name: ManageAccountsScreens
// Dependencies: []

// Module 14980 (ManageAccountsScreens)
const AuthStates = require(dependencyMap[0]).AuthStates;
const LOGIN = AuthStates.LOGIN;
const ACCOUNT_DISABLED_OR_DELETION_SCHEDULED = AuthStates.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED;
const MFA = AuthStates.MFA;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/multi_account/native/ManageAccountsConstants.tsx");

export const ManageAccountsScreens = { MANAGE_ACCOUNTS: "MANAGE_ACCOUNTS", LOGIN, [LOGIN]: "LOGIN", ACCOUNT_DISABLED_OR_DELETION_SCHEDULED, [ACCOUNT_DISABLED_OR_DELETION_SCHEDULED]: "ACCOUNT_DISABLED_OR_DELETION_SCHEDULED", MFA, [MFA]: "MFA" };
