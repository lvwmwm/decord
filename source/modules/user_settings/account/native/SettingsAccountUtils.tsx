// Module ID: 14102
// Function ID: 14103
// Name: useIs2FAEnabled
// Dependencies: [1218, 1922, 647, 2]
// Exports: useIs2FAEnabled, useIsTOTPEnabled, useIsUserVerified

// Module 14102 (useIs2FAEnabled)
import fetchFingerprint from "fetchFingerprint";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/user_settings/account/native/SettingsAccountUtils.tsx");

export const useIs2FAEnabled = function useIs2FAEnabled() {
  const items = [mergeGuildAvatar];
  return require(647) /* defaultAreStatesEqual */.useStateFromStores(items, () => {
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
  const items = [fetchFingerprint];
  return require(647) /* defaultAreStatesEqual */.useStateFromStores(items, () => fetchFingerprint.hasTOTPEnabled());
};
export const useIsUserVerified = function useIsUserVerified() {
  const items = [mergeGuildAvatar];
  return require(647) /* defaultAreStatesEqual */.useStateFromStores(items, () => {
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
