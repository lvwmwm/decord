// Module ID: 15356
// Function ID: 15357
// Name: ClipsExperiment
// Dependencies: [2135, 1385, 1387, 5888, 504, 2176, 1377, 2]
// Exports: areClipsAvailable, isClientClipsCapable, isScreenshotKeybindEnabled, isUserPremiumTypeForClipsEarlyAccess, useIsClipsAvailable, useScreenshotKeybindEnabled

// Module 15356 (ClipsExperiment)
import get_initialized from "get initialized" /* 504 */;
import PlatformUtilsAll from "PlatformUtils" /* 1377 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2176 */;
import Constants from "Constants" /* 5888 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const Features = Constants.Features;
const result = size.fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

export function areClipsAvailable() {
  const mediaEngine = MediaEngineStore.getMediaEngine();
  const obj2 = PlatformUtilsAll;
  let isPremiumAtLeastResult = obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
  const isDesktopResult = obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
  if (isPremiumAtLeastResult) {
    const currentUser = UserStore.getCurrentUser();
    let premiumType;
    const isPremiumAtLeast = PremiumUtilsDefault.isPremiumAtLeast;
    PremiumUtilsDefault;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    isPremiumAtLeastResult = isPremiumAtLeast(premiumType, PremiumTypes.TIER_2);
  }
  return isPremiumAtLeastResult;
}
export function useIsClipsAvailable() {
  let TIER_2;
  const mediaEngine = MediaEngineStore.getMediaEngine();
  const obj2 = PlatformUtilsAll;
  const items = [UserStore];
  const isDesktopResult = obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
  const obj3 = get_initialized;
  const tmp4 = obj3.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    const isPremiumAtLeast = PremiumUtilsDefault.isPremiumAtLeast;
    PremiumUtilsDefault;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return isPremiumAtLeast(premiumType, TIER_2.TIER_2);
  }) && isDesktopResult;
  return tmp4;
}
export function isUserPremiumTypeForClipsEarlyAccess(currentUser) {
  let premiumType;
  const isPremiumAtLeast = PremiumUtilsDefault.isPremiumAtLeast;
  PremiumUtilsDefault;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
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
  const mediaEngine = MediaEngineStore.getMediaEngine();
  const obj2 = PlatformUtilsAll;
  const isDesktopResult = obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
  return isDesktopResult;
}
