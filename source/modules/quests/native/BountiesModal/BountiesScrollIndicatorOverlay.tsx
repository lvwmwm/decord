// Module ID: 13986
// Function ID: 107005
// Name: BountiesScrollIndicatorOverlay
// Dependencies: [57, 31, 27, 33, 4134, 4130, 689, 3991, 4131, 4554, 13987, 4126, 1212, 2]
// Exports: default

// Module 13986 (BountiesScrollIndicatorOverlay)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { StyleSheet } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = ["rgba(0,0,0,0)", "rgba(0,0,0,0.7)", "rgba(0,0,0,1)"];
let closure_9 = 5000 + require("timingNone").timingSlowDuration;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { position: "absolute", left: 0, right: 0, bottom: 0, height: "45%", alignItems: "center", justifyContent: "center", paddingHorizontal: importDefault(689).space.PX_16 };
  obj.scrollIndicator = obj;
  obj = { position: "absolute", bottom: 124, left: 0, right: 0, alignItems: "center", justifyContent: "flex-start", gap: importDefault(689).space.PX_8 };
  obj.scrollIndicatorContent = obj;
  obj.scrollIndicatorText = { textAlign: "center" };
  return obj;
});
let closure_11 = { code: "function BountiesScrollIndicatorOverlayTsx1(){const{withTiming,visible,enabled,timingSlow,timingStandard,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visible?1:0,enabled?timingSlow:timingStandard,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}" };
let closure_12 = { code: "function BountiesScrollIndicatorOverlayTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
let closure_13 = { code: "function BountiesScrollIndicatorOverlayTsx3(){const{withTiming,visible,isEndCardVisible,enabled,timingStandard,timingSlow}=this.__closure;return{opacity:withTiming(visible&&!isEndCardVisible?1:0,isEndCardVisible||!enabled?timingStandard:timingSlow)};}" };
let closure_14 = { code: "function BountiesScrollIndicatorOverlayTsx4(){const{withTiming,visible,timingStandard}=this.__closure;return{transform:[{scale:withTiming(visible?1:0.9,timingStandard)}]};}" };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorOverlay.tsx");

export default function BountiesScrollIndicatorOverlay(enabled) {
  enabled = enabled.enabled;
  let isEndCardVisible = enabled.isEndCardVisible;
  let callback;
  let tmp = callback4();
  const visible = (function useAnimationTiming(enabled) {
    enabled = enabled.enabled;
    const tmp = tmp3(callback.useState(true), 2);
    const isEndCardVisible = tmp2;
    tmp3 = tmp3(callback.useState(enabled), 2);
    if (enabled !== tmp3[0]) {
      tmp3[1](enabled);
      if (enabled) {
        tmp2(true);
      }
    }
    const items = [enabled];
    const effect = callback.useEffect(() => {
      if (enabled) {
        function scheduleNext(closure_0) {
          let timeout = closure_0;
          let num = 5000;
          if (!closure_0) {
            num = outer3_9;
          }
          timeout = setTimeout(() => {
            scheduleNext(closure_0);
            outer1_1(!closure_0);
          }, num);
        }
        scheduleNext(false);
        return () => clearTimeout(closure_0);
      }
    }, items);
    const obj = {};
    if (enabled) {
      enabled = tmp[0];
    }
    obj.visible = enabled;
    return obj;
  })({ enabled }).visible;
  const tmp2 = callback(callback.useState(visible), 2);
  callback = tmp3;
  const tmp4 = callback(callback.useState(visible), 2);
  if (visible !== tmp4[0]) {
    tmp4[1](visible);
    if (visible) {
      tmp3(true);
    }
  }
  callback = callback.useCallback(() => {
    tmp3(false);
  }, []);
  let obj = enabled(visible[7]);
  class E {
    constructor() {
      obj = {};
      obj2 = enabled(visible[8]);
      num = 0;
      if (visible) {
        num = 1;
      }
      tmp = enabled(visible[4]);
      tmp2 = enabled ? tmp.timingSlow : tmp.timingStandard;
      fn = function t() {
        enabled(visible[7]).runOnJS(outer1_4)();
      };
      obj = { runOnJS: enabled(visible[7]).runOnJS, animationCallbackJSThread: c4 };
      fn.__closure = obj;
      fn.__workletHash = 7847207274031;
      fn.__initData = outer1_12;
      obj.opacity = obj2.withTiming(num, tmp2, "respect-motion-settings", fn);
      return obj;
    }
  }
  obj = { withTiming: enabled(visible[8]).withTiming, visible, enabled, timingSlow: enabled(visible[4]).timingSlow, timingStandard: enabled(visible[4]).timingStandard, runOnJS: enabled(visible[7]).runOnJS, animationCallbackJSThread: callback };
  E.__closure = obj;
  E.__workletHash = 2813930896935;
  E.__initData = closure_11;
  const animatedStyle = obj.useAnimatedStyle(E);
  let obj2 = enabled(visible[7]);
  let fn = function j() {
    const obj = {};
    let num = 0;
    if (visible) {
      num = 0;
      if (!isEndCardVisible) {
        num = 1;
      }
    }
    if (!isEndCardVisible) {
      if (enabled) {
        let timingStandard = enabled(visible[4]).timingSlow;
      }
      obj.opacity = obj2.withTiming(num, timingStandard);
      return obj;
    }
    timingStandard = enabled(visible[4]).timingStandard;
  };
  obj = { withTiming: enabled(visible[8]).withTiming, visible, isEndCardVisible, enabled, timingStandard: enabled(visible[4]).timingStandard, timingSlow: enabled(visible[4]).timingSlow };
  fn.__closure = obj;
  fn.__workletHash = 12172713560290;
  fn.__initData = closure_13;
  const animatedStyle1 = obj2.useAnimatedStyle(fn);
  let obj4 = enabled(visible[7]);
  class A {
    constructor() {
      obj = {};
      obj = {};
      obj3 = enabled(visible[8]);
      num = 0.9;
      if (visible) {
        num = 1;
      }
      obj.scale = obj3.withTiming(num, enabled(visible[4]).timingStandard);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  A.__closure = { withTiming: enabled(visible[8]).withTiming, visible, timingStandard: enabled(visible[4]).timingStandard };
  A.__workletHash = 4041303236067;
  A.__initData = closure_14;
  const animatedStyle2 = obj4.useAnimatedStyle(A);
  obj2 = { style: items, pointerEvents: "none" };
  items = [tmp.scrollIndicator, enabled.opacityStyle];
  const obj3 = { style: items1 };
  items1 = [StyleSheet.absoluteFill, animatedStyle1];
  obj4 = { colors: closure_8, style: StyleSheet.absoluteFill };
  obj3.children = callback2(isEndCardVisible(visible[9]), obj4);
  const items2 = [callback2(isEndCardVisible(visible[7]).View, obj3), ];
  const obj5 = { style: items3 };
  items3 = [tmp.scrollIndicatorContent, ];
  const items4 = [animatedStyle, animatedStyle2];
  items3[1] = items4;
  const items5 = [callback2(isEndCardVisible(visible[10]), { visible, isFadingInContent: tmp2[0] }), ];
  const obj6 = { variant: "text-sm/semibold", color: "text-default", style: tmp.scrollIndicatorText };
  const intl = enabled(visible[12]).intl;
  obj6.children = intl.string(enabled(visible[12]).t.eafsh4);
  items5[1] = callback2(enabled(visible[11]).Text, obj6);
  obj5.children = items5;
  items2[1] = callback3(isEndCardVisible(visible[7]).View, obj5);
  obj2.children = items2;
  return callback3(isEndCardVisible(visible[7]).View, obj2);
};
