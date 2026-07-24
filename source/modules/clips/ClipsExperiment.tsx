// Module ID: 4189
// Function ID: 36053
// Name: isUserPremiumTypeForClipsEarlyAccess
// Dependencies: [4177, 1849, 1851, 1428, 4190, 566, 3776, 2]
// Exports: areClipsAvailable, isScreenshotKeybindEnabled, useIsClipsAvailable, useScreenshotKeybindEnabled

// Module 4189 (isUserPremiumTypeForClipsEarlyAccess)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";
import ApexExperiment from "ApexExperiment";

const require = arg1;
function isUserPremiumTypeForClipsEarlyAccess(currentUser) {
  let premiumType;
  if (null != currentUser) {
    premiumType = currentUser.premiumType;
  }
  return importDefault(3776).isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
}
ApexExperiment = { kind: "user", name: "2026-03-clips-experiment", defaultConfig: { enableClips: false, ignorePlatformRestriction: false }, variations: { [1]: { enableClips: true, ignorePlatformRestriction: false }, [2]: { enableClips: true, ignorePlatformRestriction: true } } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const result = require("GuildFeatures").fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

export const ClipsExperiment = ApexExperiment;
export const areClipsAvailable = function areClipsAvailable() {
  if (importDefault(4190)(_isNativeReflectConstruct)) {
    let enableClips = isUserPremiumTypeForClipsEarlyAccess(currentUser.getCurrentUser());
    const obj = { location: "areClipsEnabled" };
    if (!enableClips) {
      enableClips = ApexExperiment.getConfig(obj).enableClips;
    }
    return enableClips;
  } else {
    return false;
  }
};
export const useIsClipsAvailable = function useIsClipsAvailable() {
  const tmp = importDefault(4190)(_isNativeReflectConstruct);
  const items = [closure_4];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_7(outer1_4.getCurrentUser()));
  const obj = require(566) /* initialize */;
  return (ApexExperiment.getConfig({ location: "useEnableClips" }).enableClips || stateFromStores) && tmp;
};
export { isUserPremiumTypeForClipsEarlyAccess };
export function isScreenshotKeybindEnabled() {
  return false;
}
export function useScreenshotKeybindEnabled() {
  return false;
}
