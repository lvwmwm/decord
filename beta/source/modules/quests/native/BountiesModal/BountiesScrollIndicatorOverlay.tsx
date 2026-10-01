// Module ID: 14575
// Function ID: 14576
// Name: BountiesScrollIndicatorOverlay
// Dependencies: [32, 19, 17, 21, 4840, 4836, 576, 4566, 4837, 5293, 14576, 4832, 1115, 2]
// Exports: default

// Module 14575 (BountiesScrollIndicatorOverlay)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_0, dependencyMap;

let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
const StyleSheet = react_native.StyleSheet;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0.7)", "rgba(0,0,0,1)"];
let closure_9 = 5000 + timingPresets.timingSlowDuration;
let closure_10 = createStyles.createStyles(() => {
  let rect;
  let rect1;
  const obj = { scrollIndicator: rect, scrollIndicatorContent: rect1, scrollIndicatorText: { textAlign: "center" } };
  rect = { position: "absolute", left: 0, right: 0, bottom: 0, height: "45%", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  rect1 = { position: "absolute", bottom: 124, left: 0, right: 0, alignItems: "center", justifyContent: "flex-start", gap: nativeDefault.space.PX_8 };
  return obj;
});
const __initData = { code: "function BountiesScrollIndicatorOverlayTsx1(){const{withTiming,visible,enabled,timingSlow,timingStandard,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visible?1:0,enabled?timingSlow:timingStandard,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}" };
const __initData2 = { code: "function BountiesScrollIndicatorOverlayTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
const __initData3 = { code: "function BountiesScrollIndicatorOverlayTsx3(){const{withTiming,visible,isEndCardVisible,enabled,timingStandard,timingSlow}=this.__closure;return{opacity:withTiming(visible&&!isEndCardVisible?1:0,isEndCardVisible||!enabled?timingStandard:timingSlow)};}" };
const __initData4 = { code: "function BountiesScrollIndicatorOverlayTsx4(){const{withTiming,visible,timingStandard}=this.__closure;return{transform:[{scale:withTiming(visible?1:0.9,timingStandard)}]};}" };
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorOverlay.tsx");

export default function BountiesScrollIndicatorOverlay(enabled) {
  let closure_2;
  let closure_3;
  let first;
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  let items6;
  let obj10;
  let tmp5;
  enabled = enabled.enabled;
  const isEndCardVisible = enabled.isEndCardVisible;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  animationCallbackJSThread = undefined;
  const opacityStyle = enabled.opacityStyle;
  let tmp = closure_10();
  let obj = animationCallbackJSThread;
  [first, tmp5] = animationCallbackJSThread.useState(true);
  let closure_1 = tmp5;
  let tmp6 = _slicedToArray(animationCallbackJSThread.useState(enabled), 2);
  if (enabled !== tmp6[0]) {
    tmp6[1](enabled);
    if (enabled) {
      tmp5(true);
    }
  }
  let items = [enabled];
  const effect = obj.useEffect(() => {
    let timeout;
    const f127779 = () => {
      isEndCardVisible(closure_0);
      closure_0 = !closure_0;
      let num = 5000;
      const _setTimeout = setTimeout;
      if (closure_0) {
        num = closure_2_9;
      }
      enabled = _setTimeout(f127779, num);
    };
    const tmp = timeout;
    if (tmp) {
      let c0 = false;
      let _setTimeout = setTimeout;
      timeout = setTimeout(f127779, closure_1_9);
      return () => clearTimeout(closure_0);
    }
  }, items);
  dependencyMap = tmp10;
  const tmp2Result = _slicedToArray(obj.useState(enabled && first), 2);
  _slicedToArray = tmp13;
  const first1 = tmp2Result[0];
  const tmp2Result2 = _slicedToArray(obj.useState(enabled && first), 2);
  if ((enabled && first) !== tmp2Result2[0]) {
    tmp2Result2[1](enabled && first);
    if (enabled && first) {
      tmp2Result[1](true);
    }
  }
  animationCallbackJSThread = obj.useCallback(() => {
    closure_3(false);
  }, []);
  const obj2 = enabled(4566);
  class E {
    constructor() {
      let fn;
      let tmp5;
      let num = 0;
      const withTiming = timing.withTiming;
      timing;
      if (closure_2) {
        num = 1;
      }
      const tmpResult = timingPresets;
      let obj = { opacity: withTiming(num, tmp5, "respect-motion-settings", fn) };
      fn = function t() {
        const obj = enabled(closure_2[7]);
        obj.runOnJS(animationCallbackJSThread)();
      };
      tmp5 = enabled ? tmpResult.timingSlow : tmpResult.timingStandard;
      fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, animationCallbackJSThread };
      fn.__workletHash = 7847207274031;
      fn.__initData = __initData;
      ({ runOnJS: ReanimatedRexport.runOnJS, animationCallbackJSThread });
      return obj;
    }
  }
  E.__closure = { withTiming: enabled(4837).withTiming, visible: enabled && first, enabled, timingSlow: enabled(4840).timingSlow, timingStandard: enabled(4840).timingStandard, runOnJS: enabled(4566).runOnJS, animationCallbackJSThread };
  E.__workletHash = 2813930896935;
  E.__initData = __initData;
  ({ withTiming: enabled(4837).withTiming, visible: enabled && first, enabled, timingSlow: enabled(4840).timingSlow, timingStandard: enabled(4840).timingStandard, runOnJS: enabled(4566).runOnJS, animationCallbackJSThread });
  const animatedStyle = obj2.useAnimatedStyle(E);
  let fn = function j() {
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (closure_2) {
      num = 0;
      if (!isEndCardVisible) {
        num = 1;
      }
    }
    const tmp5 = isEndCardVisible;
    if (!tmp5) {
      let timingStandard;
      const tmp6 = enabled;
      if (tmp6) {
        timingStandard = tmp(4840).timingSlow;
      }
      const obj = { opacity: withTiming(num, timingStandard) };
      return obj;
    }
    timingStandard = tmp(4840).timingStandard;
  };
  const obj4 = enabled(4566);
  fn.__closure = { withTiming: enabled(4837).withTiming, visible: enabled && first, isEndCardVisible, enabled, timingStandard: enabled(4840).timingStandard, timingSlow: enabled(4840).timingSlow };
  fn.__workletHash = 12172713560290;
  fn.__initData = __initData3;
  ({ withTiming: enabled(4837).withTiming, visible: enabled && first, isEndCardVisible, enabled, timingStandard: enabled(4840).timingStandard, timingSlow: enabled(4840).timingSlow });
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  const obj6 = enabled(4566);
  class A {
    constructor() {
      let items;
      let num = 0.9;
      const withTiming = timing.withTiming;
      timing;
      if (closure_2) {
        num = 1;
      }
      const obj = { transform: items };
      items = [{ scale: withTiming(num, tmp(4840).timingStandard) }];
      ({ scale: withTiming(num, timingPresets.timingStandard) });
      return obj;
    }
  }
  A.__closure = { withTiming: enabled(4837).withTiming, visible: enabled && first, timingStandard: enabled(4840).timingStandard };
  A.__workletHash = 4041303236067;
  A.__initData = __initData4;
  ({ withTiming: enabled(4837).withTiming, visible: enabled && first, timingStandard: enabled(4840).timingStandard });
  const animatedStyle2 = obj6.useAnimatedStyle(A);
  const obj8 = { style: items1, pointerEvents: "none", children: items3 };
  items1 = [tmp.scrollIndicator, opacityStyle];
  const View = isEndCardVisible(4566).View;
  const obj9 = { style: items2, children: closure_6(isEndCardVisible(5293), obj10) };
  items2 = [StyleSheet.absoluteFill, animatedStyle1];
  const View2 = isEndCardVisible(4566).View;
  obj10 = { colors, style: StyleSheet.absoluteFill };
  items3 = [closure_6(View2, obj9), ];
  const obj11 = { style: items4, children: items6 };
  items4 = [tmp.scrollIndicatorContent, ];
  const items5 = [animatedStyle, animatedStyle2];
  items4[1] = items5;
  const View3 = isEndCardVisible(4566).View;
  items6 = [closure_6(isEndCardVisible(14576), { visible: enabled && first, isFadingInContent: first1 }), ];
  const obj12 = { variant: "text-sm/semibold", color: "text-default", style: tmp.scrollIndicatorText, children: intl.string(enabled(1115).t.eafsh4) };
  const Text = enabled(4832).Text;
  intl = enabled(1115).intl;
  items6[1] = closure_6(Text, obj12);
  items3[1] = closure_7(View3, obj11);
  return closure_7(View, obj8);
};
