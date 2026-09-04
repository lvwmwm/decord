// Module ID: 17608
// Function ID: 17609
// Name: useIsMFAEnabled
// Dependencies: [8994, 1921, 673, 644, 2]
// Exports: useIsMFAEnabled

// Module 17608 (useIsMFAEnabled)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 644 */;
import closure_2 from "handleFormInit" /* 8994 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;
import { MFALevels } from "ME" /* 673 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx");

export const useIsMFAEnabled = function useIsMFAEnabled() {
  let obj = defaultAreStatesEqual;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [closure_2];
  let mfaEnabled;
  const stateFromStores1 = defaultAreStatesEqual.useStateFromStores(items1, () => props.getProps().mfaLevel);
  if (stateFromStores != null) {
    mfaEnabled = stateFromStores.mfaEnabled;
  }
  obj = { isUserMFAEnabled: true === mfaEnabled, isModerationMFAEnabled: stateFromStores1 === MFALevels.ELEVATED };
  return obj;
};
