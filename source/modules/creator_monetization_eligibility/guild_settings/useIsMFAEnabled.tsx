// Module ID: 16689
// Function ID: 16690
// Name: useIsMFAEnabled
// Dependencies: [8962, 1903, 676, 647, 2]
// Exports: useIsMFAEnabled

// Module 16689 (useIsMFAEnabled)
import handleFormInit from "handleFormInit";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MFALevels } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx");

export const useIsMFAEnabled = function useIsMFAEnabled() {
  let obj = require(647) /* defaultAreStatesEqual */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [handleFormInit];
  let mfaEnabled;
  const stateFromStores1 = require(647) /* defaultAreStatesEqual */.useStateFromStores(items1, () => props.getProps().mfaLevel);
  if (stateFromStores != null) {
    mfaEnabled = stateFromStores.mfaEnabled;
  }
  obj = { isUserMFAEnabled: true === mfaEnabled, isModerationMFAEnabled: stateFromStores1 === MFALevels.ELEVATED };
  return obj;
};
