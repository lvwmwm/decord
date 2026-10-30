// Module ID: 16464
// Function ID: 16465
// Name: usePremiumTryItOutPresetShuffle
// Dependencies: [19, 8723, 1072, 5248, 5016, 16465, 8730, 16393, 7154, 1253, 1114, 2]
// Exports: default

// Module 16464 (usePremiumTryItOutPresetShuffle)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import shared from "shared" /* 5016 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 7154 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 8730 */;
import ProfilePendingImageUtils from "ProfilePendingImageUtils" /* 16393 */;
import TryItOutPresets from "TryItOutPresets" /* 16465 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8723 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_profile/hooks/usePremiumTryItOutPresetShuffle.tsx");

export default function usePremiumTryItOutPresetShuffle() {
  let callback;
  const tmp = callback(5248)();
  let obj = shared;
  const isThemeLightResult = obj.isThemeLight(tmp);
  require = isThemeLightResult;
  const items = [isThemeLightResult];
  callback = react.useCallback((lastPreset) => {
    let obj3;
    let obj4;
    let themeColors;
    const obj = TryItOutPresets;
    const tryItOutPresetConfig = obj.getTryItOutPresetConfig(lastPreset);
    const obj2 = { banner: obj4.createPendingImage(obj3), themeColors: require ? themeColors.light : themeColors.dark, displayNameStyles: tryItOutPresetConfig.displayNameStyles, lastPreset };
    const setTryItOutPreset = UserProfileActionCreators.setTryItOutPreset;
    UserProfileActionCreators;
    obj4 = ProfilePendingImageUtils;
    themeColors = tryItOutPresetConfig.themeColors;
    obj3 = { assetOrigin: ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET, imageUri: tryItOutPresetConfig.getBannerSrc(false), staticImageUri: tryItOutPresetConfig.getBannerSrc(true), description: tryItOutPresetConfig.getBannerAltText(), originalAsset: "find" };
    setTryItOutPreset(obj2);
  }, items);
  const items1 = [callback];
  const effect = react.useEffect(() => {
    if (!UserProfileSettingsStore.hasTryItOutChanges()) {
      const obj = TryItOutPresets;
      callback(obj.getRandomTryItOutPreset());
    }
  }, items1);
  const items2 = [callback];
  return react.useCallback(() => {
    const tryItOutLastPreset = UserProfileSettingsStore.getTryItOutChanges().tryItOutLastPreset;
    const obj = TryItOutPresets;
    const randomTryItOutPreset = obj.getRandomTryItOutPreset(tryItOutLastPreset);
    const obj2 = TryItOutPresets;
    const tryItOutPresetConfig = obj2.getTryItOutPresetConfig(randomTryItOutPreset);
    const obj4 = AnalyticsUtilsDefault;
    obj4.track(AnalyticEvents.TRY_IT_OUT_PRESET_SHUFFLED, { preset: randomTryItOutPreset });
    callback(randomTryItOutPreset);
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl2.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { presetName: tryItOutPresetConfig.getName() };
    const M2Hj9s = intl2.t.M2Hj9s;
    announce(formatToPlainString(M2Hj9s, obj3));
  }, items2);
};
