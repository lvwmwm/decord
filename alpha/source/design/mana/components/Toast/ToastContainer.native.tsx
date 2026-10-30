// Module ID: 15822
// Function ID: 15823
// Name: ToastContainer
// Dependencies: [32, 19, 17, 21, 575, 5090, 5009, 5249, 5081, 15818, 15823, 5960, 2]
// Exports: ToastContainer

// Module 15822 (ToastContainer)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import TransitionGroup_TransitionGroup from "TransitionGroup/TransitionGroup" /* 5081 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import OverlayViewDefault from "OverlayView" /* 5960 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let ANIMATION_DURATION_MS;
let obj4;
function AnimatedToast(position) {
  let Toast;
  let closure_7;
  let enterDelayMs;
  let entry;
  let items2;
  let obj7;
  position = position.position;
  const state = position.state;
  const cleanUp = position.cleanUp;
  let first1;
  ({ entry, enterDelayMs } = position);
  let tmp = closure_12();
  const tmp3 = cleanUp;
  obj = position(cleanUp[5]);
  const sharedValue = obj.useSharedValue(0);
  obj2 = position(cleanUp[5]);
  const sharedValue1 = obj2.useSharedValue(first1.HIDDEN);
  const obj3 = position(cleanUp[5]);
  const sharedValue2 = obj3.useSharedValue(false);
  const tmp7 = sharedValue(sharedValue1.useState(false), 2);
  const first = tmp7[0];
  jsx = tmp7[1];
  first1 = sharedValue(sharedValue1.useState(enterDelayMs), 1)[0];
  let obj4 = position(cleanUp[5]);
  let fn = function f() {
    let fn;
    let items1;
    let items2;
    let obj6;
    let value;
    let withDelay;
    let withDelay2;
    let withTiming;
    if ("top" === position) {
      value = -sharedValue.get();
    } else {
      let tmp = sharedValue;
      value = sharedValue.get();
    }
    if (sharedValue2.get()) {
      let num2 = 0;
      if (sharedValue1.get() === obj.VISIBLE) {
        num2 = first1;
      }
      items = [value, 0];
      const obj4 = ReanimatedRexport;
      const interpolateResult = obj4.interpolate(sharedValue1.get(), items, items);
      obj2 = { opacity: withDelay(num2, obj6.withTiming(sharedValue1.get(), obj2)), transform: items1 };
      withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      obj6 = timing;
      const obj5 = { translateY: withDelay2(num2, withTiming(interpolateResult, obj2, "respect-motion-settings", fn)) };
      withDelay2 = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      fn = function n(arg0) {
        const tmp = true === arg0 && state === position(cleanUp[8]).TransitionStates.YEETED;
        if (tmp) {
          obj = position(cleanUp[5]);
          obj.runOnJS(closure_1_2)();
        }
      };
      const tmp12 = timing;
      withTiming = tmp12.withTiming;
      fn.__closure = { state, TransitionStates: TransitionGroup_TransitionGroup.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      fn.__workletHash = 3860990525987;
      fn.__initData = __initData;
      items1 = [obj5];
      const obj7 = { state, TransitionStates: TransitionGroup_TransitionGroup.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      return obj2;
    } else {
      obj = { opacity: 0, transform: items2 };
      items2 = [{ translateY: value }];
      return obj;
    }
  };
  let obj5 = { position, toastHeight: sharedValue, hasEntered: sharedValue2, animationState: sharedValue1, AnimationState: first1, enterDelayMs: first1, interpolate: position(cleanUp[5]).interpolate, ANIMATION_STATE_INPUT: items, withDelay: position(cleanUp[5]).withDelay, withTiming: position(cleanUp[7]).withTiming, TIMING: obj2, state, TransitionStates: position(cleanUp[8]).TransitionStates, runOnJS: position(cleanUp[5]).runOnJS, cleanUp };
  fn.__closure = obj5;
  fn.__workletHash = 12110637972000;
  fn.__initData = __initData;
  items = [sharedValue1, cleanUp, sharedValue2, first, state];
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const effect = sharedValue1.useEffect(() => {
    if (state === TransitionGroup_TransitionGroup.TransitionStates.YEETED) {
      if (sharedValue2.get()) {
        const result = sharedValue1.set(obj.HIDDEN);
      } else {
        cleanUp();
      }
      return tmp10;
    } else {
      const tmp = first;
      if (tmp) {
        const result1 = sharedValue2.set(true);
        const result2 = sharedValue1.set(obj.VISIBLE);
      }
    }
  }, items);
  let items1 = [sharedValue];
  const callback = sharedValue1.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    const result = sharedValue.set(height);
    if (height > 0) {
      closure_7(true);
    }
  }, items1);
  let obj6 = { onLayout: callback, style: items2, children: tmp13(Toast, obj7) };
  items2 = [tmp.toast, "top" === position ? tmp.toastTop : tmp.toastBottom, animatedStyle];
  View = state(cleanUp[5]).View;
  obj7 = {};
  Toast = position(tmp3[9]).Toast;
  const merged = Object.assign(entry.toast);
  return jsx(View, obj6);
}
function getItemKey(key) {
  return String(key.key);
}
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
let jsx = Fragment.jsx;
let obj = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
let items = [, ];
({ HIDDEN: arr[0], VISIBLE: arr[1] } = obj);
let obj2 = { duration: ANIMATION_DURATION_MS.resolve({}), easing: ReanimatedRexport.Easing.linear };
ANIMATION_DURATION_MS = nativeDefault.modules.toast.ANIMATION_DURATION_MS;
const QUEUE_ENTER_DELAY_MS = nativeDefault.modules.toast.QUEUE_ENTER_DELAY_MS;
let closure_11 = QUEUE_ENTER_DELAY_MS.resolve({});
let createStyles = createStyles_mod;
let obj3 = { container: obj4, bounds: { flex: 1, alignItems: "center" }, toast: { position: "absolute", alignSelf: "center", maxWidth: "100%" }, toastTop: { top: 0 }, toastBottom: { bottom: 0 } };
obj4 = { paddingHorizontal: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_12 = createStyles(obj3);
const __initData = { code: "function ToastContainerNativeTsx1(){const{position,toastHeight,hasEntered,animationState,AnimationState,enterDelayMs,interpolate,ANIMATION_STATE_INPUT,withDelay,withTiming,TIMING,state,TransitionStates,runOnJS,cleanUp}=this.__closure;const offscreenTranslateY=position==='top'?-toastHeight.get():toastHeight.get();if(!hasEntered.get()){return{opacity:0,transform:[{translateY:offscreenTranslateY}]};}const isEntering=animationState.get()===AnimationState.VISIBLE;const delayMs=isEntering?enterDelayMs:0;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[offscreenTranslateY,0]);return{opacity:withDelay(delayMs,withTiming(animationState.get(),TIMING)),transform:[{translateY:withDelay(delayMs,withTiming(translateY,TIMING,'respect-motion-settings',function(finished){if(finished===true&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}))}]};}" };
let closure_14 = { code: "function ToastContainerNativeTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished===true&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let result = size.fileFinishedImporting("design/mana/components/Toast/ToastContainer.native.tsx");

export function ToastContainer(surface) {
  let tmp8;
  let tmp9;
  let str = surface.surface;
  if (str === undefined) {
    str = "app";
  }
  let flag = surface.overlay;
  if (flag === undefined) {
    flag = false;
  }
  const offset = surface.offset;
  let entry;
  let num2;
  let memo;
  let first;
  let tmp = closure_12();
  const container = tmp;
  let tmp2 = flag;
  obj = flag(entry[10]);
  const toastContainer = obj.useToastContainer(str);
  const tmp3 = entry;
  entry = toastContainer.entry;
  const position = toastContainer.position;
  let num;
  if (offset != null) {
    num = offset.top;
  }
  if (num == null) {
    num = 0;
  }
  num2 = undefined;
  if (offset != null) {
    num2 = offset.bottom;
  }
  if (num2 == null) {
    num2 = 0;
  }
  obj2 = num;
  items = [num2, num, position];
  memo = num.useMemo(() => {
    if ("top" === position) {
      obj = { paddingTop: nativeDefault.space.PX_8 + num };
      obj2 = { paddingTop: nativeDefault.space.PX_8 + num };
    } else {
      obj = { paddingBottom: nativeDefault.space.PX_8 + num2 };
    }
    return obj;
  }, items);
  let items1 = [entry];
  const memo1 = num.useMemo(() => {
    let items1;
    if (null != entry) {
      items = [tmp];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items1);
  [tmp8, tmp9] = position(num.useState(null), 2);
  position(num.useState(null), 2);
  const tmp10 = position(num.useState(null), 2);
  first = tmp10[0];
  let key;
  const tmp12 = tmp10[1];
  if (entry != null) {
    key = entry.key;
  }
  if (key == null) {
    key = null;
  }
  if (key !== tmp8) {
    let tmp14 = null;
    if (null != key) {
      tmp14 = null;
      if (null != tmp8) {
        tmp14 = key;
      }
    }
    tmp12(tmp14);
    tmp9(key);
  }
  const items2 = [first, position];
  const items3 = [memo, flag, tmp];
  const callback = obj2.useCallback((arg0, entry, state, cleanUp) => {
    obj = { entry, position, state, enterDelayMs: num, cleanUp };
    num = 0;
    const tmp = jsx;
    const tmp2 = AnimatedToast;
    if (entry.key === first) {
      num = closure_11;
    }
    return tmp(tmp2, obj, arg0);
  }, items2);
  const callback1 = obj2.useCallback((children) => {
    items = [container.container, memo];
    const tmp2 = <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" pointerEvents="none" style={items}>{null}</View>;
    let tmpResult = tmp2;
    const tmp = jsx;
    if (flag) {
      const obj3 = { pointerEvents: "box-none", style: StyleSheet.absoluteFill, children: tmp2 };
      tmpResult = tmp(OverlayViewDefault, obj3);
    }
    return tmpResult;
  }, items3);
  let obj3 = { items: memo1, renderItem: callback, getItemKey, wrapChildren: callback1 };
  return first(tmp2(tmp3[8]).TransitionGroup, obj3);
}
