// Module ID: 14076
// Function ID: 106887
// Name: SettingsAppearanceChannelListPreviewNitroUpsellComponent
// Dependencies: []

// Module 14076 (SettingsAppearanceChannelListPreviewNitroUpsellComponent)
function SettingsAppearanceChannelListPreviewNitroUpsellComponent(theme) {
  theme = theme.theme;
  const arg1 = theme;
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const fn = function l() {
    let num = 1;
    if (theme.theme === constants3.LIGHT) {
      num = 0.5;
    }
    const obj = {};
    const merged = Object.assign(absoluteFillObject.absoluteFillObject);
    obj["opacity"] = theme(closure_2[7]).withSpring(num, theme(closure_2[8]).springStandard);
    return obj;
  };
  obj = { theme, ThemeTypes: closure_9, StyleSheet, withSpring: arg1(dependencyMap[7]).withSpring, springStandard: arg1(dependencyMap[8]).springStandard };
  fn.__closure = obj;
  fn.__workletHash = 16911565077998;
  fn.__initData = closure_20;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const analyticsLocations = importDefault(dependencyMap[11])(importDefault(dependencyMap[12]).CLIENT_THEMES_EDITOR).analyticsLocations;
  const importDefault = analyticsLocations;
  const items = [analyticsLocations];
  obj = { style: tmp.nitroUpsell };
  const callback = importAllResult.useCallback(() => {
    let obj = { premiumFeatureCardOrder: theme(closure_2[14]).PremiumFeatureCardOrder.TIER_2_LEADING };
    obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_CLIENT_THEMES };
    obj.analyticsLocation = obj;
    obj.analyticsLocations = analyticsLocations;
    analyticsLocations(closure_2[13])(obj);
  }, items);
  const items1 = [callback(closure_12, { style: animatedStyle, importantForAccessibility: "no-hide-descendants", colors: closure_13 }), ];
  const obj2 = {};
  const intl = arg1(dependencyMap[16]).intl;
  obj2.text = intl.string(arg1(dependencyMap[16]).t.pj0XBN);
  obj2.icon = callback(arg1(dependencyMap[17]).NitroWheel, { style: tmp.nitroWheelIcon });
  obj2.variant = "active";
  obj2.onPress = callback;
  obj2.size = "md";
  items1[1] = callback(arg1(dependencyMap[15]).Button, obj2);
  obj.children = items1;
  return callback2(View, obj);
}
const importAllResult = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const StyleSheet = tmp2.StyleSheet;
const View = tmp2.View;
let closure_6 = importDefault(dependencyMap[2]);
({ AnalyticsPages: closure_7, AnalyticsSections: closure_8, ThemeTypes: closure_9 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
let closure_12 = importDefault(dependencyMap[5]).createAnimatedComponent(importDefault(dependencyMap[6]));
let closure_13 = [null, null];
let closure_14 = { code: "function animationEntering_SettingsAppearanceChannelListPreviewNitroUpsellTsx1(visible){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard)};}" };
let closure_15 = () => {
  function animationEntering(targetHeight) {
    const obj = { opacity: callback(closure_2[7]).withSpring(targetHeight, callback(closure_2[8]).springStandard) };
    return obj;
  }
  animationEntering.__closure = { withSpring: arg1(dependencyMap[7]).withSpring, springStandard: arg1(dependencyMap[8]).springStandard };
  animationEntering.__workletHash = 2168112734281;
  animationEntering.__initData = closure_14;
  return animationEntering;
}();
let closure_16 = { code: "function animationExiting_SettingsAppearanceChannelListPreviewNitroUpsellTsx2(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}" };
let closure_17 = { code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx3(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}" };
let closure_18 = () => {
  function animationExiting(targetHeight, cleanUp) {
    const obj = {};
    const fn = function s(arg0) {
      if (null != arg1) {
        arg1(arg0);
      }
    };
    fn.__closure = { cleanUp };
    fn.__workletHash = 15025873527064;
    fn.__initData = closure_17;
    obj.opacity = cleanUp(closure_2[7]).withSpring(targetHeight, cleanUp(closure_2[8]).springStandard, "respect-motion-settings", fn);
    return obj;
  }
  animationExiting.__closure = { withSpring: arg1(dependencyMap[7]).withSpring, springStandard: arg1(dependencyMap[8]).springStandard };
  animationExiting.__workletHash = 12271101023923;
  animationExiting.__initData = closure_16;
  return animationExiting;
}();
const importDefaultResult = importDefault(dependencyMap[5]);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["borderBottomStartRadius"] = importDefault(dependencyMap[10]).radii.xl;
obj["borderBottomEndRadius"] = importDefault(dependencyMap[10]).radii.xl;
obj["height"] = 2 * importDefault(dependencyMap[10]).space.PX_96;
obj["padding"] = importDefault(dependencyMap[10]).space.PX_24;
obj["justifyContent"] = "flex-end";
obj["top"] = undefined;
obj["overflow"] = "hidden";
obj.nitroUpsell = obj;
const obj3 = arg1(dependencyMap[9]);
obj.nitroWheelIcon = { height: importDefault(dependencyMap[10]).space.PX_16, width: importDefault(dependencyMap[10]).space.PX_16 };
let closure_19 = obj3.createStyles(obj);
let closure_20 = { code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx4(){const{theme,ThemeTypes,StyleSheet,withSpring,springStandard}=this.__closure;const opacity=theme.theme===ThemeTypes.LIGHT?0.5:1;return{...StyleSheet.absoluteFillObject,opacity:withSpring(opacity,springStandard)};}" };
const obj1 = { height: importDefault(dependencyMap[10]).space.PX_16, width: importDefault(dependencyMap[10]).space.PX_16 };
const memoResult = importAllResult.memo(function SettingsAppearanceChannelListPreviewNitroUpsell(visible) {
  let obj = arg1(dependencyMap[18]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = importAllResult.useCallback((arg0, style) => {
    let obj = { style, pointerEvents: "box-none" };
    let tmp2 = null;
    if (null != arg0) {
      obj = {};
      const merged = Object.assign(arg0);
      tmp2 = callback2(closure_21, obj);
    }
    obj.children = tmp2;
    return callback2(callback(closure_2[5]).View, obj);
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
  return closure_10(importDefault(dependencyMap[19]), obj);
});
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelListPreviewNitroUpsell.tsx");

export default memoResult;
