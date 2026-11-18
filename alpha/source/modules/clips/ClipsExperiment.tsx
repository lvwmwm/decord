// Module ID: 14479
// Function ID: 14480
// Name: ClipsExperiment
// Dependencies: [5417, 8335, 2133, 1388, 1390, 5568, 504, 2174, 1380, 2]
// Exports: areClipsAvailable, isClientClipsCapable, isClipsPlatformRequirementIgnored, isScreenshotKeybindEnabled, isUserPremiumTypeForClipsEarlyAccess, useIsClipsAvailable, useIsClipsPlatformSupported, useIsUserPremiumTypeForClipsEarlyAccess, useScreenshotKeybindEnabled

// Module 14479 (ClipsExperiment)
import get_initialized from "get initialized" /* 504 */;
import PlatformUtilsAll from "PlatformUtils" /* 1380 */;
import PremiumConstants from "PremiumConstants" /* 1390 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2174 */;
import Constants from "Constants" /* 5568 */;
import DevSettingsStore from "DevSettingsStore" /* 5417 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 8335 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

const f107594 = () => {
  isDeveloper = isDeveloper.isDeveloper && DevSettingsStore.get("clips_ignore_platform_requirement");
  return isDeveloper;
};
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
export function useIsClipsPlatformSupported() {
  const mediaEngine = MediaEngineStore.getMediaEngine();
  const obj2 = PlatformUtilsAll;
  let isDesktopResult = obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
  const items = [DevSettingsStore, DeveloperExperimentStore];
  const obj3 = get_initialized;
  if (!isDesktopResult) {
    isDesktopResult = obj3.useStateFromStores(items, f107594);
  }
  return isDesktopResult;
}
export function useIsClipsAvailable() {
  let TIER_2;
  const mediaEngine = MediaEngineStore.getMediaEngine();
  const obj2 = PlatformUtilsAll;
  let isDesktopResult = obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
  const items = [DevSettingsStore, DeveloperExperimentStore];
  const obj3 = get_initialized;
  if (!isDesktopResult) {
    isDesktopResult = obj3.useStateFromStores(items, f107594);
  }
  const items1 = [UserStore];
  const tmp4Result = get_initialized;
  const tmp5 = tmp4Result.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    const isPremiumAtLeast = PremiumUtilsDefault.isPremiumAtLeast;
    PremiumUtilsDefault;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return isPremiumAtLeast(premiumType, TIER_2.TIER_2);
  }) && isDesktopResult;
  return tmp5;
}
export function isClipsPlatformRequirementIgnored() {
  const isDeveloper = DeveloperExperimentStore.isDeveloper && DevSettingsStore.get("clips_ignore_platform_requirement");
  return isDeveloper;
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
export function useIsUserPremiumTypeForClipsEarlyAccess() {
  let TIER_2;
  const items = [UserStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    const isPremiumAtLeast = PremiumUtilsDefault.isPremiumAtLeast;
    PremiumUtilsDefault;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return isPremiumAtLeast(premiumType, TIER_2.TIER_2);
  });
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
