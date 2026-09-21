// Module ID: 13943
// Function ID: 13944
// Name: ClipsExperiment
// Dependencies: [1996, 1376, 1378, 1438, 13944, 558, 568, 504, 4418, 2]
// Exports: areClipsAvailable, isScreenshotKeybindEnabled, isUserPremiumTypeForClipsEarlyAccess, useScreenshotKeybindEnabled

// Module 13943 (ClipsExperiment)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4418 */;
import isClientClipsCapableDefault from "isClientClipsCapable" /* 13944 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const PremiumTypes = fn(1378).PremiumTypes;
const ApexExperiment = fn(1438);
const obj2 = { kind: "user", name: "2026-03-clips-experiment", defaultConfig: { enableClips: false, ignorePlatformRestriction: false }, variations: null };
const obj3 = { 1: null, 2: { enableClips: true, ignorePlatformRestriction: false } };
obj3[2] = { enableClips: true, ignorePlatformRestriction: true };
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const ReactCompilerGating = fn(558);
function isUserPremiumTypeForClipsEarlyAccess(premiumType) {
  premiumType = undefined;
  if (premiumType != null) {
    premiumType = premiumType.premiumType;
  }
  return PremiumUtilsDefault.isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

export const ClipsExperiment = apexExperiment;
export const areClipsAvailable = function areClipsAvailable() {
  if (isClientClipsCapableDefault(MediaEngineStore)) {
    const currentUser = UserStore.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    let enableClips = PremiumUtilsDefault.isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
    if (!enableClips) {
      enableClips = apexExperiment.getConfig({ location: "areClipsEnabled" }).enableClips;
    }
    return enableClips;
  } else {
    return false;
  }
};
export const useIsClipsAvailable = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = isClientClipsCapableDefault(MediaEngineStore);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function p() {
      currentUser = currentUser.getCurrentUser();
      let premiumType;
      if (currentUser != null) {
        premiumType = currentUser.premiumType;
      }
      return PremiumUtilsDefault.isPremiumAtLeast(premiumType, TIER_2.TIER_2);
    };
    cResult[1] = items;
    cResult[2] = fn;
    let tmp9 = fn;
    let tmp8 = items;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const stateFromStores = initialize.useStateFromStores(tmp8, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const config = apexExperiment.getConfig({ location: "useEnableClips" });
    cResult[3] = config;
    let tmp12 = config;
  } else {
    tmp12 = cResult[3];
  }
  return (tmp12.enableClips || stateFromStores) && first;
}) : (() => {
  const tmp = isClientClipsCapableDefault(MediaEngineStore);
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return PremiumUtilsDefault.isPremiumAtLeast(premiumType, TIER_2.TIER_2);
  });
  return (apexExperiment.getConfig({ location: "useEnableClips" }).enableClips || stateFromStores) && tmp;
});
export { isUserPremiumTypeForClipsEarlyAccess };
export function isScreenshotKeybindEnabled() {
  return false;
}
export function useScreenshotKeybindEnabled() {
  return false;
}
