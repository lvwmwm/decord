// Module ID: 14242
// Function ID: 14243
// Name: SettingsAccountUtils
// Dependencies: [502, 1372, 563, 2]
// Exports: useIs2FAEnabled, useIsTOTPEnabled, useIsUserVerified

// Module 14242 (SettingsAccountUtils)
import useStateFromStores from "useStateFromStores" /* 563 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

let currentUser;

const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountUtils.tsx");

export const useIs2FAEnabled = function useIs2FAEnabled() {
  const items = [UserStore];
  const obj = useStateFromStores;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.mfaEnabled;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
};
export const useIsTOTPEnabled = function useIsTOTPEnabled() {
  const items = [AuthenticationStore];
  const obj = useStateFromStores;
  return obj.useStateFromStores(items, () => AuthenticationStore.hasTOTPEnabled());
};
export const useIsUserVerified = function useIsUserVerified() {
  const items = [UserStore];
  const obj = useStateFromStores;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.verified;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
};
