// Module ID: 14826
// Function ID: 14827
// Name: usePremiumTryItOutPresetShuffle
// Dependencies: [19, 8268, 1085, 558, 576, 4992, 4930, 14827, 8275, 14765, 6677, 1265, 1126, 2]

// Module 14826 (usePremiumTryItOutPresetShuffle)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import shared from "shared" /* 4930 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 6677 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 8275 */;
import ProfilePendingImageUtils from "ProfilePendingImageUtils" /* 14765 */;
import TryItOutPresets from "TryItOutPresets" /* 14827 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8268 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, announceResult, obj1, obj6, setTryItOutPresetResult, tmp3, trackResult;

const AnalyticEvents = Constants.AnalyticEvents;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumTryItOutPresetShuffle() {
  let closure_0;
  let tmp12;
  let tmp5;
  let tmp8;
  let tmp9;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(9);
  const tmp4 = T(4992)();
  if (cResult[0] !== tmp4) {
    const tmpResult = tmp(4930);
    const isThemeLightResult = tmpResult.isThemeLight(tmp4);
    cResult[0] = tmp4;
    cResult[1] = isThemeLightResult;
    tmp5 = isThemeLightResult;
  } else {
    tmp5 = cResult[1];
  }
  _require = tmp5;
  if (cResult[2] !== tmp5) {
    class T {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        tryItOutPresetConfig = obj.getTryItOutPresetConfig(arg0);
        tmp = closure_0(closure_2[8]);
        obj1 = { banner: null, themeColors: null, displayNameStyles: null, lastPreset: null };
        setTryItOutPreset = tmp.setTryItOutPreset;
        obj4 = closure_0(closure_2[9]);
        obj6 = { assetOrigin: closure_0(closure_2[10]).AssetOriginTypes.NEW_ASSET, imageUri: tryItOutPresetConfig.getBannerSrc(false), staticImageUri: tryItOutPresetConfig.getBannerSrc(true), description: tryItOutPresetConfig.getBannerAltText(), originalAsset: "gap" };
        obj1.banner = obj4.createPendingImage(obj6);
        themeColors = tryItOutPresetConfig.themeColors;
        obj1.themeColors = closure_0 ? themeColors.light : themeColors.dark;
        obj1.displayNameStyles = tryItOutPresetConfig.displayNameStyles;
        obj1.lastPreset = arg0;
        setTryItOutPresetResult = setTryItOutPreset(obj1);
        return;
      }
    }
    cResult[2] = tmp5;
    cResult[3] = T;
  } else {
    class T {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        tryItOutPresetConfig = obj.getTryItOutPresetConfig(arg0);
        tmp = closure_0(closure_2[8]);
        obj1 = { banner: null, themeColors: null, displayNameStyles: null, lastPreset: null };
        setTryItOutPreset = tmp.setTryItOutPreset;
        obj4 = closure_0(closure_2[9]);
        obj6 = { assetOrigin: closure_0(closure_2[10]).AssetOriginTypes.NEW_ASSET, imageUri: tryItOutPresetConfig.getBannerSrc(false), staticImageUri: tryItOutPresetConfig.getBannerSrc(true), description: tryItOutPresetConfig.getBannerAltText(), originalAsset: "gap" };
        obj1.banner = obj4.createPendingImage(obj6);
        themeColors = tryItOutPresetConfig.themeColors;
        obj1.themeColors = closure_0 ? themeColors.light : themeColors.dark;
        obj1.displayNameStyles = tryItOutPresetConfig.displayNameStyles;
        obj1.lastPreset = arg0;
        setTryItOutPresetResult = setTryItOutPreset(obj1);
        return;
      }
    }
  }
  T = tmp7;
  if (cResult[4] !== tmp7) {
    class T {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        tryItOutPresetConfig = obj.getTryItOutPresetConfig(arg0);
        tmp = closure_0(closure_2[8]);
        obj1 = { banner: null, themeColors: null, displayNameStyles: null, lastPreset: null };
        setTryItOutPreset = tmp.setTryItOutPreset;
        obj4 = closure_0(closure_2[9]);
        obj6 = { assetOrigin: closure_0(closure_2[10]).AssetOriginTypes.NEW_ASSET, imageUri: tryItOutPresetConfig.getBannerSrc(false), staticImageUri: tryItOutPresetConfig.getBannerSrc(true), description: tryItOutPresetConfig.getBannerAltText(), originalAsset: "gap" };
        obj1.banner = obj4.createPendingImage(obj6);
        themeColors = tryItOutPresetConfig.themeColors;
        obj1.themeColors = closure_0 ? themeColors.light : themeColors.dark;
        obj1.displayNameStyles = tryItOutPresetConfig.displayNameStyles;
        obj1.lastPreset = arg0;
        setTryItOutPresetResult = setTryItOutPreset(obj1);
        return;
      }
    }
    const items = [tmp7];
    cResult[4] = tmp7;
    cResult[5] = tmp10;
    cResult[6] = items;
    tmp9 = items;
    tmp8 = tmp10;
  } else {
    class T {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        tryItOutPresetConfig = obj.getTryItOutPresetConfig(arg0);
        tmp = closure_0(closure_2[8]);
        obj1 = { banner: null, themeColors: null, displayNameStyles: null, lastPreset: null };
        setTryItOutPreset = tmp.setTryItOutPreset;
        obj4 = closure_0(closure_2[9]);
        obj6 = { assetOrigin: closure_0(closure_2[10]).AssetOriginTypes.NEW_ASSET, imageUri: tryItOutPresetConfig.getBannerSrc(false), staticImageUri: tryItOutPresetConfig.getBannerSrc(true), description: tryItOutPresetConfig.getBannerAltText(), originalAsset: "gap" };
        obj1.banner = obj4.createPendingImage(obj6);
        themeColors = tryItOutPresetConfig.themeColors;
        obj1.themeColors = closure_0 ? themeColors.light : themeColors.dark;
        obj1.displayNameStyles = tryItOutPresetConfig.displayNameStyles;
        obj1.lastPreset = arg0;
        setTryItOutPresetResult = setTryItOutPreset(obj1);
        return;
      }
    }
    tmp9 = cResult[6];
  }
  const effect = react.useEffect(tmp8, tmp9);
  if (cResult[7] !== tmp7) {
    class I {
      constructor() {
        tryItOutLastPreset = closure_4.getTryItOutChanges().tryItOutLastPreset;
        obj = closure_0(closure_2[7]);
        randomTryItOutPreset = obj.getRandomTryItOutPreset(tryItOutLastPreset);
        obj2 = closure_0(closure_2[7]);
        tryItOutPresetConfig = obj2.getTryItOutPresetConfig(randomTryItOutPreset);
        obj4 = closure_1(closure_2[11]);
        trackResult = obj4.track(AnalyticEvents.TRY_IT_OUT_PRESET_SHUFFLED, { preset: randomTryItOutPreset });
        tmp3 = closure_1(randomTryItOutPreset);
        AccessibilityAnnouncer = closure_0(closure_2[6]).AccessibilityAnnouncer;
        announce = AccessibilityAnnouncer.announce;
        intl = closure_0(closure_2[12]).intl;
        formatToPlainString = intl.formatToPlainString;
        obj1 = { presetName: null };
        M2Hj9s = closure_0(closure_2[12]).t.M2Hj9s;
        obj1.presetName = tryItOutPresetConfig.getName();
        announceResult = announce(formatToPlainString(M2Hj9s, obj1));
        return;
      }
    }
    cResult[7] = tmp7;
    cResult[8] = I;
    tmp12 = I;
  } else {
    class I {
      constructor() {
        tryItOutLastPreset = closure_4.getTryItOutChanges().tryItOutLastPreset;
        obj = closure_0(closure_2[7]);
        randomTryItOutPreset = obj.getRandomTryItOutPreset(tryItOutLastPreset);
        obj2 = closure_0(closure_2[7]);
        tryItOutPresetConfig = obj2.getTryItOutPresetConfig(randomTryItOutPreset);
        obj4 = closure_1(closure_2[11]);
        trackResult = obj4.track(AnalyticEvents.TRY_IT_OUT_PRESET_SHUFFLED, { preset: randomTryItOutPreset });
        tmp3 = closure_1(randomTryItOutPreset);
        AccessibilityAnnouncer = closure_0(closure_2[6]).AccessibilityAnnouncer;
        announce = AccessibilityAnnouncer.announce;
        intl = closure_0(closure_2[12]).intl;
        formatToPlainString = intl.formatToPlainString;
        obj1 = { presetName: null };
        M2Hj9s = closure_0(closure_2[12]).t.M2Hj9s;
        obj1.presetName = tryItOutPresetConfig.getName();
        announceResult = announce(formatToPlainString(M2Hj9s, obj1));
        return;
      }
    }
  }
  return tmp12;
}) : (function usePremiumTryItOutPresetShuffle() {
  let callback;
  const tmp = callback(4992)();
  let obj = shared;
  const isThemeLightResult = obj.isThemeLight(tmp);
  const require = isThemeLightResult;
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
    obj3 = { assetOrigin: ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET, imageUri: tryItOutPresetConfig.getBannerSrc(false), staticImageUri: tryItOutPresetConfig.getBannerSrc(true), description: tryItOutPresetConfig.getBannerAltText(), originalAsset: "gap" };
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
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/usePremiumTryItOutPresetShuffle.tsx");

export default tmp2;
