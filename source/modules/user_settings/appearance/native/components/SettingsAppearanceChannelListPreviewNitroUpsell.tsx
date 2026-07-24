// Module ID: 14240
// Function ID: 109366
// Name: SettingsAppearanceChannelListPreviewNitroUpsellComponent
// Dependencies: [31, 27, 4122, 653, 33, 3991, 4554, 4542, 4546, 4130, 689, 5462, 5482, 8183, 8059, 4543, 1212, 1273, 566, 8614, 2]

// Module 14240 (SettingsAppearanceChannelListPreviewNitroUpsellComponent)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import LinearGradient from "LinearGradient";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function SettingsAppearanceChannelListPreviewNitroUpsellComponent(theme) {
  theme = theme.theme;
  const tmp = callback3();
  let obj = theme(3991);
  const fn = function l() {
    let num = 1;
    if (theme.theme === outer1_9.LIGHT) {
      num = 0.5;
    }
    const obj = {};
    const merged = Object.assign(outer1_4.absoluteFillObject);
    obj["opacity"] = theme(outer1_2[7]).withSpring(num, theme(outer1_2[8]).springStandard);
    return obj;
  };
  obj = { theme, ThemeTypes: closure_9, StyleSheet, withSpring: theme(4542).withSpring, springStandard: theme(4546).springStandard };
  fn.__closure = obj;
  fn.__workletHash = 16911565077998;
  fn.__initData = closure_20;
  const animatedStyle = obj.useAnimatedStyle(fn);
  analyticsLocations = analyticsLocations(5462)(analyticsLocations(5482).CLIENT_THEMES_EDITOR).analyticsLocations;
  const items = [analyticsLocations];
  obj = { style: tmp.nitroUpsell };
  const callback = importAllResult.useCallback(() => {
    let obj = { premiumFeatureCardOrder: theme(outer1_2[14]).PremiumFeatureCardOrder.TIER_2_LEADING };
    obj = { page: outer1_7.USER_SETTINGS, section: outer1_8.SETTINGS_CLIENT_THEMES };
    obj.analyticsLocation = obj;
    obj.analyticsLocations = analyticsLocations;
    analyticsLocations(outer1_2[13])(obj);
  }, items);
  const items1 = [callback(LinearGradient, { style: animatedStyle, importantForAccessibility: "no-hide-descendants", colors: closure_13 }), ];
  const obj2 = {};
  const intl = theme(1212).intl;
  obj2.text = intl.string(theme(1212).t.pj0XBN);
  obj2.icon = callback(theme(1273).NitroWheel, { style: tmp.nitroWheelIcon });
  obj2.variant = "active";
  obj2.onPress = callback;
  obj2.size = "md";
  items1[1] = callback(theme(4543).Button, obj2);
  obj.children = items1;
  return callback2(View, obj);
}
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
({ AnalyticsPages: closure_7, AnalyticsSections: closure_8, ThemeTypes: closure_9 } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_13 = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"];
let closure_14 = { code: "function animationEntering_SettingsAppearanceChannelListPreviewNitroUpsellTsx1(visible){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard)};}" };
let closure_15 = (() => {
  function animationEntering(value) {
    const obj = { opacity: outer1_0(outer1_2[7]).withSpring(value, outer1_0(outer1_2[8]).springStandard) };
    return obj;
  }
  animationEntering.__closure = { withSpring: require(4542) /* withSpring */.withSpring, springStandard: require(4546) /* SUBTLE_SPRING */.springStandard };
  animationEntering.__workletHash = 2168112734281;
  animationEntering.__initData = closure_14;
  return animationEntering;
})();
let closure_16 = { code: "function animationExiting_SettingsAppearanceChannelListPreviewNitroUpsellTsx2(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}" };
let closure_17 = { code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx3(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}" };
let closure_18 = (() => {
  function animationExiting(value, cleanUp) {
    let closure_0 = cleanUp;
    const obj = {};
    const fn = function s(arg0) {
      if (null != cleanUp) {
        cleanUp(arg0);
      }
    };
    fn.__closure = { cleanUp };
    fn.__workletHash = 15025873527064;
    fn.__initData = outer1_17;
    obj.opacity = outer1_0(outer1_2[7]).withSpring(value, outer1_0(outer1_2[8]).springStandard, "respect-motion-settings", fn);
    return obj;
  }
  animationExiting.__closure = { withSpring: require(4542) /* withSpring */.withSpring, springStandard: require(4546) /* SUBTLE_SPRING */.springStandard };
  animationExiting.__workletHash = 12271101023923;
  animationExiting.__initData = closure_16;
  return animationExiting;
})();
let obj = {};
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj["borderBottomStartRadius"] = require("_createForOfIteratorHelperLoose").radii.xl;
obj["borderBottomEndRadius"] = require("_createForOfIteratorHelperLoose").radii.xl;
obj["height"] = 2 * require("_createForOfIteratorHelperLoose").space.PX_96;
obj["padding"] = require("_createForOfIteratorHelperLoose").space.PX_24;
obj["justifyContent"] = "flex-end";
obj["top"] = undefined;
obj["overflow"] = "hidden";
obj.nitroUpsell = obj;
obj.nitroWheelIcon = { height: require("_createForOfIteratorHelperLoose").space.PX_16, width: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_19 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_20 = { code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx4(){const{theme,ThemeTypes,StyleSheet,withSpring,springStandard}=this.__closure;const opacity=theme.theme===ThemeTypes.LIGHT?0.5:1;return{...StyleSheet.absoluteFillObject,opacity:withSpring(opacity,springStandard)};}" };
const obj1 = { height: require("_createForOfIteratorHelperLoose").space.PX_16, width: require("_createForOfIteratorHelperLoose").space.PX_16 };
const memoResult = importAllResult.memo(function SettingsAppearanceChannelListPreviewNitroUpsell(visible) {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.useReducedMotion);
  const callback = importAllResult.useCallback((arg0, style) => {
    let obj = { style, pointerEvents: "box-none" };
    let tmp2 = null;
    if (null != arg0) {
      obj = {};
      const merged = Object.assign(arg0);
      tmp2 = outer1_10(outer1_21, obj);
    }
    obj.children = tmp2;
    return outer1_10(outer1_1(outer1_2[5]).View, obj);
  }, []);
  obj = { useReducedMotion: stateFromStores };
  let tmp5;
  if (visible.visible) {
    tmp5 = visible;
  }
  obj.item = tmp5;
  obj.entering = closure_15;
  obj.exiting = closure_18;
  obj.renderItem = callback;
  return closure_10(importDefault(8614), obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelListPreviewNitroUpsell.tsx");

export default memoResult;
