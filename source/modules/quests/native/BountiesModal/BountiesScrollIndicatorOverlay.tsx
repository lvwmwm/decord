// Module ID: 13811
// Function ID: 104453
// Name: BountiesScrollIndicatorOverlay
// Dependencies: []
// Exports: default

// Module 13811 (BountiesScrollIndicatorOverlay)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const StyleSheet = arg1(dependencyMap[2]).StyleSheet;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = [];
let closure_9 = 5000 + arg1(dependencyMap[4]).timingSlowDuration;
const tmp2 = arg1(dependencyMap[3]);
let closure_10 = arg1(dependencyMap[5]).createStyles(() => {
  let obj = {};
  obj = { onTrackPress: "png", position: 273, left: 205, top: true, borderRadius: "lg", width: "primary", height: 0, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
  obj.scrollIndicator = obj;
  obj = { 9223372036854775807: "channelId", -9223372036854775808: "channelId", -9223372036854775808: "channelId", 9223372036854775807: "string", 9223372036854775807: "formatToPlainString", 0: "Text", gap: importDefault(dependencyMap[6]).space.PX_8 };
  obj.scrollIndicatorContent = obj;
  obj.scrollIndicatorText = { textAlign: "center" };
  return obj;
});
let closure_11 = { code: "function BountiesScrollIndicatorOverlayTsx1(){const{withTiming,visible,isActive,timingSlow,timingStandard,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visible?1:0,isActive?timingSlow:timingStandard,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}" };
let closure_12 = { code: "function BountiesScrollIndicatorOverlayTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
let closure_13 = { code: "function BountiesScrollIndicatorOverlayTsx3(){const{withTiming,visible,isEndCardVisible,isActive,timingStandard,timingSlow}=this.__closure;return{opacity:withTiming(visible&&!isEndCardVisible?1:0,isEndCardVisible||!isActive?timingStandard:timingSlow)};}" };
let closure_14 = { code: "function BountiesScrollIndicatorOverlayTsx4(){const{withTiming,visible,timingStandard}=this.__closure;return{transform:[{scale:withTiming(visible?1:0.9,timingStandard)}]};}" };
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorOverlay.tsx");

export default function BountiesScrollIndicatorOverlay(isActive) {
  isActive = isActive.isActive;
  const arg1 = isActive;
  const isEndCardVisible = isActive.isEndCardVisible;
  const importDefault = isEndCardVisible;
  let React;
  const tmp = callback4();
  const visible = function useAnimationTiming(enabled) {
    enabled = enabled.enabled;
    const isActive = enabled;
    const tmp = tmp3(callback.useState(true), 2);
    const isEndCardVisible = tmp2;
    const tmp3 = tmp3(callback.useState(enabled), 2);
    if (enabled !== tmp3[0]) {
      tmp3[1](enabled);
      if (enabled) {
        tmp2(true);
      }
    }
    const items = [enabled];
    const effect = callback.useEffect(() => {
      if (enabled) {
        function scheduleNext(arg0) {
          let timeout = arg0;
          let num = 5000;
          if (!arg0) {
            num = closure_9;
          }
          timeout = setTimeout(() => {
            callback(closure_0);
            callback(!closure_0);
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
  }({ enabled: isActive }).visible;
  const dependencyMap = visible;
  const tmp2 = callback(React.useState(visible), 2);
  let callback = tmp3;
  const tmp4 = callback(React.useState(visible), 2);
  if (visible !== tmp4[0]) {
    tmp4[1](visible);
    if (visible) {
      tmp3(true);
    }
  }
  callback = React.useCallback(() => {
    tmp3(false);
  }, []);
  React = callback;
  let obj = arg1(dependencyMap[7]);
  class B {
    constructor() {
      obj = {};
      obj2 = isActive(visible[8]);
      num = 0;
      if (visible) {
        num = 1;
      }
      tmp = isActive(visible[4]);
      tmp2 = isActive ? tmp.timingSlow : tmp.timingStandard;
      fn = function t() {
        callback(closure_2[7]).runOnJS(closure_4)();
      };
      obj = { runOnJS: isActive(visible[7]).runOnJS, animationCallbackJSThread: closure_4 };
      fn.__closure = obj;
      fn.__workletHash = 7847207274031;
      fn.__initData = closure_12;
      obj.opacity = obj2.withTiming(num, tmp2, "respect-motion-settings", fn);
      return obj;
    }
  }
  obj = { withTiming: arg1(dependencyMap[8]).withTiming, visible, isActive, timingSlow: arg1(dependencyMap[4]).timingSlow, timingStandard: arg1(dependencyMap[4]).timingStandard, runOnJS: arg1(dependencyMap[7]).runOnJS, animationCallbackJSThread: callback };
  B.__closure = obj;
  B.__workletHash = 22957586567;
  B.__initData = closure_11;
  const animatedStyle = obj.useAnimatedStyle(B);
  let obj2 = arg1(dependencyMap[7]);
  class E {
    constructor() {
      obj = {};
      obj2 = isActive(visible[8]);
      num = 0;
      if (visible) {
        tmp = isEndCardVisible;
        num = 0;
        if (!isEndCardVisible) {
          num = 1;
        }
      }
      if (!isEndCardVisible) {
        tmp2 = isActive;
        if (isActive) {
          tmp3 = isActive;
          tmp4 = visible;
          num2 = 4;
          timingStandard = isActive(visible[4]).timingSlow;
        }
        obj.opacity = obj2.withTiming(num, timingStandard);
        return obj;
      }
      timingStandard = isActive(visible[4]).timingStandard;
      return;
    }
  }
  obj = { withTiming: arg1(dependencyMap[8]).withTiming, visible, isEndCardVisible, isActive, timingStandard: arg1(dependencyMap[4]).timingStandard, timingSlow: arg1(dependencyMap[4]).timingSlow };
  E.__closure = obj;
  E.__workletHash = 4256710479074;
  E.__initData = closure_13;
  const animatedStyle1 = obj2.useAnimatedStyle(E);
  let obj4 = arg1(dependencyMap[7]);
  const fn = function j() {
    let obj = {};
    obj = {};
    let num = 0.9;
    if (visible) {
      num = 1;
    }
    obj.scale = isActive(visible[8]).withTiming(num, isActive(visible[4]).timingStandard);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { withTiming: arg1(dependencyMap[8]).withTiming, visible, timingStandard: arg1(dependencyMap[4]).timingStandard };
  fn.__workletHash = 4041303236067;
  fn.__initData = closure_14;
  const animatedStyle2 = obj4.useAnimatedStyle(fn);
  obj2 = { style: items, pointerEvents: "none" };
  const items = [tmp.scrollIndicator, isActive.opacityStyle];
  const obj3 = { style: items1 };
  const items1 = [StyleSheet.absoluteFill, animatedStyle1];
  obj4 = { colors: closure_8, style: StyleSheet.absoluteFill };
  obj3.children = callback2(importDefault(dependencyMap[9]), obj4);
  const items2 = [callback2(importDefault(dependencyMap[7]).View, obj3), ];
  const obj5 = { style: items3 };
  const items3 = [tmp.scrollIndicatorContent, ];
  const items4 = [animatedStyle, animatedStyle2];
  items3[1] = items4;
  const items5 = [callback2(importDefault(dependencyMap[10]), { visible, isFadingInContent: tmp2[0] }), ];
  const obj6 = { style: tmp.scrollIndicatorText };
  const intl = arg1(dependencyMap[12]).intl;
  obj6.children = intl.string(arg1(dependencyMap[12]).t.eafsh4);
  items5[1] = callback2(arg1(dependencyMap[11]).Text, obj6);
  obj5.children = items5;
  items2[1] = callback3(importDefault(dependencyMap[7]).View, obj5);
  obj2.children = items2;
  return callback3(importDefault(dependencyMap[7]).View, obj2);
};
