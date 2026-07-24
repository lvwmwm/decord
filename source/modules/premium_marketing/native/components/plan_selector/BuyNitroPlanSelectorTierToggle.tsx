// Module ID: 12393
// Function ID: 96351
// Name: items
// Dependencies: [57, 31, 27, 6671, 1851, 33, 4130, 689, 3991, 4131, 4134, 4133, 4554, 668, 7431, 4099, 4100, 4126, 1212, 2]
// Exports: default

// Module 12393 (items)
import importDefaultResult from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import GuildFeatures from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_10;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
let tmp7;
let tmp8;
const require = arg1;
({ Pressable: closure_5, StyleSheet, View: closure_6 } = get_ActivityIndicator);
({ PREMIUM_TYPE_DISPLAY_NAME: closure_7, PremiumTypes: closure_8 } = GuildFeatures);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
[tmp7, tmp8] = importDefaultResult(require("items").Gradients.PREMIUM_TIER_2, 2);
let items = [tmp7, tmp8, tmp7, tmp8, tmp7];
let closure_12 = [0, 0.25, 0.5, 0.75, 1];
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, padding: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.pill = _createForOfIteratorHelperLoose;
const importDefaultResultResult = importDefaultResult(require("items").Gradients.PREMIUM_TIER_2, 2);
_createForOfIteratorHelperLoose.tab = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj2 = { position: "absolute", left: 0, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, overflow: "hidden" };
_createForOfIteratorHelperLoose.indicator = obj2;
let merged = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose.gradientLayer = {};
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4["right"] = undefined;
obj4["width"] = 240;
_createForOfIteratorHelperLoose.gradientTrack = obj4;
_createForOfIteratorHelperLoose.gradientFill = { flex: 1 };
_createForOfIteratorHelperLoose.tabText = { fontStyle: "italic" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_14 = { code: "function BuyNitroPlanSelectorTierToggleTsx1(){const{nitroProgress}=this.__closure;return{opacity:nitroProgress.get()};}" };
let closure_15 = { code: "function BuyNitroPlanSelectorTierToggleTsx2(){const{gradientFlowX}=this.__closure;return{transform:[{translateX:gradientFlowX.get()}]};}" };
let closure_16 = { code: "function BuyNitroPlanSelectorTierToggleTsx3(){const{indicatorX,indicatorWidth}=this.__closure;return{transform:[{translateX:indicatorX.get()}],width:indicatorWidth.get()};}" };
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj3 = {};
let result = require("get ActivityIndicator").fileFinishedImporting("modules/premium_marketing/native/components/plan_selector/BuyNitroPlanSelectorTierToggle.tsx");

export default function BuyNitroPlanSelectorTierToggle(selectedTier) {
  let dependencyMap;
  let gradientFadeStyle;
  let gradientFlowStyle;
  let importDefault;
  selectedTier = selectedTier.selectedTier;
  ({ setSelectedTier: importDefault, disabled: dependencyMap } = selectedTier);
  const tmp = _createForOfIteratorHelperLoose();
  ({ gradientFadeStyle, gradientFlowStyle } = (function useNitroGradientFlow(selectedTier) {
    selectedTier = tmp;
    let obj = selectedTier(outer1_2[8]);
    let num = 0;
    if (selectedTier !== sharedValue.TIER_0) {
      num = 1;
    }
    sharedValue = obj.useSharedValue(num);
    let items = [selectedTier !== sharedValue.TIER_0, sharedValue];
    const effect = React.useEffect(() => {
      let num = 0;
      if (closure_0) {
        num = 1;
      }
      const result = sharedValue.set(selectedTier(outer2_2[9]).withTiming(num, selectedTier(outer2_2[10]).timingStandard));
    }, items);
    const sharedValue1 = selectedTier(outer1_2[8]).useSharedValue(0);
    const items1 = [sharedValue1];
    const effect1 = React.useEffect(() => {
      const accessibilityPreferencesSharedValue = selectedTier(outer2_2[11]).accessibilityPreferencesSharedValue;
      if (!accessibilityPreferencesSharedValue.get().reduceMotion) {
        let obj = selectedTier(outer2_2[8]);
        obj = { duration: 5000, easing: selectedTier(outer2_2[8]).Easing.linear };
        const result = sharedValue1.set(obj.withRepeat(selectedTier(outer2_2[9]).withTiming(-120, obj), -1, false));
        return () => selectedTier(outer3_2[8]).cancelAnimation(outer1_2);
      }
    }, items1);
    obj = {};
    const obj2 = selectedTier(outer1_2[8]);
    const fn = function s() {
      return { opacity: sharedValue.get() };
    };
    fn.__closure = { nitroProgress: sharedValue };
    fn.__workletHash = 7392050192451;
    fn.__initData = outer1_14;
    obj.gradientFadeStyle = selectedTier(outer1_2[8]).useAnimatedStyle(fn);
    const obj4 = selectedTier(outer1_2[8]);
    const fn2 = function c() {
      let obj = {};
      obj = { translateX: sharedValue1.get() };
      const items = [obj];
      obj.transform = items;
      return obj;
    };
    fn2.__closure = { gradientFlowX: sharedValue1 };
    fn2.__workletHash = 14545174926033;
    fn2.__initData = outer1_15;
    obj.gradientFlowStyle = selectedTier(outer1_2[8]).useAnimatedStyle(fn2);
    return obj;
  })(selectedTier));
  const tmp3 = tmp(React.useState({}), 2);
  React = tmp3[1];
  let closure_5 = tmp4;
  const ref = React.useRef(null);
  const importDefaultResult = tmp;
  const tmp2 = (function useNitroGradientFlow(selectedTier) {
    selectedTier = tmp;
    let obj = selectedTier(outer1_2[8]);
    let num = 0;
    if (selectedTier !== sharedValue.TIER_0) {
      num = 1;
    }
    sharedValue = obj.useSharedValue(num);
    let items = [selectedTier !== sharedValue.TIER_0, sharedValue];
    const effect = React.useEffect(() => {
      let num = 0;
      if (closure_0) {
        num = 1;
      }
      const result = sharedValue.set(selectedTier(outer2_2[9]).withTiming(num, selectedTier(outer2_2[10]).timingStandard));
    }, items);
    const sharedValue1 = selectedTier(outer1_2[8]).useSharedValue(0);
    const items1 = [sharedValue1];
    const effect1 = React.useEffect(() => {
      const accessibilityPreferencesSharedValue = selectedTier(outer2_2[11]).accessibilityPreferencesSharedValue;
      if (!accessibilityPreferencesSharedValue.get().reduceMotion) {
        let obj = selectedTier(outer2_2[8]);
        obj = { duration: 5000, easing: selectedTier(outer2_2[8]).Easing.linear };
        const result = sharedValue1.set(obj.withRepeat(selectedTier(outer2_2[9]).withTiming(-120, obj), -1, false));
        return () => selectedTier(outer3_2[8]).cancelAnimation(outer1_2);
      }
    }, items1);
    obj = {};
    const obj2 = selectedTier(outer1_2[8]);
    const fn = function s() {
      return { opacity: sharedValue.get() };
    };
    fn.__closure = { nitroProgress: sharedValue };
    fn.__workletHash = 7392050192451;
    fn.__initData = outer1_14;
    obj.gradientFadeStyle = selectedTier(outer1_2[8]).useAnimatedStyle(fn);
    const obj4 = selectedTier(outer1_2[8]);
    const fn2 = function c() {
      let obj = {};
      obj = { translateX: sharedValue1.get() };
      const items = [obj];
      obj.transform = items;
      return obj;
    };
    fn2.__closure = { gradientFlowX: sharedValue1 };
    fn2.__workletHash = 14545174926033;
    fn2.__initData = outer1_15;
    obj.gradientFlowStyle = selectedTier(outer1_2[8]).useAnimatedStyle(fn2);
    return obj;
  })(selectedTier);
  let closure_7 = React.useRef(new Map());
  let obj = selectedTier(3991);
  let sharedValue = obj.useSharedValue(0);
  let obj1 = selectedTier(3991);
  let sharedValue1 = obj1.useSharedValue(0);
  let closure_10 = React.useRef(false);
  const layoutEffect = React.useLayoutEffect(() => {
    let current = ref.current;
    if (null != current) {
      current = ref.current;
      const item = current.forEach((measureLayout) => {
        let closure_0 = arg1;
        measureLayout.measureLayout(closure_0, (arg0, arg1, arg2, arg3) => {
          let closure_0 = arg0;
          let closure_1 = arg1;
          let closure_2 = arg2;
          let closure_3 = arg3;
          outer2_4((arg0) => {
            let obj = {};
            const merged = Object.assign(arg0);
            obj = { x: closure_0, y: closure_1, width: closure_2, height: closure_3 };
            obj[closure_0] = obj;
            return obj;
          });
        });
      });
    }
  }, []);
  let items = [tmp3[0][selectedTier], sharedValue, sharedValue1];
  const layoutEffect1 = React.useLayoutEffect(() => {
    if (null != tmp4) {
      if (ref2.current) {
        let obj = selectedTier(outer1_2[9]);
        obj = { duration: 220 };
        const result = sharedValue.set(obj.withTiming(tmp4.x, obj));
        obj = { duration: 220 };
        const result1 = sharedValue1.set(selectedTier(outer1_2[9]).withTiming(tmp4.width, obj));
        const obj3 = selectedTier(outer1_2[9]);
      } else {
        ref2.current = true;
        const result2 = sharedValue.set(tmp4.x);
        const result3 = sharedValue1.set(tmp4.width);
      }
    }
  }, items);
  selectedTier(3991);
  let fn = function k() {
    let obj = {};
    obj = { translateX: sharedValue.get() };
    const items = [obj];
    obj.transform = items;
    obj.width = sharedValue1.get();
    return obj;
  };
  fn.__closure = { indicatorX: sharedValue, indicatorWidth: sharedValue1 };
  fn.__workletHash = 16235876189557;
  fn.__initData = closure_16;
  obj = { ref, style: tmp.pill, accessibilityRole: "tablist" };
  let tmp15 = null != tmp4;
  if (tmp15) {
    obj = { pointerEvents: "none" };
    let items1 = [tmp.indicator, , ];
    obj1 = {};
    ({ y: obj5.top, height: obj5.height } = tmp4);
    items1[1] = obj1;
    items1[2] = tmp12;
    obj.style = items1;
    let obj2 = {};
    const items2 = [tmp.gradientLayer, gradientFadeStyle];
    obj2.style = items2;
    let obj3 = {};
    const items3 = [tmp.gradientTrack, gradientFlowStyle];
    obj3.style = items3;
    let obj4 = { colors: items, locations: closure_12, start: selectedTier(668).HorizontalGradient.START, end: selectedTier(668).HorizontalGradient.END, style: tmp.gradientFill };
    obj3.children = sharedValue1(importDefault(4554), obj4);
    obj2.children = sharedValue1(importDefault(3991).View, obj3);
    obj.children = sharedValue1(importDefault(3991).View, obj2);
    tmp15 = sharedValue1(importDefault(3991).View, obj);
    const tmp19 = importDefault(4554);
  }
  const items4 = [tmp15, ];
  const NITRO_PLAN_TIERS = selectedTier(7431).NITRO_PLAN_TIERS;
  items4[1] = NITRO_PLAN_TIERS.map((arg0) => {
    let closure_0 = arg0;
    let str = "text-muted";
    if (arg0 === closure_0) {
      let str2 = "interactive-text-active";
      if (arg0 !== tmp2) {
        str2 = "text-overlay-light";
      }
      str = str2;
    }
    obj = {
      ref(arg0) {
        if (null != arg0) {
          const current = outer1_7.current;
          const result = current.set(closure_0, arg0);
        }
      },
      style: tmp.tab,
      disabled: closure_2,
      onPress() {
        const result = selectedTier(outer2_2[15]).triggerHapticFeedback(outer2_1(outer2_2[16]).SELECTION);
        outer1_1(closure_0);
      },
      accessibilityRole: "tab",
      accessibilityState: obj
    };
    obj = { selected: tmp, disabled: closure_2 };
    obj = { variant: "heading-sm/extrabold", color: str, style: arg0 === closure_0.tabText };
    const intl = selectedTier(outer1_2[18]).intl;
    if (arg0 === sharedValue.TIER_0) {
      let tUbSDK = selectedTier(outer1_2[18]).t.tUbSDK;
    } else {
      tUbSDK = ref[arg0];
    }
    obj.children = intl.string(tUbSDK).toUpperCase();
    obj.children = sharedValue1(selectedTier(outer1_2[17]).Text, obj);
    return sharedValue1(closure_5, obj, arg0);
  });
  obj.children = items4;
  return closure_10(ref, obj);
};
