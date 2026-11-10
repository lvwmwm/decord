// Module ID: 16205
// Function ID: 16206
// Name: ToastContainer
// Dependencies: [32, 19, 17, 21, 575, 1652, 5142, 5372, 5206, 1705, 16201, 16206, 6099, 2]
// Exports: ToastContainer

// Module 16205 (ToastContainer)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import TransitionGroup_TransitionGroup from "TransitionGroup/TransitionGroup" /* 5206 */;
import OverlayViewDefault from "OverlayView" /* 6099 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let _undefined2, _undefined3, tmp4, tmp5, tmp6;

let ANIMATION_DURATION_MS;
let obj4;
function AnimatedToast(cleanUp) {
  let closure_6;
  let enterDelayMs;
  let entry;
  let position;
  let state;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  ({ position, state } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  let sharedValue;
  ({ entry, enterDelayMs } = cleanUp);
  let tmp = closure_12();
  const tmp3 = sharedValue;
  obj = state(sharedValue[5]);
  sharedValue = obj.useSharedValue(0);
  obj2 = state(sharedValue[5]);
  const sharedValue1 = obj2.useSharedValue(obj.HIDDEN);
  const obj3 = state(sharedValue[5]);
  const sharedValue2 = obj3.useSharedValue(false);
  let obj4 = sharedValue2;
  let tmp7 = sharedValue1(sharedValue2.useState(false), 2);
  const first = tmp7[0];
  View = tmp7[1];
  const first1 = sharedValue1(sharedValue2.useState(enterDelayMs), 1)[0];
  const tmp10 = state(sharedValue[5]);
  items = [closure_14, position, sharedValue, sharedValue2, sharedValue1, obj, first1, , , , , , , , , , ];
  const useAnimatedStyle = tmp10.useAnimatedStyle;
  items[7] = state(sharedValue[5]).interpolate;
  items[8] = items;
  items[9] = state(sharedValue[5]).withDelay;
  items[10] = state(sharedValue[7]).withTiming;
  items[11] = obj2;
  items[12] = closure_13;
  items[13] = state;
  items[14] = state(sharedValue[8]).TransitionStates;
  items[15] = state(sharedValue[9]).scheduleOnRN;
  items[16] = cleanUp;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  let c12;
  let c13;
  let c14;
  let c15;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items;
  const tmp2 = state;
  class ToastContainerNativeTsx2 {
    constructor() {
      let _undefined;
      let items3;
      let items4;
      let tmp17;
      let tmp18;
      let tmp19;
      let tmp20;
      let tmp21;
      let tmp8;
      let tmp9;
      let value;
      if ("top" === c0) {
        value = -_undefined.get();
      } else {
        let tmp = _undefined;
        value = _undefined.get();
      }
      if (_undefined2.get()) {
        let num2 = 0;
        if (_undefined3.get() === _undefined4.VISIBLE) {
          num2 = c5;
        }
        items = [value, 0];
        const tmp7 = _undefined5(_undefined3.get(), c7, items);
        const items1 = [c11, c12, c13, c14, c15];
        c0 = undefined;
        _undefined = undefined;
        _undefined2 = undefined;
        obj2 = { opacity: _undefined6(num2, _undefined7(_undefined3.get(), c10)), transform: items3 };
        _undefined3 = undefined;
        [tmp17, tmp18, tmp19, tmp20, tmp21] = items1;
        const obj4 = { translateY: tmp8(num2, tmp9(tmp7, c10, "respect-motion-settings", ToastContainerNativeTsx1)) };
        tmp8 = _undefined6;
        tmp9 = _undefined7;
        class ToastContainerNativeTsx1 {
          constructor(arg0) {
            tmp = true === arg0;
            if (tmp) {
              tmp2 = closure_0;
              tmp3 = closure_1;
              tmp = closure_0 === closure_1.YEETED;
            }
            if (tmp) {
              tmp4 = closure_2;
              tmp5 = closure_3;
              tmp6 = closure_2(closure_3);
            }
            return;
          }
        }
        const items2 = [tmp18, tmp19, tmp20, tmp21];
        ToastContainerNativeTsx1.__closure = items2;
        ToastContainerNativeTsx1.__workletHash = 3943080115640;
        ToastContainerNativeTsx1.__initData = tmp17;
        items3 = [obj4];
        return obj2;
      } else {
        obj = { opacity: 0, transform: items4 };
        items4 = [{ translateY: value }];
        return obj;
      }
    }
  }
  let items1 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
  ToastContainerNativeTsx2.__closure = items1;
  ToastContainerNativeTsx2.__workletHash = 2210438006804;
  ToastContainerNativeTsx2.__initData = tmp11;
  let items2 = [sharedValue1, cleanUp, sharedValue2, first, state];
  const animatedStyle = useAnimatedStyle(ToastContainerNativeTsx2);
  const effect = obj4.useEffect(() => {
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
  }, items2);
  let items3 = [sharedValue];
  const callback = obj4.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    const result = sharedValue.set(height);
    if (height > 0) {
      closure_6(true);
    }
  }, items3);
  let items4 = [tmp.toast, "top" === position ? tmp.toastTop : tmp.toastBottom, animatedStyle];
  View = cleanUp(tmp3[5]).View;
  const Toast = tmp2(tmp3[10]).Toast;
  const merged = Object.assign(entry.toast);
  return <View onLayout={callback} style={items4}>{null}</View>;
}
function getItemKey(key) {
  return String(key.key);
}
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
const jsx = Fragment.jsx;
let obj = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
let items = [, ];
({ HIDDEN: arr[0], VISIBLE: arr[1] } = obj);
let obj2 = { duration: ANIMATION_DURATION_MS.resolve({}), easing: _mod1652.Easing.linear };
ANIMATION_DURATION_MS = nativeDefault.modules.toast.ANIMATION_DURATION_MS;
const QUEUE_ENTER_DELAY_MS = nativeDefault.modules.toast.QUEUE_ENTER_DELAY_MS;
let closure_11 = QUEUE_ENTER_DELAY_MS.resolve({});
let createStyles = createStyles_mod;
let obj3 = { container: obj4, bounds: { flex: 1, alignItems: "center" }, toast: { position: "absolute", alignSelf: "center", maxWidth: "100%" }, toastTop: { top: 0 }, toastBottom: { bottom: 0 } };
obj4 = { paddingHorizontal: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_12 = createStyles(obj3);
let closure_13 = { code: "(function ToastContainerNativeTsx1(finished){let[state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;if(finished===true&&state===TransitionStates.YEETED){scheduleOnRN(cleanUp);}})" };
let closure_14 = { code: "(function ToastContainerNativeTsx2(){let[position,toastHeight,hasEntered,animationState,AnimationState,enterDelayMs,interpolate,ANIMATION_STATE_INPUT,withDelay,withTiming,TIMING,_worklet_3943080115640_init_data,state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;const offscreenTranslateY=position==='top'?-toastHeight.get():toastHeight.get();if(!hasEntered.get()){return{opacity:0,transform:[{translateY:offscreenTranslateY}]};}const isEntering=animationState.get()===AnimationState.VISIBLE;const delayMs=isEntering?enterDelayMs:0;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[offscreenTranslateY,0]);return{opacity:withDelay(delayMs,withTiming(animationState.get(),TIMING)),transform:[{translateY:withDelay(delayMs,withTiming(translateY,TIMING,'respect-motion-settings',function ToastContainerNativeTsx1Factory([_worklet_3943080115640_init_data,state,TransitionStates,scheduleOnRN,cleanUp]){const ToastContainerNativeTsx1=function(finished){if(finished===true&&state===TransitionStates.YEETED){scheduleOnRN(cleanUp);}};ToastContainerNativeTsx1.__closure=[state,TransitionStates,scheduleOnRN,cleanUp];ToastContainerNativeTsx1.__workletHash=3943080115640;ToastContainerNativeTsx1.__initData=_worklet_3943080115640_init_data;return ToastContainerNativeTsx1;}([_worklet_3943080115640_init_data,state,TransitionStates,scheduleOnRN,cleanUp])))}]};})" };
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
  obj = flag(entry[11]);
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
