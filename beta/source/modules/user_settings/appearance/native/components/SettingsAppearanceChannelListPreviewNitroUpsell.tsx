// Module ID: 14848
// Function ID: 14849
// Name: SettingsAppearanceChannelListPreviewNitroUpsell
// Dependencies: [19, 17, 4825, 1074, 21, 4566, 5293, 5280, 5284, 4836, 576, 6583, 6603, 8695, 8663, 5281, 1115, 1177, 504, 9424, 2]

// Module 14848 (SettingsAppearanceChannelListPreviewNitroUpsell)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8663 */;
import openPremiumModalDefault from "openPremiumModal" /* 8695 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 9424 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj4;
let size;
let unpackModuleId;
function SettingsAppearanceChannelListPreviewNitroUpsellComponent(theme) {
  let intl;
  let items1;
  let obj6;
  theme = theme.theme;
  let analyticsLocations;
  let tmp = closure_17();
  let obj = theme(4566);
  const fn = function l() {
    let obj2;
    let num = 1;
    if (theme.theme === constants.LIGHT) {
      num = 0.5;
    }
    const obj = { opacity: obj2.withSpring(num, springPresets.springStandard) };
    const merged = Object.assign(StyleSheet.absoluteFillObject);
    obj2 = spring;
    return obj;
  };
  let obj2 = { theme, ThemeTypes, StyleSheet, withSpring: theme(5280).withSpring, springStandard: theme(5284).springStandard };
  fn.__closure = obj2;
  fn.__workletHash = 16911565077998;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const tmp3 = analyticsLocations(6583);
  analyticsLocations = tmp3(analyticsLocations(6603).CLIENT_THEMES_EDITOR).analyticsLocations;
  const items = [analyticsLocations];
  const obj3 = { style: tmp.nitroUpsell, children: items1 };
  const obj4 = { style: animatedStyle, importantForAccessibility: "no-hide-descendants", colors };
  const callback = react.useCallback(() => {
    let obj2;
    const obj = { premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING, analyticsLocation: obj2, analyticsLocations };
    obj2 = { page: metroImportDefault.USER_SETTINGS, section: metroImportAll.SETTINGS_CLIENT_THEMES };
    const tmp = openPremiumModalDefault;
    tmp(obj);
  }, items);
  items1 = [closure_10(LinearGradient, obj4), ];
  const obj5 = { text: intl.string(theme(1115).t.pj0XBN), icon: closure_10(theme(1177).NitroWheel, obj6), variant: "active", onPress: callback, size: "md" };
  const Button = theme(5281).Button;
  intl = theme(1115).intl;
  obj6 = { style: tmp.nitroWheelIcon };
  items1[1] = closure_10(Button, obj5);
  return closure_11(View, obj3);
}
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
({ AnalyticsPages: metroImportDefault, AnalyticsSections: metroImportAll, ThemeTypes: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const colors = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"];
function animationEntering(targetHeight) {
  let obj2;
  const obj = { opacity: obj2.withSpring(targetHeight, springPresets.springStandard) };
  obj2 = spring;
  return obj;
}
let obj = { withSpring: spring.withSpring, springStandard: springPresets.springStandard };
animationEntering.__closure = obj;
animationEntering.__workletHash = 2168112734281;
animationEntering.__initData = { code: "function animationEntering_SettingsAppearanceChannelListPreviewNitroUpsellTsx1(visible){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard)};}" };
const __initData = { code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx3(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}" };
function animationExiting(targetHeight, cleanUp) {
  let fn;
  let obj2;
  let closure_0 = cleanUp;
  const obj = { opacity: obj2.withSpring(targetHeight, springPresets.springStandard, "respect-motion-settings", fn) };
  fn = function s(arg0) {
    if (closure_0 != null) {
      tmp(arg0);
    }
  };
  fn.__closure = { cleanUp };
  fn.__workletHash = 15025873527064;
  fn.__initData = __initData;
  obj2 = spring;
  return obj;
}
let obj2 = { withSpring: spring.withSpring, springStandard: springPresets.springStandard };
animationExiting.__closure = obj2;
animationExiting.__workletHash = 12271101023923;
animationExiting.__initData = { code: "function animationExiting_SettingsAppearanceChannelListPreviewNitroUpsellTsx2(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}" };
let createStyles = createStyles_mod;
let obj3 = { nitroUpsell: obj4, nitroWheelIcon: size };
obj4 = { borderBottomStartRadius: nativeDefault.radii.xl, borderBottomEndRadius: nativeDefault.radii.xl, height: 2 * nativeDefault.space.PX_96, padding: nativeDefault.space.PX_24, justifyContent: "flex-end", top: undefined, overflow: "hidden" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
size = { height: nativeDefault.space.PX_16, width: nativeDefault.space.PX_16 };
let closure_17 = createStyles(obj3);
const __initData2 = { code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx4(){const{theme,ThemeTypes,StyleSheet,withSpring,springStandard}=this.__closure;const opacity=theme.theme===ThemeTypes.LIGHT?0.5:1;return{...StyleSheet.absoluteFillObject,opacity:withSpring(opacity,springStandard)};}" };
const memoResult = react.memo(function SettingsAppearanceChannelListPreviewNitroUpsell(visible) {
  let tmp5;
  let useReducedMotion;
  let obj = get_initialized;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = react.useCallback((arg0, style) => {
    let tmpResult;
    const obj = { style, pointerEvents: "box-none", children: tmpResult };
    tmpResult = null;
    View = ReanimatedRexport.View;
    if (null != arg0) {
      const obj2 = {};
      const merged = Object.assign(arg0);
      tmpResult = tmp(SettingsAppearanceChannelListPreviewNitroUpsellComponent, obj2);
    }
    return closure_1_10(View, obj);
  }, []);
  let obj2 = { useReducedMotion: stateFromStores, item: tmp5, entering: animationEntering, exiting: animationExiting, renderItem: callback };
  tmp5 = undefined;
  const tmp3 = authStore;
  const tmp4 = AnimatedEnterExitItemDefault;
  if (visible.visible) {
    tmp5 = visible;
  }
  return tmp3(tmp4, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelListPreviewNitroUpsell.tsx");

export default memoResult;
