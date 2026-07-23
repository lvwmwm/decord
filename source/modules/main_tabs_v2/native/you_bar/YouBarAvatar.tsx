// Module ID: 15115
// Function ID: 115110
// Name: YouBarAvatarLarge
// Dependencies: [5, 57, 31, 27, 4810, 1849, 13997, 653, 33, 4130, 689, 566, 1273, 3991, 4476, 4542, 1327, 9088, 7873, 3834, 7872, 7838, 4099, 5796, 1934, 5217, 2]

// Module 15115 (YouBarAvatarLarge)
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
  let obj2 = transitionState(OFFLINE[13]);
  let num = 0;
  if (transitionState === transitionState(OFFLINE[14]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = obj2.useSharedValue(num);
  let obj3 = transitionState(OFFLINE[13]);
  let num2 = 1;
  if (transitionState !== transitionState(OFFLINE[14]).TransitionStates.MOUNTED) {
    num2 = result;
  }
  sharedValue1 = obj3.useSharedValue(num2);
  let obj4 = transitionState(OFFLINE[13]);
  if (transitionState === transitionState(OFFLINE[14]).TransitionStates.MOUNTED) {
    let tmp7 = -closure_16;
  } else {
    tmp7 = -result1;
  }
  sharedValue2 = obj4.useSharedValue(tmp7);
  let obj5 = transitionState(OFFLINE[13]);
  if (transitionState === transitionState(OFFLINE[14]).TransitionStates.MOUNTED) {
    let diff = -closure_16 - (closure_19 - closure_14) / 2;
  } else {
    diff = -result1;
  }
  sharedValue3 = obj5.useSharedValue(diff);
  const items2 = [transitionState, sharedValue, cleanup, result, result1, sharedValue2, sharedValue3, sharedValue1];
  const effect = sharedValue.useEffect(() => {
    if (transitionState(OFFLINE[14]).TransitionStates.ENTERED !== transitionState) {
      if (transitionState(OFFLINE[14]).TransitionStates.MOUNTED !== tmp) {
        if (transitionState(OFFLINE[14]).TransitionStates.YEETED === tmp) {
          const obj2 = transitionState(OFFLINE[15]);
          const fn = function n() {
            transitionState(OFFLINE[13]).runOnJS(outer1_1)();
          };
          let obj = { runOnJS: transitionState(OFFLINE[13]).runOnJS, cleanup };
          fn.__closure = obj;
          fn.__workletHash = 7725536128708;
          fn.__initData = outer1_24;
          const result = sharedValue.set(obj2.withSpring(0, outer1_17, "respect-motion-settings", fn));
          const result1 = sharedValue1.set(transitionState(OFFLINE[15]).withSpring(_isNativeReflectConstruct, outer1_17));
          const obj4 = transitionState(OFFLINE[15]);
          const result2 = sharedValue2.set(transitionState(OFFLINE[15]).withSpring(tmp21, outer1_17));
          const obj5 = transitionState(OFFLINE[15]);
          const result3 = sharedValue3.set(transitionState(OFFLINE[15]).withSpring(tmp21, outer1_17));
          const obj6 = transitionState(OFFLINE[15]);
        } else {
          obj = transitionState(OFFLINE[16]);
          obj.assertNever(transitionState);
        }
      }
    }
    const result4 = sharedValue.set(transitionState(OFFLINE[15]).withSpring(1, outer1_17));
    const obj7 = transitionState(OFFLINE[15]);
    const result5 = sharedValue1.set(transitionState(OFFLINE[15]).withSpring(1, outer1_17));
    const obj8 = transitionState(OFFLINE[15]);
    const result6 = sharedValue2.set(transitionState(OFFLINE[15]).withSpring(-outer1_16, outer1_17));
    const obj9 = transitionState(OFFLINE[15]);
    const result7 = sharedValue3.set(transitionState(OFFLINE[15]).withSpring(-outer1_16 - (outer1_19 - outer1_14) / 2, outer1_17));
  }, items2);
  let obj6 = transitionState(OFFLINE[17]);
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
      obj = { shape: transitionState(OFFLINE[18]).CutoutShape.Circle, x: diff + outer1_18, y: diff + outer1_18, size: 2 * sum };
      const items = [obj];
      obj.nativeCutouts = items;
      return obj;
    }
  }, items3);
  let obj7 = transitionState(OFFLINE[13]);
  class M {
    constructor() {
      obj = {};
      obj = { scale: c6.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      obj.left = c7.get();
      obj.top = MOUNTED.get();
      obj.opacity = MOUNTED.get();
      return obj;
    }
  }
  M.__closure = { scale: sharedValue1, left: sharedValue2, top: sharedValue3, opacity: sharedValue };
  M.__workletHash = 1263402972256;
  M.__initData = closure_25;
  const animatedStyle = obj7.useAnimatedStyle(M);
  let obj8 = transitionState(OFFLINE[19]);
  const token = obj8.useToken(cleanup(OFFLINE[10]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  transitionState(OFFLINE[19]);
  let tmp23Result = null;
  if (null != stateFromStores) {
    obj = {};
    const items4 = [tmp.avatarShadow, , ];
    obj = { position: "absolute", width: closure_19, height: closure_19 };
    items4[1] = obj;
    items4[2] = animatedStyle;
    obj.style = items4;
    obj1 = {};
    let nativeCutouts;
    if (null != memo) {
      nativeCutouts = memo.nativeCutouts;
    }
    obj1.cutouts = nativeCutouts;
    obj2 = { position: "absolute", width: closure_19, height: closure_19 };
    obj1.style = obj2;
    obj3 = {};
    obj4 = { width: closure_19, height: closure_19, borderRadius: closure_19 / 2, backgroundColor: token };
    obj3.style = obj4;
    obj1.children = callback2(sharedValue1, obj3);
    const items5 = [callback2(cleanup(OFFLINE[18]), obj1), , , ];
    obj5 = { user: stateFromStores, guildId: undefined, size: closure_10, animate: false, needsOffscreenAlphaCompositing: true };
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    obj5.status = OFFLINE;
    obj5.statusSizeOverride = closure_15;
    obj5.cutout = memo;
    obj6 = { right: closure_13 - closure_18, bottom: closure_13 - closure_18 };
    obj5.statusStyle = obj6;
    items5[1] = callback2(transitionState(OFFLINE[12]).Avatar, obj5);
    obj7 = {};
    let mapped;
    const tmp23 = closure_22;
    const tmp28 = callback2;
    const tmp29 = cleanup(OFFLINE[18]);
    const tmp38 = callback2;
    const tmp49 = callback2;
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
    obj7.cutouts = mapped;
    obj8 = { position: "absolute", top: -1, left: -1, width: closure_19 + 2, height: closure_19 + 2 };
    obj7.style = obj8;
    class M {
      constructor() {
        obj = {};
        obj = { scale: c6.get() };
        items = [];
        items[0] = obj;
        obj.transform = items;
        obj.left = c7.get();
        obj.top = MOUNTED.get();
        obj.opacity = MOUNTED.get();
        return obj;
      }
    }
    obj7.pointerEvents = "none";
    let obj9 = {};
    const obj10 = { width: closure_19 + 2, height: closure_19 + 2, borderRadius: (closure_19 + 2) / 2, borderWidth: 1, borderColor: tmp21 };
    obj9.style = obj10;
    obj7.children = callback2(sharedValue1, obj9);
    items5[2] = tmp49(cleanup(OFFLINE[18]), obj7);
    let tmp61 = null != avatarDecoration;
    if (tmp61) {
      const obj11 = {};
      const tmp65 = cleanup(OFFLINE[20]);
      obj11.size = transitionState(OFFLINE[21]).getDecorationSizeForAvatarSize(closure_10);
      obj11.avatarDecoration = avatarDecoration;
      const obj12 = { position: "absolute" };
      const obj23 = transitionState(OFFLINE[21]);
      obj12.top = -transitionState(OFFLINE[21]).getDecorationSizeForAvatarSize(closure_10) - closure_19 / 2;
      const obj25 = transitionState(OFFLINE[21]);
      obj12.left = -transitionState(OFFLINE[21]).getDecorationSizeForAvatarSize(closure_10) - closure_19 / 2;
      obj11.decorationStyle = obj12;
      obj11.animate = false;
      const obj26 = transitionState(OFFLINE[21]);
      const obj27 = transitionState(OFFLINE[21]);
      obj11.cutout = obj27.getDecorationCutoutForAvatarCutout(memo, (transitionState(OFFLINE[21]).getDecorationSizeForAvatarSize(closure_10) - closure_19) / 2);
      tmp61 = callback2(tmp65, obj11, avatarDecoration.asset);
      const obj28 = transitionState(OFFLINE[21]);
    }
    items5[3] = tmp61;
    obj.children = items5;
    tmp23Result = tmp23(cleanup(OFFLINE[13]).View, obj);
    const tmp52 = cleanup(OFFLINE[18]);
  }
  return tmp23Result;
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
  const avatarDecoration = transitionState(sharedValue[17]).useAvatarDecoration(stateFromStores);
  const obj3 = transitionState(sharedValue[17]);
  let num = 0;
  if (transitionState === transitionState(sharedValue[14]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = transitionState(sharedValue[13]).useSharedValue(num);
  const items2 = [transitionState, sharedValue, cleanup];
  const effect = importAllResult.useEffect(() => {
    if (transitionState(sharedValue[14]).TransitionStates.ENTERED !== transitionState) {
      if (transitionState(sharedValue[14]).TransitionStates.MOUNTED !== tmp) {
        if (transitionState(sharedValue[14]).TransitionStates.YEETED === tmp) {
          const obj2 = transitionState(sharedValue[15]);
          const fn = function n() {
            transitionState(sharedValue[13]).runOnJS(outer1_1)();
          };
          let obj = { runOnJS: transitionState(sharedValue[13]).runOnJS, cleanup };
          fn.__closure = obj;
          fn.__workletHash = 12490409237702;
          fn.__initData = outer1_26;
          const result = sharedValue.set(obj2.withSpring(0, outer1_17, "respect-motion-settings", fn));
        } else {
          obj = transitionState(sharedValue[16]);
          obj.assertNever(transitionState);
        }
      }
    }
    const result1 = sharedValue.set(transitionState(sharedValue[15]).withSpring(1, outer1_17));
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    let result = (transitionState(sharedValue[12]).AVATAR_SIZE_MAP[closure_12] - transitionState(sharedValue[12]).AVATAR_SIZE_MAP[closure_11]) / 2;
    obj = {};
    obj = { position: "absolute", top: -result, left: -result, opacity: sharedValue };
    obj.style = obj;
    obj1 = { user: stateFromStores, guildId: undefined, size: closure_12, animate: false, needsOffscreenAlphaCompositing: true, avatarDecoration };
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    obj1.status = OFFLINE;
    obj1.autoStatusCutout = true;
    obj.children = closure_21(transitionState(sharedValue[12]).Avatar, obj1);
    return closure_21(cleanup(sharedValue[13]).View, obj);
  }
  const obj4 = transitionState(sharedValue[13]);
}
({ View: closure_6, Pressable: closure_7 } = get_ActivityIndicator);
({ YOU_BAR_AVATAR_LARGE_SIZE: closure_10, YOU_BAR_AVATAR_PLACEHOLDER_SIZE: closure_11, YOU_BAR_AVATAR_SIZE: closure_12, YOU_BAR_STATUS_INSET: closure_13, YOU_BAR_HEIGHT: closure_14, YOU_BAR_LARGE_STATUS_SIZE: closure_15, YOU_BAR_PADDING: closure_16, YOU_BAR_SPRING_CONFIG: closure_17, YOU_BAR_STATUS_OFFSET: closure_18, YOU_BAR_AVATAR_LARGE_PX: closure_19 } = CONNECTION_BANNER_HEIGHT);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let obj = {};
obj = {};
let merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_MEDIUM);
obj.avatarShadow = obj;
let closure_23 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_24 = { code: "function YouBarAvatarTsx1(){const{runOnJS,cleanup}=this.__closure;runOnJS(cleanup)();}" };
let closure_25 = { code: "function YouBarAvatarTsx2(){const{scale,left,top,opacity}=this.__closure;return{transform:[{scale:scale.get()}],left:left.get(),top:top.get(),opacity:opacity.get()};}" };
let closure_26 = { code: "function YouBarAvatarTsx3(){const{runOnJS,cleanup}=this.__closure;runOnJS(cleanup)();}" };
let closure_27 = { code: "function YouBarAvatarTsx4(){const{withSpring,isAvatarPressed,YOU_BAR_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isAvatarPressed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_28 = { code: "function YouBarAvatarTsx5(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(false);}" };
let closure_29 = { code: "function YouBarAvatarTsx6(){const{runOnJS,handleAvatarLongPress}=this.__closure;runOnJS(handleAvatarLongPress)();}" };
let closure_30 = { code: "function YouBarAvatarTsx7(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(true);}" };
const memoResult = importAllResult.memo(function YouBarAvatarAnimated(isLargeAvatar) {
  isLargeAvatar = isLargeAvatar.isLargeAvatar;
  const onPress = isLargeAvatar.onPress;
  let obj = isLargeAvatar(first[11]);
  let items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getCurrentUser());
  const tmp2 = callback1(importAllResult.useState(false), 2);
  first = tmp2[0];
  let callback = tmp2[1];
  let obj1 = isLargeAvatar(first[13]);
  let fn = function c() {
    let obj = {};
    obj = {};
    let num = 1;
    if (first) {
      num = 0.98;
    }
    obj.scale = isLargeAvatar(first[15]).withSpring(num, outer1_17);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withSpring: isLargeAvatar(first[15]).withSpring, isAvatarPressed: first, YOU_BAR_SPRING_CONFIG: closure_17 };
  fn.__closure = obj;
  fn.__workletHash = 11045019958035;
  fn.__initData = closure_27;
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
    const Gesture = isLargeAvatar(first[25]).Gesture;
    const result = Gesture.LongPress().shouldCancelWhenOutside(false);
    const fn = function n() {
      isLargeAvatar(first[13]).runOnJS(outer1_3)(true);
    };
    let obj = { runOnJS: isLargeAvatar(first[13]).runOnJS, setIsAvatarPressed: _isNativeReflectConstruct };
    fn.__closure = obj;
    fn.__workletHash = 3059819956724;
    fn.__initData = outer1_30;
    const LongPressResult = Gesture.LongPress();
    const fn2 = function s() {
      isLargeAvatar(first[13]).runOnJS(outer1_4)();
    };
    obj = { runOnJS: isLargeAvatar(first[13]).runOnJS, handleAvatarLongPress: callback1 };
    fn2.__closure = obj;
    fn2.__workletHash = 546257341827;
    fn2.__initData = outer1_29;
    const onBeginResult = result.onBegin(fn);
    const fn3 = function t() {
      isLargeAvatar(first[13]).runOnJS(outer1_3)(false);
    };
    const onStartResult = result.onBegin(fn).onStart(fn2);
    fn3.__closure = { runOnJS: isLargeAvatar(first[13]).runOnJS, setIsAvatarPressed: _isNativeReflectConstruct };
    fn3.__workletHash = 13941331198045;
    fn3.__initData = outer1_28;
    return onStartResult.onFinalize(fn3);
  }, items2);
  [][0] = isLargeAvatar;
  const callback2 = importAllResult.useCallback((arg0, arg1, transitionState, cleanup) => outer1_21(arg1 ? outer1_31 : outer1_32, { transitionState, cleanup }, arg0), []);
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
    obj3.children = callback2(isLargeAvatar(first[14]).TransitionGroup, obj5);
    obj1.children = callback2(onPress(first[13]).View, obj3);
    obj.children = callback2(closure_7, obj1);
    tmp10 = callback2(isLargeAvatar(first[25]).GestureDetector, obj);
  }
  return tmp10;
});
let result = require("result").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatar.tsx");

export default memoResult;
