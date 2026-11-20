// Module ID: 14434
// Function ID: 14435
// Name: ClipsExperiment
// Dependencies: [5388, 8303, 2131, 1386, 1388, 5539, 504, 2172, 1378, 2]
// Exports: areClipsAvailable, isClientClipsCapable, isClipsPlatformRequirementIgnored, isScreenshotKeybindEnabled, isUserPremiumTypeForClipsEarlyAccess, useIsClipsAvailable, useIsClipsPlatformSupported, useIsUserPremiumTypeForClipsEarlyAccess, useScreenshotKeybindEnabled

// Module 14434 (ClipsExperiment)
import get_initialized from "get initialized" /* 504 */;
import PlatformUtilsAll from "PlatformUtils" /* 1378 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2172 */;
import Constants from "Constants" /* 5539 */;
import DevSettingsStore from "DevSettingsStore" /* 5388 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 8303 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

const f105892 = () => {
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
    isDesktopResult = obj3.useStateFromStores(items, f105892);
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
    isDesktopResult = obj3.useStateFromStores(items, f105892);
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
