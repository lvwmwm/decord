// Module ID: 15172
// Function ID: 15173
// Name: ClipsExperiment
// Dependencies: [2007, 1384, 1386, 5763, 1448, 504, 2048, 1376, 2]
// Exports: areClipsAvailable, isClientClipsCapable, isScreenshotKeybindEnabled, isUserPremiumTypeForClipsEarlyAccess, useIsClipsAvailable, useScreenshotKeybindEnabled

// Module 15172 (ClipsExperiment)
import get_initialized from "get initialized" /* 504 */;
import PlatformUtilsAll from "PlatformUtils" /* 1376 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2048 */;
import Constants from "Constants" /* 5763 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import UserStore from "UserStore" /* 1384 */;
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
const PremiumTypes = PremiumConstants.PremiumTypes;
const Features = Constants.Features;
let obj = { kind: "user", name: "2026-03-clips-experiment", defaultConfig: { enableClips: false, ignorePlatformRestriction: false }, variations: obj2 };
obj2 = { 1: null, 2: { enableClips: true, ignorePlatformRestriction: false } };
obj2[2] = { enableClips: true, ignorePlatformRestriction: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

export const ClipsExperiment = apexExperiment;
export function areClipsAvailable() {
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
}
export function useIsClipsAvailable() {
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
}
export function isUserPremiumTypeForClipsEarlyAccess(premiumType) {
  premiumType = undefined;
  const isPremiumAtLeast = PremiumUtilsDefault.isPremiumAtLeast;
  PremiumUtilsDefault;
  if (premiumType != null) {
    premiumType = premiumType.premiumType;
  }
  return isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
}
export function isScreenshotKeybindEnabled() {
  return false;
}
export function useScreenshotKeybindEnabled() {
  return false;
}
export function isClientClipsCapable(MediaEngineStore) {
  let ignorePlatformRestriction = apexExperiment.getConfig({ location: "isClipsClientCapable" }).ignorePlatformRestriction;
  const mediaEngine = MediaEngineStore.getMediaEngine();
  if (!ignorePlatformRestriction) {
    const obj2 = PlatformUtilsAll;
    ignorePlatformRestriction = obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
    const isDesktopResult = obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
  }
  return ignorePlatformRestriction;
}
