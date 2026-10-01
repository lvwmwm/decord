// Module ID: 13219
// Function ID: 13220
// Name: ClipsExperiment
// Dependencies: [1993, 1372, 1374, 1435, 13220, 504, 4488, 2]
// Exports: areClipsAvailable, isScreenshotKeybindEnabled, isUserPremiumTypeForClipsEarlyAccess, useIsClipsAvailable, useScreenshotKeybindEnabled

// Module 13219 (ClipsExperiment)
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import isClientClipsCapableDefault from "isClientClipsCapable" /* 13220 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import UserStore from "UserStore" /* 1372 */;
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
const PremiumTypes = PremiumConstants.PremiumTypes;
let obj = { kind: "user", name: "2026-03-clips-experiment", defaultConfig: { enableClips: false, ignorePlatformRestriction: false }, variations: obj2 };
obj2 = { 1: null, 2: { enableClips: true, ignorePlatformRestriction: false } };
obj2[2] = { enableClips: true, ignorePlatformRestriction: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

export const ClipsExperiment = apexExperiment;
export const areClipsAvailable = function areClipsAvailable() {
  if (isClientClipsCapableDefault(MediaEngineStore)) {
    const currentUser = UserStore.getCurrentUser();
    let premiumType;
    const isPremiumAtLeast = tmp(4488).isPremiumAtLeast;
    PremiumUtilsDefault;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    const enableClips = isPremiumAtLeast(premiumType, PremiumTypes.TIER_2) || apexExperiment.getConfig({ location: "areClipsEnabled" }).enableClips;
    return enableClips;
  } else {
    return false;
  }
};
export const useIsClipsAvailable = function useIsClipsAvailable() {
  let TIER_2;
  const items = [UserStore];
  const tmp = isClientClipsCapableDefault(MediaEngineStore);
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    const isPremiumAtLeast = PremiumUtilsDefault.isPremiumAtLeast;
    PremiumUtilsDefault;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return isPremiumAtLeast(premiumType, TIER_2.TIER_2);
  });
  const tmp3 = (apexExperiment.getConfig({ location: "useEnableClips" }).enableClips || stateFromStores) && tmp;
  return tmp3;
};
export const isUserPremiumTypeForClipsEarlyAccess = function isUserPremiumTypeForClipsEarlyAccess(premiumType) {
  premiumType = undefined;
  const isPremiumAtLeast = PremiumUtilsDefault.isPremiumAtLeast;
  PremiumUtilsDefault;
  if (premiumType != null) {
    premiumType = premiumType.premiumType;
  }
  return isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
};
export function isScreenshotKeybindEnabled() {
  return false;
}
export function useScreenshotKeybindEnabled() {
  return false;
}
