// Module ID: 16107
// Function ID: 16108
// Name: ProfileCustomizationTryItOutV2SettingScreen
// Dependencies: [19, 17, 1390, 1085, 1392, 21, 5091, 587, 558, 576, 1503, 6681, 6848, 6872, 504, 14826, 8295, 1265, 5087, 1126, 1200, 9017, 16108, 2]

// Module 16107 (ProfileCustomizationTryItOutV2SettingScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8295 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, navigation, setOptionsResult;

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
  const cResult = obj.c(22);
  const tmp4 = closure_10();
  const tmp = _require;
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
    const items = [UserStore];
    const fn = function o() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const tmpResult = tmp(sourceAnalyticsLocations[14]);
  const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp11);
  const tmp14 = tmp7(sourceAnalyticsLocations[15])();
  let closure_4 = tmp14;
  if (cResult[2] !== stateFromStores) {
    const fn2 = function f() {
      if (null != stateFromStores) {
        const tmp3 = maybeFetchUserProfileDefault;
        tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
      }
    };
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp16 = items1;
    tmp15 = fn2;
  } else {
    tmp15 = cResult[3];
    tmp16 = cResult[4];
  }
  const effect = stateFromStores.useEffect(tmp15, tmp16);
  const obj5 = stateFromStores;
  if (cResult[5] !== sourceAnalyticsLocations) {
    class I {
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
    cResult[6] = I;
    cResult[7] = items2;
    tmp19 = items2;
    tmp18 = I;
  } else {
    class I {
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
  const effect1 = obj5.useEffect(tmp18, tmp19);
  if (cResult[8] === navigation) {
    class I {
      constructor() {
        let obj3;
        const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: obj3, location_stack: sourceAnalyticsLocations };
        obj3 = { page: metroImportDefault.USER_SETTINGS };
        const obj = AnalyticsUtilsDefault;
        obj.track(metroRequire.PREMIUM_UPSELL_VIEWED, obj2);
      }
    }
  }
  class O {
    constructor() {
      obj = {
        headerTitle() {
              const Heading = closure_0(sourceAnalyticsLocations[18]).Heading;
              const intl = closure_0(sourceAnalyticsLocations[19]).intl;
              return <Heading variant="redesign/heading-18/bold" color="mobile-text-heading-primary" lineClamp={1} maxFontSizeMultiplier={2} style={closure_1_0.headerContent}>{intl.string(closure_0(sourceAnalyticsLocations[19]).t.PxUx8e)}</Heading>;
            },
        headerRight() {
              const PressableOpacity = closure_0(sourceAnalyticsLocations[20]).PressableOpacity;
              const intl = closure_0(sourceAnalyticsLocations[19]).intl;
              const intl2 = closure_0(sourceAnalyticsLocations[19]).intl;
              ({ size: "md", color: navigation(sourceAnalyticsLocations[7]).colors.ICON_STRONG });
              const DiceIcon = closure_0(sourceAnalyticsLocations[21]).DiceIcon;
              return <PressableOpacity onPress={onPress} accessibilityRole="button" accessibilityLabel={intl.string(closure_0(sourceAnalyticsLocations[19]).t.VzqqFC)} accessibilityHint={intl2.string(closure_0(sourceAnalyticsLocations[19]).t.bBRdiB)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }} style={closure_1_0.headerContent}>{null}</PressableOpacity>;
            }
      };
      setOptionsResult = closure_1.setOptions(obj);
      return;
    }
  }
  const items3 = [navigation, tmp14, tmp4];
  cResult[8] = navigation;
  cResult[9] = tmp14;
  cResult[10] = tmp4;
  cResult[11] = O;
  cResult[12] = items3;
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
  const items = [UserStore];
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp10 = navigation(sourceAnalyticsLocations[15])();
  let closure_4 = tmp10;
  const items1 = [stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null != stateFromStores) {
      const tmp3 = maybeFetchUserProfileDefault;
      tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
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
  const items3 = [navigation, tmp10, tmp];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    let onPress;
    const obj = {
      headerTitle() {
        const Heading = closure_0(sourceAnalyticsLocations[18]).Heading;
        const intl = closure_0(sourceAnalyticsLocations[19]).intl;
        return <Heading variant="redesign/heading-18/bold" color="mobile-text-heading-primary" lineClamp={1} maxFontSizeMultiplier={2} style={closure_1_0.headerContent}>{intl.string(closure_0(sourceAnalyticsLocations[19]).t.PxUx8e)}</Heading>;
      },
      headerRight() {
        const PressableOpacity = closure_0(sourceAnalyticsLocations[20]).PressableOpacity;
        const intl = closure_0(sourceAnalyticsLocations[19]).intl;
        const intl2 = closure_0(sourceAnalyticsLocations[19]).intl;
        ({ size: "md", color: navigation(sourceAnalyticsLocations[7]).colors.ICON_STRONG });
        const DiceIcon = closure_0(sourceAnalyticsLocations[21]).DiceIcon;
        return <PressableOpacity onPress={onPress} accessibilityRole="button" accessibilityLabel={intl.string(closure_0(sourceAnalyticsLocations[19]).t.VzqqFC)} accessibilityHint={intl2.string(closure_0(sourceAnalyticsLocations[19]).t.bBRdiB)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }} style={closure_1_0.headerContent}>{null}</PressableOpacity>;
      }
    };
    navigation.setOptions(obj);
  }, items3);
  let tmp15Result = null;
  const tmp2 = _require;
  const tmp6 = navigation;
  if (null != stateFromStores) {
    const obj4 = { value: analyticsLocations, children: null };
    const AnalyticsLocationProvider = tmp2(tmp3[12]).AnalyticsLocationProvider;
    const params = settingNavigationRoute.params;
    let initialTarget;
    tmp6(tmp3[22]);
    if (params != null) {
      initialTarget = params.initialTarget;
    }
    tmp15Result = tmp15(AnalyticsLocationProvider, obj4);
  }
  return tmp15Result;
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutV2SettingScreen.tsx");

export default tmp6;
