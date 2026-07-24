// Module ID: 15162
// Function ID: 115431
// Name: YouBarAvatarLarge
// Dependencies: [5, 57, 31, 27, 4810, 1849, 14047, 653, 33, 4130, 689, 566, 1273, 4476, 3991, 9126, 7961, 4542, 3834, 7960, 7927, 4099, 5796, 1934, 5217, 2]

// Module 15162 (YouBarAvatarLarge)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT";
import { StatusTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_21;
let closure_22;
let closure_6;
let closure_7;
const require = arg1;
function YouBarAvatarLarge(transitionState) {
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let obj = transitionState(OFFLINE[11]);
  let items = [sharedValue3];
  OFFLINE = obj.useStateFromStores(items, () => sharedValue3.getStatus());
  let obj1 = transitionState(OFFLINE[11]);
  const items1 = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items1, () => outer1_9.getCurrentUser());
  let result = transitionState(OFFLINE[12]).AVATAR_SIZE_MAP[closure_12] / closure_19;
  let result1 = (closure_19 - transitionState(OFFLINE[12]).AVATAR_SIZE_MAP[closure_12]) / 2;
  const tmp5 = transitionState === transitionState(OFFLINE[13]).TransitionStates.MOUNTED;
  let obj2 = transitionState(OFFLINE[14]);
  let num = 0;
  if (tmp5) {
    num = 1;
  }
  sharedValue = obj2.useSharedValue(num);
  let obj3 = transitionState(OFFLINE[14]);
  let num2 = 1;
  if (!tmp5) {
    num2 = result;
  }
  sharedValue1 = obj3.useSharedValue(num2);
  let obj4 = transitionState(OFFLINE[14]);
  if (tmp5) {
    let tmp8 = -closure_16;
  } else {
    tmp8 = -result1;
  }
  sharedValue2 = obj4.useSharedValue(tmp8);
  let obj5 = transitionState(OFFLINE[14]);
  if (tmp5) {
    let diff = -closure_16 - (closure_19 - closure_14) / 2;
  } else {
    diff = -result1;
  }
  sharedValue3 = obj5.useSharedValue(diff);
  const items2 = [transitionState, sharedValue, sharedValue1, sharedValue2, sharedValue3, result, result1];
  const effect = sharedValue.useEffect(() => {
    const tmp = transitionState === transitionState(OFFLINE[13]).TransitionStates.YEETED;
    let num = 1;
    let num2 = 1;
    if (tmp) {
      num2 = 0;
    }
    const result = sharedValue.set(num2);
    if (tmp) {
      num = _isNativeReflectConstruct;
    }
    const result1 = sharedValue1.set(num);
    if (tmp) {
      let tmp8 = -result1;
    } else {
      tmp8 = -outer1_16;
    }
    const result2 = sharedValue2.set(tmp8);
    if (tmp) {
      let diff = -result1;
    } else {
      diff = -outer1_16 - (outer1_19 - outer1_14) / 2;
    }
    const result3 = sharedValue3.set(diff);
  }, items2);
  let obj6 = transitionState(OFFLINE[15]);
  const avatarDecoration = obj6.useAvatarDecoration(stateFromStores);
  const items3 = [OFFLINE];
  const memo = sharedValue.useMemo(() => {
    if (OFFLINE === outer1_20.UNKNOWN) {
      OFFLINE = outer1_20.OFFLINE;
    }
    if (null != OFFLINE) {
      const result = outer1_15 / 2;
      const sum = result + transitionState(OFFLINE[12]).STATUS_PADDING;
      const diff = outer1_19 - sum - outer1_15 / 4 * 2;
      let obj = {};
      obj = { shape: transitionState(OFFLINE[16]).CutoutShape.Circle, x: diff + outer1_18, y: diff + outer1_18, size: 2 * sum };
      const items = [obj];
      obj.nativeCutouts = items;
      return obj;
    }
  }, items3);
  let obj7 = transitionState(OFFLINE[14]);
  class V {
    constructor() {
      obj = {};
      obj = {};
      obj3 = transitionState(outer1_2[17]);
      obj.scale = obj3.withSpring(c6.get(), outer1_17);
      items = [];
      items[0] = obj;
      obj.transform = items;
      obj4 = transitionState(outer1_2[17]);
      obj.left = obj4.withSpring(c7.get(), outer1_17);
      obj5 = transitionState(outer1_2[17]);
      obj.top = obj5.withSpring(c8.get(), outer1_17);
      obj6 = transitionState(outer1_2[17]);
      value = c5.get();
      fn = function s(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = outer1_0 === transitionState(OFFLINE[13]).TransitionStates.YEETED;
        }
        if (tmp) {
          transitionState(OFFLINE[14]).runOnJS(outer1_1)();
          const obj = transitionState(OFFLINE[14]);
        }
      };
      obj1 = { transitionState, TransitionStates: transitionState(outer1_2[13]).TransitionStates, runOnJS: transitionState(outer1_2[14]).runOnJS, cleanup };
      fn.__closure = obj1;
      fn.__workletHash = 9945521131664;
      fn.__initData = outer1_25;
      obj.opacity = obj6.withSpring(value, outer1_17, "respect-motion-settings", fn);
      return obj;
    }
  }
  obj = { withSpring: transitionState(OFFLINE[17]).withSpring, scale: sharedValue1, YOU_BAR_SPRING_CONFIG: closure_17, left: sharedValue2, top: sharedValue3, opacity: sharedValue, transitionState, TransitionStates: transitionState(OFFLINE[13]).TransitionStates, runOnJS: transitionState(OFFLINE[14]).runOnJS, cleanup };
  V.__closure = obj;
  V.__workletHash = 4621027458354;
  V.__initData = closure_24;
  const animatedStyle = obj7.useAnimatedStyle(V);
  let obj9 = transitionState(OFFLINE[18]);
  const token = obj9.useToken(cleanup(OFFLINE[10]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  transitionState(OFFLINE[18]);
  let tmp24Result = null;
  if (null != stateFromStores) {
    obj = {};
    const items4 = [tmp.avatarShadow, , ];
    obj1 = { position: "absolute", width: closure_19, height: closure_19 };
    items4[1] = obj1;
    items4[2] = animatedStyle;
    obj.style = items4;
    obj2 = {};
    let nativeCutouts;
    if (null != memo) {
      nativeCutouts = memo.nativeCutouts;
    }
    obj2.cutouts = nativeCutouts;
    obj3 = { position: "absolute", width: closure_19, height: closure_19 };
    obj2.style = obj3;
    obj4 = {};
    obj5 = { width: closure_19, height: closure_19, borderRadius: closure_19 / 2, backgroundColor: token };
    obj4.style = obj5;
    obj2.children = callback2(sharedValue1, obj4);
    const items5 = [callback2(cleanup(OFFLINE[16]), obj2), , , ];
    obj6 = { user: stateFromStores, guildId: undefined, size: closure_10, animate: false, needsOffscreenAlphaCompositing: true };
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    obj6.status = OFFLINE;
    obj6.statusSizeOverride = closure_15;
    obj6.cutout = memo;
    obj7 = { right: closure_13 - closure_18, bottom: closure_13 - closure_18 };
    obj6.statusStyle = obj7;
    items5[1] = callback2(transitionState(OFFLINE[12]).Avatar, obj6);
    const obj8 = {};
    let mapped;
    const tmp24 = closure_22;
    const tmp29 = callback2;
    const tmp30 = cleanup(OFFLINE[16]);
    const tmp39 = callback2;
    const tmp50 = callback2;
    if (null != memo) {
      const nativeCutouts1 = memo.nativeCutouts;
      if (null != nativeCutouts1) {
        mapped = nativeCutouts1.map((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["x"] = arg0.x + 1;
          obj["y"] = arg0.y + 1;
          return obj;
        });
      }
    }
    obj8.cutouts = mapped;
    obj9 = { position: "absolute", top: -1, left: -1, width: closure_19 + 2, height: closure_19 + 2 };
    obj8.style = obj9;
    class V {
      constructor() {
        obj = {};
        obj = {};
        obj3 = transitionState(outer1_2[17]);
        obj.scale = obj3.withSpring(c6.get(), outer1_17);
        items = [];
        items[0] = obj;
        obj.transform = items;
        obj4 = transitionState(outer1_2[17]);
        obj.left = obj4.withSpring(c7.get(), outer1_17);
        obj5 = transitionState(outer1_2[17]);
        obj.top = obj5.withSpring(c8.get(), outer1_17);
        obj6 = transitionState(outer1_2[17]);
        value = c5.get();
        fn = function s(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = outer1_0 === transitionState(OFFLINE[13]).TransitionStates.YEETED;
          }
          if (tmp) {
            transitionState(OFFLINE[14]).runOnJS(outer1_1)();
            const obj = transitionState(OFFLINE[14]);
          }
        };
        obj1 = { transitionState, TransitionStates: transitionState(outer1_2[13]).TransitionStates, runOnJS: transitionState(outer1_2[14]).runOnJS, cleanup };
        fn.__closure = obj1;
        fn.__workletHash = 9945521131664;
        fn.__initData = outer1_25;
        obj.opacity = obj6.withSpring(value, outer1_17, "respect-motion-settings", fn);
        return obj;
      }
    }
    obj8.pointerEvents = "none";
    const obj10 = {};
    const obj11 = { width: closure_19 + 2, height: closure_19 + 2, borderRadius: (closure_19 + 2) / 2, borderWidth: 1, borderColor: tmp22 };
    obj10.style = obj11;
    obj8.children = callback2(sharedValue1, obj10);
    items5[2] = tmp50(cleanup(OFFLINE[16]), obj8);
    let tmp62 = null != avatarDecoration;
    if (tmp62) {
      const obj12 = {};
      const tmp66 = cleanup(OFFLINE[19]);
      obj12.size = transitionState(OFFLINE[20]).getDecorationSizeForAvatarSize(closure_10);
      obj12.avatarDecoration = avatarDecoration;
      const obj13 = { position: "absolute" };
      const obj24 = transitionState(OFFLINE[20]);
      obj13.top = -transitionState(OFFLINE[20]).getDecorationSizeForAvatarSize(closure_10) - closure_19 / 2;
      const obj26 = transitionState(OFFLINE[20]);
      obj13.left = -transitionState(OFFLINE[20]).getDecorationSizeForAvatarSize(closure_10) - closure_19 / 2;
      obj12.decorationStyle = obj13;
      obj12.animate = false;
      const obj27 = transitionState(OFFLINE[20]);
      const obj28 = transitionState(OFFLINE[20]);
      obj12.cutout = obj28.getDecorationCutoutForAvatarCutout(memo, (transitionState(OFFLINE[20]).getDecorationSizeForAvatarSize(closure_10) - closure_19) / 2);
      tmp62 = callback2(tmp66, obj12, avatarDecoration.asset);
      const obj29 = transitionState(OFFLINE[20]);
    }
    items5[3] = tmp62;
    obj.children = items5;
    tmp24Result = tmp24(cleanup(OFFLINE[14]).View, obj);
    const tmp53 = cleanup(OFFLINE[16]);
  }
  return tmp24Result;
}
function YouBarAvatar(transitionState) {
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  let sharedValue;
  let obj = transitionState(sharedValue[11]);
  const items = [closure_8];
  let OFFLINE = obj.useStateFromStores(items, () => outer1_8.getStatus());
  let obj1 = transitionState(sharedValue[11]);
  const items1 = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items1, () => outer1_9.getCurrentUser());
  let obj2 = transitionState(sharedValue[15]);
  const avatarDecoration = obj2.useAvatarDecoration(stateFromStores);
  let num = 0;
  if (transitionState === transitionState(sharedValue[13]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = transitionState(sharedValue[14]).useSharedValue(num);
  const obj4 = transitionState(sharedValue[14]);
  let fn = function o() {
    let obj = {};
    const value = sharedValue.get();
    const fn = function s(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = outer1_0 === transitionState(sharedValue[13]).TransitionStates.YEETED;
      }
      if (tmp) {
        transitionState(sharedValue[14]).runOnJS(outer1_1)();
        const obj = transitionState(sharedValue[14]);
      }
    };
    obj = { transitionState, TransitionStates: transitionState(sharedValue[13]).TransitionStates, runOnJS: transitionState(sharedValue[14]).runOnJS, cleanup };
    fn.__closure = obj;
    fn.__workletHash = 1724804022422;
    fn.__initData = outer1_27;
    obj.opacity = transitionState(sharedValue[17]).withSpring(value, outer1_17, "respect-motion-settings", fn);
    return obj;
  };
  obj = { withSpring: transitionState(sharedValue[17]).withSpring, opacity: sharedValue, YOU_BAR_SPRING_CONFIG: closure_17, transitionState, TransitionStates: transitionState(sharedValue[13]).TransitionStates, runOnJS: transitionState(sharedValue[14]).runOnJS, cleanup };
  fn.__closure = obj;
  fn.__workletHash = 8237916771781;
  fn.__initData = closure_26;
  const items2 = [sharedValue, transitionState];
  const animatedStyle = transitionState(sharedValue[14]).useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    let num = 1;
    if (transitionState === transitionState(sharedValue[13]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    let result = (transitionState(sharedValue[12]).AVATAR_SIZE_MAP[closure_12] - transitionState(sharedValue[12]).AVATAR_SIZE_MAP[closure_11]) / 2;
    obj = {};
    obj1 = { position: "absolute", top: -result, left: -result };
    const items3 = [obj1, animatedStyle];
    obj.style = items3;
    obj2 = { user: stateFromStores, guildId: undefined, size: closure_12, animate: false, needsOffscreenAlphaCompositing: true, avatarDecoration };
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    obj2.status = OFFLINE;
    obj2.autoStatusCutout = true;
    obj.children = closure_21(transitionState(sharedValue[12]).Avatar, obj2);
    return closure_21(cleanup(sharedValue[14]).View, obj);
  }
  const obj5 = transitionState(sharedValue[14]);
}
({ View: closure_6, Pressable: closure_7 } = get_ActivityIndicator);
({ YOU_BAR_AVATAR_LARGE_SIZE: closure_10, YOU_BAR_AVATAR_PLACEHOLDER_SIZE: closure_11, YOU_BAR_AVATAR_SIZE: closure_12, YOU_BAR_STATUS_INSET: closure_13, YOU_BAR_HEIGHT: closure_14, YOU_BAR_LARGE_STATUS_SIZE: closure_15, YOU_BAR_PADDING: closure_16, YOU_BAR_SPRING_CONFIG: closure_17, YOU_BAR_STATUS_OFFSET: closure_18, YOU_BAR_AVATAR_LARGE_PX: closure_19 } = CONNECTION_BANNER_HEIGHT);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let obj = {};
obj = {};
let merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_MEDIUM);
obj.avatarShadow = obj;
let closure_23 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_24 = { code: "function YouBarAvatarTsx1(){const{withSpring,scale,YOU_BAR_SPRING_CONFIG,left,top,opacity,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{transform:[{scale:withSpring(scale.get(),YOU_BAR_SPRING_CONFIG)}],left:withSpring(left.get(),YOU_BAR_SPRING_CONFIG),top:withSpring(top.get(),YOU_BAR_SPRING_CONFIG),opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}" };
let closure_25 = { code: "function YouBarAvatarTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}" };
let closure_26 = { code: "function YouBarAvatarTsx3(){const{withSpring,opacity,YOU_BAR_SPRING_CONFIG,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}" };
let closure_27 = { code: "function YouBarAvatarTsx4(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}" };
let closure_28 = { code: "function YouBarAvatarTsx5(){const{withSpring,isAvatarPressed,YOU_BAR_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isAvatarPressed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_29 = { code: "function YouBarAvatarTsx6(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(false);}" };
let closure_30 = { code: "function YouBarAvatarTsx7(){const{runOnJS,handleAvatarLongPress}=this.__closure;runOnJS(handleAvatarLongPress)();}" };
let closure_31 = { code: "function YouBarAvatarTsx8(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(true);}" };
const memoResult = importAllResult.memo(function YouBarAvatarAnimated(isLargeAvatar) {
  isLargeAvatar = isLargeAvatar.isLargeAvatar;
  const onPress = isLargeAvatar.onPress;
  let obj = isLargeAvatar(first[11]);
  let items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getCurrentUser());
  const tmp2 = callback1(importAllResult.useState(false), 2);
  first = tmp2[0];
  let callback = tmp2[1];
  let obj1 = isLargeAvatar(first[14]);
  let fn = function _() {
    let obj = {};
    obj = {};
    let num = 1;
    if (first) {
      num = 0.98;
    }
    obj.scale = isLargeAvatar(first[17]).withSpring(num, outer1_17);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withSpring: isLargeAvatar(first[17]).withSpring, isAvatarPressed: first, YOU_BAR_SPRING_CONFIG: closure_17 };
  fn.__closure = obj;
  fn.__workletHash = 10944764008850;
  fn.__initData = closure_28;
  const items1 = [onPress];
  let fn2 = () => {
    if (null != onPress) {
      onPress();
    }
    callback(false);
  };
  const animatedStyle = obj1.useAnimatedStyle(fn);
  // CreateGeneratorClosureLongIndex (0x67)
  callback = importAllResult.useCallback(fn2, items1);
  callback1 = importAllResult.useCallback(callback(fn2), []);
  const items2 = [callback1];
  const memo = importAllResult.useMemo(() => {
    const Gesture = isLargeAvatar(first[24]).Gesture;
    const result = Gesture.LongPress().shouldCancelWhenOutside(false);
    const fn = function s() {
      isLargeAvatar(first[14]).runOnJS(outer1_3)(true);
    };
    let obj = { runOnJS: isLargeAvatar(first[14]).runOnJS, setIsAvatarPressed: _isNativeReflectConstruct };
    fn.__closure = obj;
    fn.__workletHash = 11956186059259;
    fn.__initData = outer1_31;
    const LongPressResult = Gesture.LongPress();
    const fn2 = function n() {
      isLargeAvatar(first[14]).runOnJS(outer1_4)();
    };
    obj = { runOnJS: isLargeAvatar(first[14]).runOnJS, handleAvatarLongPress: callback1 };
    fn2.__closure = obj;
    fn2.__workletHash = 446001392642;
    fn2.__initData = outer1_30;
    const onBeginResult = result.onBegin(fn);
    const fn3 = function t() {
      isLargeAvatar(first[14]).runOnJS(outer1_3)(false);
    };
    const onStartResult = result.onBegin(fn).onStart(fn2);
    fn3.__closure = { runOnJS: isLargeAvatar(first[14]).runOnJS, setIsAvatarPressed: _isNativeReflectConstruct };
    fn3.__workletHash = 1675248979678;
    fn3.__initData = outer1_29;
    return onStartResult.onFinalize(fn3);
  }, items2);
  [][0] = isLargeAvatar;
  const callback2 = importAllResult.useCallback((arg0, arg1, transitionState, cleanup) => outer1_21(arg1 ? outer1_32 : outer1_33, { transitionState, cleanup }, arg0), []);
  let tmp10 = null;
  if (null != stateFromStores) {
    obj = { gesture: memo };
    obj1 = {
      onPress: callback,
      onPressIn() {
          return callback(true);
        },
      onPressOut() {
          return callback(false);
        }
    };
    const obj2 = { color: "transparent" };
    obj1.android_ripple = obj2;
    const obj3 = {};
    const obj4 = { height: isLargeAvatar(first[12]).AVATAR_SIZE_MAP[closure_11], width: isLargeAvatar(first[12]).AVATAR_SIZE_MAP[closure_11], position: "relative" };
    const items3 = [obj4, animatedStyle];
    obj3.style = items3;
    const obj5 = {
      items: tmp9,
      getItemKey(arg0) {
          return arg0.toString();
        },
      renderItem: callback2
    };
    obj3.children = callback2(isLargeAvatar(first[13]).TransitionGroup, obj5);
    obj1.children = callback2(onPress(first[14]).View, obj3);
    obj.children = callback2(closure_7, obj1);
    tmp10 = callback2(isLargeAvatar(first[24]).GestureDetector, obj);
  }
  return tmp10;
});
let result = require("result").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatar.tsx");

export default memoResult;
