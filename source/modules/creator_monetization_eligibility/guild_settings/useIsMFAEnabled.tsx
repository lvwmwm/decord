// Module ID: 16430
// Function ID: 128166
// Name: useIsMFAEnabled
// Dependencies: [8483, 1849, 653, 624, 2]
// Exports: useIsMFAEnabled

// Module 16430 (useIsMFAEnabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { MFALevels } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx");

export const useIsMFAEnabled = function useIsMFAEnabled() {
  let mfaEnabled;
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getCurrentUser());
  const items1 = [_isNativeReflectConstruct];
  obj = {};
  const stateFromStores1 = require(624) /* defaultAreStatesEqual */.useStateFromStores(items1, () => outer1_2.getProps().mfaLevel);
  if (null != stateFromStores) {
    mfaEnabled = stateFromStores.mfaEnabled;
  }
  obj.isUserMFAEnabled = true === mfaEnabled;
  obj.isModerationMFAEnabled = stateFromStores1 === MFALevels.ELEVATED;
  return obj;
};
