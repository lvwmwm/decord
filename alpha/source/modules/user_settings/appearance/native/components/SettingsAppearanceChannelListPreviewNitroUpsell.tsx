// Module ID: 17604
// Function ID: 17605
// Name: SettingsAppearanceChannelListPreviewNitroUpsell
// Dependencies: [19, 17, 5141, 1072, 21, 1652, 5715, 5761, 5762, 5140, 575, 7387, 7412, 10027, 10028, 5758, 1113, 1187, 504, 10082, 2]

// Module 17604 (SettingsAppearanceChannelListPreviewNitroUpsell)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import LinearGradientDefault from "LinearGradient" /* 5715 */;
import spring_spring from "spring/spring" /* 5761 */;
import springPresets from "springPresets" /* 5762 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7387 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7412 */;
import openPremiumModalDefault from "openPremiumModal" /* 10027 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10028 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 10082 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let size;
let tmp10;
let tmp11;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
let unpackModuleId;
function SettingsAppearanceChannelListPreviewNitroUpsellComponent(theme) {
  let intl;
  let items3;
  let obj4;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let analyticsLocations;
  theme = theme.theme;
  let tmp = closure_16();
  const items = [closure_17, theme, closure_9, StyleSheet, , ];
  const useAnimatedStyle = analyticsLocations(1652).useAnimatedStyle;
  analyticsLocations(1652);
  items[4] = analyticsLocations(5761).withSpring;
  items[5] = analyticsLocations(5762).springStandard;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  class SettingsAppearanceChannelListPreviewNitroUpsellTsx4 {
    constructor() {
      let num = 1;
      if (_undefined.theme === _undefined2.LIGHT) {
        num = 0.5;
      }
      const obj = { opacity: _undefined4(num, c4) };
      const merged = Object.assign(_undefined3.absoluteFillObject);
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
  SettingsAppearanceChannelListPreviewNitroUpsellTsx4.__closure = items1;
  SettingsAppearanceChannelListPreviewNitroUpsellTsx4.__workletHash = 15416580407479;
  SettingsAppearanceChannelListPreviewNitroUpsellTsx4.__initData = tmp5;
  const animatedStyle = useAnimatedStyle(SettingsAppearanceChannelListPreviewNitroUpsellTsx4);
  const tmp12 = useAnalyticsLocationsDefault;
  analyticsLocations = tmp12(AnalyticsLocationDefault.CLIENT_THEMES_EDITOR).analyticsLocations;
  const items2 = [analyticsLocations];
  let obj = { style: tmp.nitroUpsell, children: items3 };
  let obj2 = { style: animatedStyle, importantForAccessibility: "no-hide-descendants", colors };
  const callback = react.useCallback(() => {
    let obj2;
    const obj = { premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING, analyticsLocation: obj2, analyticsLocations };
    obj2 = { page: metroImportDefault.USER_SETTINGS, section: metroImportAll.SETTINGS_CLIENT_THEMES };
    const tmp = openPremiumModalDefault;
    tmp(obj);
  }, items2);
  items3 = [closure_10(LinearGradient, obj2), ];
  const obj3 = { text: intl.string(analyticsLocations(1113).t.pj0XBN), icon: closure_10(analyticsLocations(1187).NitroWheel, obj4), variant: "active", onPress: callback, size: "md" };
  const Button = tmp2(5758).Button;
  intl = tmp2(1113).intl;
  obj4 = { style: tmp.nitroWheelIcon };
  items3[1] = closure_10(Button, obj3);
  return closure_11(View, obj);
}
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
({ AnalyticsPages: metroImportDefault, AnalyticsSections: metroImportAll, ThemeTypes: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const LinearGradient = module_1652.createAnimatedComponent(LinearGradientDefault);
const colors = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"];
let items = [{ code: "(function animationEntering_SettingsAppearanceChannelListPreviewNitroUpsellTsx1(visible){let[withSpring,springStandard]=this.__closure;return{opacity:withSpring(visible,springStandard)};})" }, spring_spring.withSpring, springPresets.springStandard];
[tmp5, tmp6, tmp7] = items;
function animationEntering(arg0) {
  const obj = { opacity: _undefined(arg0, c1) };
  return obj;
}
let items1 = [tmp6, tmp7];
animationEntering.__closure = items1;
animationEntering.__workletHash = 2802270631824;
animationEntering.__initData = tmp5;
let items2 = [{ code: "(function animationExiting_SettingsAppearanceChannelListPreviewNitroUpsellTsx3(visible,cleanUp){let[withSpring,springStandard,_worklet_1236385840160_init_data]=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function animationExiting_SettingsAppearanceChannelListPreviewNitroUpsellTsx3([_worklet_1236385840160_init_data,cleanUp]){const SettingsAppearanceChannelListPreviewNitroUpsellTsx2=function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);};SettingsAppearanceChannelListPreviewNitroUpsellTsx2.__closure=[cleanUp];SettingsAppearanceChannelListPreviewNitroUpsellTsx2.__workletHash=1236385840160;SettingsAppearanceChannelListPreviewNitroUpsellTsx2.__initData=_worklet_1236385840160_init_data;return SettingsAppearanceChannelListPreviewNitroUpsellTsx2;}([_worklet_1236385840160_init_data,cleanUp]))};})" }, spring_spring.withSpring, springPresets.springStandard, { code: "(function SettingsAppearanceChannelListPreviewNitroUpsellTsx2(finished){let[cleanUp]=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);})" }];
let c0;
let c1;
let c2;
[tmp8, tmp9, tmp10, tmp11] = items2;
function animationExiting(arg0, arg1) {
  let tmp2;
  let tmp3;
  const tmp = c1;
  const items = [c2, arg1];
  [tmp2, tmp3] = items;
  const obj = { opacity: _undefined(arg0, tmp, "respect-motion-settings", SettingsAppearanceChannelListPreviewNitroUpsellTsx2) };
  class SettingsAppearanceChannelListPreviewNitroUpsellTsx2 {
    constructor(arg0) {
      if (closure_0 != null) {
        tmp2 = arg0;
        tmpResult = tmp(arg0);
      }
      return;
    }
  }
  const items1 = [tmp3];
  SettingsAppearanceChannelListPreviewNitroUpsellTsx2.__closure = items1;
  SettingsAppearanceChannelListPreviewNitroUpsellTsx2.__workletHash = 1236385840160;
  SettingsAppearanceChannelListPreviewNitroUpsellTsx2.__initData = tmp2;
  return obj;
}
let items3 = [tmp9, tmp10, tmp11];
animationExiting.__closure = items3;
animationExiting.__workletHash = 2573458161713;
animationExiting.__initData = tmp8;
let createStyles = createStyles_mod;
let obj = { nitroUpsell: obj2, nitroWheelIcon: size };
obj2 = { borderBottomStartRadius: nativeDefault.radii.xl, borderBottomEndRadius: nativeDefault.radii.xl, height: 2 * nativeDefault.space.PX_96, padding: nativeDefault.space.PX_24, justifyContent: "flex-end", top: undefined, overflow: "hidden" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
size = { height: nativeDefault.space.PX_16, width: nativeDefault.space.PX_16 };
let closure_16 = createStyles(obj);
let closure_17 = { code: "(function SettingsAppearanceChannelListPreviewNitroUpsellTsx4(){let[theme,ThemeTypes,StyleSheet,withSpring,springStandard]=this.__closure;const opacity=theme.theme===ThemeTypes.LIGHT?0.5:1;return{...StyleSheet.absoluteFillObject,opacity:withSpring(opacity,springStandard)};})" };
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
    View = module_1652.View;
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
