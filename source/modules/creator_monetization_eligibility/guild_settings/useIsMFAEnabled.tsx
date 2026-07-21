// Module ID: 16258
// Function ID: 125626
// Name: useIsMFAEnabled
// Dependencies: []
// Exports: useIsMFAEnabled

// Module 16258 (useIsMFAEnabled)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const MFALevels = arg1(dependencyMap[2]).MFALevels;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx");

export const useIsMFAEnabled = function useIsMFAEnabled() {
  let mfaEnabled;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [closure_2];
  obj = {};
  const stateFromStores1 = arg1(dependencyMap[3]).useStateFromStores(items1, () => props.getProps().mfaLevel);
  if (null != stateFromStores) {
    mfaEnabled = stateFromStores.mfaEnabled;
  }
  obj.isUserMFAEnabled = true === mfaEnabled;
  obj.isModerationMFAEnabled = stateFromStores1 === MFALevels.ELEVATED;
  return obj;
};
