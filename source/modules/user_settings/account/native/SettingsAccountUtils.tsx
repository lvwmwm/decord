// Module ID: 13648
// Function ID: 104828
// Name: useIs2FAEnabled
// Dependencies: [1194, 1849, 624, 2]
// Exports: useIs2FAEnabled, useIsTOTPEnabled, useIsUserVerified

// Module 13648 (useIs2FAEnabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/user_settings/account/native/SettingsAccountUtils.tsx");

export const useIs2FAEnabled = function useIs2FAEnabled() {
  const items = [closure_3];
  return require(624) /* defaultAreStatesEqual */.useStateFromStores(items, () => {
    const currentUser = outer1_3.getCurrentUser();
    let mfaEnabled;
    if (null != currentUser) {
      mfaEnabled = currentUser.mfaEnabled;
    }
    return null != mfaEnabled && mfaEnabled;
  });
};
export const useIsTOTPEnabled = function useIsTOTPEnabled() {
  const items = [_isNativeReflectConstruct];
  return require(624) /* defaultAreStatesEqual */.useStateFromStores(items, () => outer1_2.hasTOTPEnabled());
};
export const useIsUserVerified = function useIsUserVerified() {
  const items = [closure_3];
  return require(624) /* defaultAreStatesEqual */.useStateFromStores(items, () => {
    const currentUser = outer1_3.getCurrentUser();
    let verified;
    if (null != currentUser) {
      verified = currentUser.verified;
    }
    return null != verified && verified;
  });
};
