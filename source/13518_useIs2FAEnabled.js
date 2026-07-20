// Module ID: 13518
// Function ID: 102594
// Name: useIs2FAEnabled
// Dependencies: []
// Exports: useIs2FAEnabled, useIsTOTPEnabled, useIsUserVerified

// Module 13518 (useIs2FAEnabled)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/user_settings/account/native/SettingsAccountUtils.tsx");

export const useIs2FAEnabled = function useIs2FAEnabled() {
  const items = [closure_3];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let mfaEnabled;
    if (null != currentUser) {
      mfaEnabled = currentUser.mfaEnabled;
    }
    return null != mfaEnabled && mfaEnabled;
  });
};
export const useIsTOTPEnabled = function useIsTOTPEnabled() {
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => closure_2.hasTOTPEnabled());
};
export const useIsUserVerified = function useIsUserVerified() {
  const items = [closure_3];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let verified;
    if (null != currentUser) {
      verified = currentUser.verified;
    }
    return null != verified && verified;
  });
};
