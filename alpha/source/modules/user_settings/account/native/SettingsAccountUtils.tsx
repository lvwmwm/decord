// Module ID: 16570
// Function ID: 16571
// Name: SettingsAccountUtils
// Dependencies: [502, 1383, 563, 2]
// Exports: useIs2FAEnabled, useIsTOTPEnabled, useIsUserVerified

// Module 16570 (SettingsAccountUtils)
import useStateFromStores from "useStateFromStores" /* 563 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

let currentUser;

const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountUtils.tsx");

export function useIs2FAEnabled() {
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
}
export function useIsTOTPEnabled() {
  const items = [AuthenticationStore];
  const obj = useStateFromStores;
  return obj.useStateFromStores(items, () => AuthenticationStore.hasTOTPEnabled());
}
export function useIsUserVerified() {
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
}
