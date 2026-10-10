// Module ID: 13595
// Function ID: 13596
// Name: ClipsExperiment
// Dependencies: [2012, 1390, 1392, 5117, 1453, 558, 576, 504, 4769, 1382, 2]
// Exports: areClipsAvailable, isClientClipsCapable, isScreenshotKeybindEnabled, isUserPremiumTypeForClipsEarlyAccess, useScreenshotKeybindEnabled

// Module 13595 (ClipsExperiment)
import react from "react" /* 576 */;
import PlatformUtilsAll from "PlatformUtils" /* 1382 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4769 */;
import Constants from "Constants" /* 5117 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import UserStore from "UserStore" /* 1390 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2;

let obj2;
let tmp;
const get_initialized = tmp(504);
const PremiumTypes = PremiumConstants.PremiumTypes;
const Features = Constants.Features;
let obj = { kind: "user", name: "2026-03-clips-experiment", defaultConfig: { enableClips: false, ignorePlatformRestriction: false }, variations: obj2 };
obj2 = { 1: null, 2: { enableClips: true, ignorePlatformRestriction: false } };
obj2[2] = { enableClips: true, ignorePlatformRestriction: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
function isUserPremiumTypeForClipsEarlyAccess(premiumType) {
  premiumType = undefined;
  const isPremiumAtLeast = PremiumUtilsDefault.isPremiumAtLeast;
  PremiumUtilsDefault;
  if (premiumType != null) {
    premiumType = premiumType.premiumType;
  }
  return isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
}
function isClientClipsCapable(MediaEngineStore) {
  let ignorePlatformRestriction = apexExperiment.getConfig({ location: "isClipsClientCapable" }).ignorePlatformRestriction;
  const mediaEngine = MediaEngineStore.getMediaEngine();
  if (!ignorePlatformRestriction) {
    const obj2 = PlatformUtilsAll;
    ignorePlatformRestriction = obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
    const isDesktopResult = obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
  }
  return ignorePlatformRestriction;
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsClipsAvailable() {
  let TIER_2;
  let first;
  let tmp10;
  let tmp11;
  let tmp14;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let ignorePlatformRestriction = apexExperiment.getConfig({ location: "isClipsClientCapable" }).ignorePlatformRestriction;
    const mediaEngine = MediaEngineStore.getMediaEngine();
    if (!ignorePlatformRestriction) {
      const obj3 = PlatformUtilsAll;
      ignorePlatformRestriction = obj3.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
      const isDesktopResult = obj3.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
    }
    cResult[0] = ignorePlatformRestriction;
    first = ignorePlatformRestriction;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class C {
      constructor() {
        currentUser = closure_1_5.getCurrentUser();
        tmp2 = closure_1_1(closure_1_3[8]);
        premiumType = undefined;
        isPremiumAtLeast = tmp2.isPremiumAtLeast;
        if (currentUser != null) {
          premiumType = currentUser.premiumType;
        }
        return isPremiumAtLeast(premiumType, closure_1_6.TIER_2);
      }
    }
    cResult[1] = items;
    cResult[2] = C;
    tmp11 = C;
    tmp10 = items;
  } else {
    tmp10 = cResult[1];
    tmp11 = cResult[2];
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp11);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const config = apexExperiment.getConfig({ location: "useEnableClips" });
    class C {
      constructor() {
        currentUser = closure_1_5.getCurrentUser();
        tmp2 = closure_1_1(closure_1_3[8]);
        premiumType = undefined;
        isPremiumAtLeast = tmp2.isPremiumAtLeast;
        if (currentUser != null) {
          premiumType = currentUser.premiumType;
        }
        return isPremiumAtLeast(premiumType, closure_1_6.TIER_2);
      }
    }
    tmp14 = config;
  } else {
    tmp14 = cResult[3];
  }
  return (tmp14.enableClips || stateFromStores) && first;
}) : (function useIsClipsAvailable() {
  let TIER_2;
  let ignorePlatformRestriction = apexExperiment.getConfig({ location: "isClipsClientCapable" }).ignorePlatformRestriction;
  const mediaEngine = MediaEngineStore.getMediaEngine();
  const obj = apexExperiment;
  if (!ignorePlatformRestriction) {
    const obj3 = PlatformUtilsAll;
    ignorePlatformRestriction = obj3.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
    const isDesktopResult = obj3.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
  }
  const items = [UserStore];
  const obj4 = get_initialized;
  const stateFromStores = obj4.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    const isPremiumAtLeast = PremiumUtilsDefault.isPremiumAtLeast;
    PremiumUtilsDefault;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return isPremiumAtLeast(premiumType, TIER_2.TIER_2);
  });
  const tmp6 = (obj.getConfig({ location: "useEnableClips" }).enableClips || stateFromStores) && ignorePlatformRestriction;
  return tmp6;
});
const result = size.fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

export const ClipsExperiment = apexExperiment;
export const areClipsAvailable = function areClipsAvailable() {
  let ignorePlatformRestriction = apexExperiment.getConfig({ location: "isClipsClientCapable" }).ignorePlatformRestriction;
  const mediaEngine = MediaEngineStore.getMediaEngine();
  const obj = apexExperiment;
  if (!ignorePlatformRestriction) {
    const obj3 = PlatformUtilsAll;
    ignorePlatformRestriction = obj3.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
    const isDesktopResult = obj3.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
  }
  if (ignorePlatformRestriction) {
    const currentUser = UserStore.getCurrentUser();
    let premiumType;
    const isPremiumAtLeast = PremiumUtilsDefault.isPremiumAtLeast;
    PremiumUtilsDefault;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    const tmp13 = isPremiumAtLeast(premiumType, PremiumTypes.TIER_2) || obj.getConfig({ location: "areClipsEnabled" }).enableClips;
    return tmp13;
  } else {
    return false;
  }
};
export const useIsClipsAvailable = tmp3;
export { isUserPremiumTypeForClipsEarlyAccess };
export function isScreenshotKeybindEnabled() {
  return false;
}
export function useScreenshotKeybindEnabled() {
  return false;
}
export { isClientClipsCapable };
