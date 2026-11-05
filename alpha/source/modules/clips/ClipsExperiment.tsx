// Module ID: 15457
// Function ID: 15458
// Name: ClipsExperiment
// Dependencies: [5766, 8009, 2135, 1385, 1387, 5905, 504, 2176, 1377, 2]
// Exports: areClipsAvailable, isClientClipsCapable, isScreenshotKeybindEnabled, isUserPremiumTypeForClipsEarlyAccess, useIsClipsAvailable, useScreenshotKeybindEnabled

// Module 15457 (ClipsExperiment)
import get_initialized from "get initialized" /* 504 */;
import PlatformUtilsAll from "PlatformUtils" /* 1377 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2176 */;
import Constants from "Constants" /* 5905 */;
import DevSettingsStore from "DevSettingsStore" /* 5766 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 8009 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const Features = Constants.Features;
const result = size.fileFinishedImporting("modules/clips/ClipsExperiment.tsx");

export function areClipsAvailable() {
  const mediaEngine = MediaEngineStore.getMediaEngine();
  const obj2 = PlatformUtilsAll;
  let tmp4 = !(obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support());
  const isDesktopResult = obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
  if (tmp4) {
    const isDeveloper = DeveloperExperimentStore.isDeveloper && DevSettingsStore.get("clips_ignore_platform_requirement");
    tmp4 = !isDeveloper;
  }
  let isPremiumAtLeastResult = !tmp4;
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
  let isDesktopResult = obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
  const items = [DevSettingsStore, DeveloperExperimentStore];
  const obj3 = get_initialized;
  const stateFromStores = obj3.useStateFromStores(items, () => {
    isDeveloper = isDeveloper.isDeveloper && DevSettingsStore.get("clips_ignore_platform_requirement");
    return isDeveloper;
  });
  const items1 = [UserStore];
  const obj4 = get_initialized;
  let stateFromStores1 = obj4.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    const isPremiumAtLeast = PremiumUtilsDefault.isPremiumAtLeast;
    PremiumUtilsDefault;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return isPremiumAtLeast(premiumType, TIER_2.TIER_2);
  });
  if (stateFromStores1) {
    if (!isDesktopResult) {
      isDesktopResult = stateFromStores;
    }
    stateFromStores1 = isDesktopResult;
  }
  return stateFromStores1;
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
