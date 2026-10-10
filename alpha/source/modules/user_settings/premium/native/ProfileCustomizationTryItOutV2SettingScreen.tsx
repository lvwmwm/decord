// Module ID: 16169
// Function ID: 16170
// Name: ProfileCustomizationTryItOutV2SettingScreen
// Dependencies: [19, 17, 1390, 1085, 1392, 21, 5092, 587, 558, 576, 1503, 6682, 6851, 6878, 504, 14837, 14885, 8311, 1265, 5088, 1126, 1200, 9036, 16170, 2]

// Module 16169 (ProfileCustomizationTryItOutV2SettingScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8311 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, navigation;

let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ View: closure_4, StyleSheet } = react_native);
({ AnalyticEvents: metroRequire, AnalyticsPages: metroImportDefault } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, headerContent: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileCustomizationTryItOutV2SettingScreen() {
  let analyticsLocations;
  let closure_0;
  let currentUser;
  let sourceAnalyticsLocations;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let obj = require("react");
  const cResult = obj.c(23);
  const tmp4 = closure_10();
  _require = tmp4;
  let obj2 = require("useNavigation");
  navigation = obj2.useNavigation();
  let obj3 = require("useSettingNavigationRoute");
  const settingNavigationRoute = obj3.useSettingNavigationRoute();
  const tmp8 = navigation(sourceAnalyticsLocations[12]);
  const tmp8Result = tmp8(navigation(sourceAnalyticsLocations[13]).USER_SETTINGS_TRY_OUT_PREMIUM);
  ({ analyticsLocations, sourceAnalyticsLocations } = tmp8Result);
  const tmp7 = navigation;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [currentUser];
    let fn = function o() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp11);
  const tmpResult2 = require("UserProfilePremiumTryItOutMobileRefreshExperiment");
  const shuffleButtonLocation = tmpResult2.useTryItOutMobileRefreshConfig("ProfileCustomizationTryItOutV2SettingScreen").shuffleButtonLocation;
  const tmp14 = tmp7(sourceAnalyticsLocations[16])();
  currentUser = tmp14;
  if (cResult[2] !== stateFromStores) {
    class I {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
        }
      }
    }
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = I;
    cResult[4] = items1;
    tmp16 = items1;
    tmp15 = I;
  } else {
    class I {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
        }
      }
    }
    tmp16 = cResult[4];
  }
  const effect = stateFromStores.useEffect(tmp15, tmp16);
  const obj6 = stateFromStores;
  if (cResult[5] !== sourceAnalyticsLocations) {
    class U {
      constructor() {
        let obj3;
        const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: obj3, location_stack: sourceAnalyticsLocations };
        obj3 = { page: metroImportDefault.USER_SETTINGS };
        const obj = AnalyticsUtilsDefault;
        obj.track(metroRequire.PREMIUM_UPSELL_VIEWED, obj2);
      }
    }
    const items2 = [sourceAnalyticsLocations];
    cResult[5] = sourceAnalyticsLocations;
    cResult[6] = U;
    cResult[7] = items2;
    tmp19 = items2;
    tmp18 = U;
  } else {
    class U {
      constructor() {
        let obj3;
        const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: obj3, location_stack: sourceAnalyticsLocations };
        obj3 = { page: metroImportDefault.USER_SETTINGS };
        const obj = AnalyticsUtilsDefault;
        obj.track(metroRequire.PREMIUM_UPSELL_VIEWED, obj2);
      }
    }
    tmp19 = cResult[7];
  }
  const effect1 = obj6.useEffect(tmp18, tmp19);
  if (cResult[8] === navigation) {
    class U {
      constructor() {
        let obj3;
        const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: obj3, location_stack: sourceAnalyticsLocations };
        obj3 = { page: metroImportDefault.USER_SETTINGS };
        const obj = AnalyticsUtilsDefault;
        obj.track(metroRequire.PREMIUM_UPSELL_VIEWED, obj2);
      }
    }
  }
  const fn2 = function v() {
    let fn;
    let onPress;
    const obj = {
      headerTitle() {
        const Heading = closure_0(sourceAnalyticsLocations[19]).Heading;
        const intl = closure_0(sourceAnalyticsLocations[20]).intl;
        return <Heading variant="redesign/heading-18/bold" color="mobile-text-heading-primary" lineClamp={1} maxFontSizeMultiplier={2} style={closure_1_0.headerContent}>{intl.string(closure_0(sourceAnalyticsLocations[20]).t.PxUx8e)}</Heading>;
      },
      headerRight: fn
    };
    fn = undefined;
    const setOptions = navigation.setOptions;
    if ("inline" !== shuffleButtonLocation) {
      fn = () => {
        const PressableOpacity = closure_0(sourceAnalyticsLocations[21]).PressableOpacity;
        const intl = closure_0(sourceAnalyticsLocations[20]).intl;
        const intl2 = closure_0(sourceAnalyticsLocations[20]).intl;
        ({ size: "md", color: navigation(sourceAnalyticsLocations[7]).colors.ICON_STRONG });
        const DiceIcon = closure_0(sourceAnalyticsLocations[22]).DiceIcon;
        return <PressableOpacity onPress={onPress} accessibilityRole="button" accessibilityLabel={intl.string(closure_0(sourceAnalyticsLocations[20]).t.VzqqFC)} accessibilityHint={intl2.string(closure_0(sourceAnalyticsLocations[20]).t.bBRdiB)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }} style={closure_1_0.headerContent}>{null}</PressableOpacity>;
      };
    }
    setOptions(obj);
  };
  const items3 = [navigation, tmp14, shuffleButtonLocation, tmp4];
  cResult[8] = navigation;
  cResult[9] = tmp14;
  cResult[10] = shuffleButtonLocation;
  cResult[11] = tmp4;
  cResult[12] = fn2;
  cResult[13] = items3;
}) : (function ProfileCustomizationTryItOutV2SettingScreen() {
  let closure_0;
  let currentUser;
  let sourceAnalyticsLocations;
  const tmp = closure_10();
  _require = tmp;
  let tmp3 = sourceAnalyticsLocations;
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  let obj2 = require("useSettingNavigationRoute");
  const settingNavigationRoute = obj2.useSettingNavigationRoute();
  const tmp7 = navigation(sourceAnalyticsLocations[12]);
  const tmp7Result = tmp7(navigation(sourceAnalyticsLocations[13]).USER_SETTINGS_TRY_OUT_PREMIUM);
  sourceAnalyticsLocations = tmp7Result.sourceAnalyticsLocations;
  const analyticsLocations = tmp7Result.analyticsLocations;
  let obj3 = require("get initialized");
  const items = [currentUser];
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj4 = require("UserProfilePremiumTryItOutMobileRefreshExperiment");
  const shuffleButtonLocation = obj4.useTryItOutMobileRefreshConfig("ProfileCustomizationTryItOutV2SettingScreen").shuffleButtonLocation;
  const tmp10 = navigation(sourceAnalyticsLocations[16])();
  currentUser = tmp10;
  const items1 = [stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null != stateFromStores) {
      const tmp3 = maybeFetchUserProfileDefault;
      tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
    }
  }, items1);
  const items2 = [sourceAnalyticsLocations];
  const effect1 = stateFromStores.useEffect(() => {
    let obj3;
    const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: obj3, location_stack: sourceAnalyticsLocations };
    obj3 = { page: metroImportDefault.USER_SETTINGS };
    const obj = AnalyticsUtilsDefault;
    obj.track(metroRequire.PREMIUM_UPSELL_VIEWED, obj2);
  }, items2);
  const items3 = [navigation, tmp10, shuffleButtonLocation, tmp];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    let fn;
    let onPress;
    const obj = {
      headerTitle() {
        const Heading = closure_0(sourceAnalyticsLocations[19]).Heading;
        const intl = closure_0(sourceAnalyticsLocations[20]).intl;
        return <Heading variant="redesign/heading-18/bold" color="mobile-text-heading-primary" lineClamp={1} maxFontSizeMultiplier={2} style={closure_1_0.headerContent}>{intl.string(closure_0(sourceAnalyticsLocations[20]).t.PxUx8e)}</Heading>;
      },
      headerRight: fn
    };
    fn = undefined;
    const setOptions = navigation.setOptions;
    if ("inline" !== shuffleButtonLocation) {
      fn = () => {
        const PressableOpacity = closure_0(sourceAnalyticsLocations[21]).PressableOpacity;
        const intl = closure_0(sourceAnalyticsLocations[20]).intl;
        const intl2 = closure_0(sourceAnalyticsLocations[20]).intl;
        ({ size: "md", color: navigation(sourceAnalyticsLocations[7]).colors.ICON_STRONG });
        const DiceIcon = closure_0(sourceAnalyticsLocations[22]).DiceIcon;
        return <PressableOpacity onPress={onPress} accessibilityRole="button" accessibilityLabel={intl.string(closure_0(sourceAnalyticsLocations[20]).t.VzqqFC)} accessibilityHint={intl2.string(closure_0(sourceAnalyticsLocations[20]).t.bBRdiB)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }} style={closure_1_0.headerContent}>{null}</PressableOpacity>;
      };
    }
    setOptions(obj);
  }, items3);
  let tmp15Result = null;
  const tmp2 = _require;
  const tmp6 = navigation;
  if (null != stateFromStores) {
    const obj5 = { value: analyticsLocations, children: null };
    const AnalyticsLocationProvider = tmp2(tmp3[12]).AnalyticsLocationProvider;
    const params = settingNavigationRoute.params;
    let initialTarget;
    tmp6(tmp3[23]);
    if (params != null) {
      initialTarget = params.initialTarget;
    }
    tmp15Result = tmp15(AnalyticsLocationProvider, obj5);
  }
  return tmp15Result;
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutV2SettingScreen.tsx");

export default tmp6;
