// Module ID: 16024
// Function ID: 16025
// Name: YouBarAvatar
// Dependencies: [5, 32, 19, 17, 4825, 5591, 1372, 14627, 1074, 21, 4836, 576, 504, 1177, 4540, 4566, 7661, 8276, 5280, 4531, 8275, 7602, 4801, 6800, 1981, 6073, 2]

// Module 16024 (YouBarAvatar)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import native2 from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import ClipView from "ClipView" /* 8276 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5591 */;
import UserStore from "UserStore" /* 1372 */;
import YouBarConstants from "YouBarConstants" /* 14627 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c1, obj1, set, set2, set3, size2;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_22;
let closure_23;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
function YouBarAvatarLarge(transitionState) {
  let currentUser;
  let diff;
  let getDecorationCutoutForAvatarCutout;
  let items5;
  let items6;
  let obj5;
  let obj8;
  let rect1;
  let rect2;
  let size1;
  let size3;
  let size4;
  let status;
  let tmp14;
  let tmp2Result20;
  let tmp2Result21;
  let tmp2Result22;
  let tmp2Result24;
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  let OFFLINE;
  let sharedValue;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let tmp = closure_24();
  let obj = transitionState(OFFLINE[12]);
  let items = [SelfPresenceStore];
  OFFLINE = obj.useStateFromStores(items, () => status.getStatus());
  const obj2 = transitionState(OFFLINE[12]);
  const items1 = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let result = transitionState(OFFLINE[13]).AVATAR_SIZE_MAP[closure_13] / closure_20;
  let c3 = result;
  const result1 = (closure_20 - transitionState(OFFLINE[13]).AVATAR_SIZE_MAP[closure_13]) / 2;
  let tmp8 = transitionState === transitionState(OFFLINE[14]).TransitionStates.MOUNTED;
  let num = 0;
  const useSharedValue = transitionState(OFFLINE[15]).useSharedValue;
  const tmp9 = transitionState(OFFLINE[15]);
  if (tmp8) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let num2 = 1;
  const useSharedValue2 = tmp2(tmp3[15]).useSharedValue;
  transitionState(OFFLINE[15]);
  if (!tmp8) {
    num2 = result;
  }
  sharedValue2 = useSharedValue2(num2);
  const useSharedValue3 = tmp2(tmp3[15]).useSharedValue;
  transitionState(OFFLINE[15]);
  if (tmp8) {
    tmp14 = -closure_17;
  } else {
    tmp14 = -result1;
  }
  sharedValue3 = useSharedValue3(tmp14);
  const useSharedValue4 = tmp2(tmp3[15]).useSharedValue;
  transitionState(OFFLINE[15]);
  if (tmp8) {
    diff = -closure_17 - (tmp5 - closure_15) / 2;
  } else {
    diff = -result1;
  }
  sharedValue4 = useSharedValue4(diff);
  const items2 = [transitionState, sharedValue, sharedValue2, sharedValue3, sharedValue4, result, result1];
  const effect = sharedValue.useEffect(() => {
    let diff;
    let tmp8;
    const tmp = transitionState === native2.TransitionStates.YEETED;
    let num = 1;
    let num2 = 1;
    set = sharedValue.set;
    if (tmp) {
      num2 = 0;
    }
    const result = set(num2);
    set2 = sharedValue2.set;
    if (tmp) {
      num = c3;
    }
    set2(num);
    set3 = sharedValue3.set;
    if (tmp) {
      tmp8 = -result1;
    } else {
      tmp8 = -closure_17;
    }
    set3(tmp8);
    const set4 = sharedValue4.set;
    if (tmp) {
      diff = -result1;
    } else {
      diff = -closure_17 - (closure_20 - closure_15) / 2;
    }
    set4(diff);
  }, items2);
  const tmp2Result15 = transitionState(OFFLINE[16]);
  const avatarDecoration = tmp2Result15.useAvatarDecoration(stateFromStores);
  const items3 = [sharedValue4];
  const items4 = [OFFLINE];
  const tmp2Result16 = transitionState(OFFLINE[12]);
  const stateFromStores1 = tmp2Result16.useStateFromStores(items3, () => sharedValue4.animateYouBarAvatarDeco);
  const memo = sharedValue.useMemo(() => {
    let items;
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    if (null != OFFLINE) {
      const result = closure_16 / 2;
      const sum = result + native.STATUS_PADDING;
      const diff = closure_20 - sum - closure_16 / 4 * 2;
      const obj = { nativeCutouts: items };
      const point = { shape: ClipView.CutoutShape.Circle, x: diff + closure_19, y: diff + closure_19, size: 2 * sum };
      items = [point];
      return obj;
    }
  }, items4);
  const tmp2Result17 = transitionState(OFFLINE[15]);
  class V {
    constructor() {
      rect = { transform: null, left: null, top: null, opacity: null };
      obj1 = { scale: null };
      obj3 = closure_0(closure_2[18]);
      obj1.scale = obj3.withSpring(closure_6.get(), YOU_BAR_SPRING_CONFIG);
      items = [];
      items[0] = obj1;
      rect.transform = items;
      obj4 = closure_0(closure_2[18]);
      rect.left = obj4.withSpring(closure_7.get(), YOU_BAR_SPRING_CONFIG);
      obj5 = closure_0(closure_2[18]);
      rect.top = obj5.withSpring(closure_8.get(), YOU_BAR_SPRING_CONFIG);
      tmp = closure_0(closure_2[18]);
      withSpring = tmp.withSpring;
      value = closure_5.get();
      fn = function s(arg0) {
        const tmp = arg0 && closure_1_0 === transitionState(OFFLINE[14]).TransitionStates.YEETED;
        if (tmp) {
          const obj = transitionState(OFFLINE[15]);
          obj.runOnJS(cleanup)();
        }
      };
      obj7 = { transitionState, TransitionStates: closure_0(closure_2[14]).TransitionStates, runOnJS: closure_0(closure_2[15]).runOnJS, cleanup };
      fn.__closure = obj7;
      fn.__workletHash = 9945521131664;
      fn.__initData = closure_26;
      rect.opacity = withSpring(value, YOU_BAR_SPRING_CONFIG, "respect-motion-settings", fn);
      return rect;
    }
  }
  let rect = { withSpring: tmp2(tmp3[18]).withSpring, scale: sharedValue2, YOU_BAR_SPRING_CONFIG, left: sharedValue3, top: sharedValue4, opacity: sharedValue, transitionState, TransitionStates: tmp2(tmp3[14]).TransitionStates, runOnJS: tmp2(tmp3[15]).runOnJS, cleanup };
  V.__closure = rect;
  V.__workletHash = 4621027458354;
  V.__initData = __initData;
  const animatedStyle = tmp2Result17.useAnimatedStyle(V);
  const tmp2Result18 = transitionState(OFFLINE[19]);
  const token = tmp2Result18.useToken(cleanup(tmp3[11]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  transitionState(OFFLINE[19]);
  let tmp32Result = null;
  if (null != stateFromStores) {
    let obj3 = { style: items5, children: items6 };
    items5 = [tmp.avatarShadow, , ];
    size = { position: "absolute", width: tmp5, height: tmp5 };
    items5[1] = size;
    items5[2] = animatedStyle;
    const View = tmp27(tmp3[15]).View;
    let nativeCutouts;
    const tmp27Result = cleanup(OFFLINE[17]);
    const tmp32 = closure_23;
    if (memo != null) {
      nativeCutouts = memo.nativeCutouts;
    }
    let obj4 = { cutouts: nativeCutouts, style: size1, children: closure_22(sharedValue2, obj5) };
    size1 = { position: "absolute", width: tmp5, height: tmp5 };
    obj5 = { style: size2 };
    size2 = { width: tmp5, height: tmp5, borderRadius: tmp5 / 2, backgroundColor: token };
    items6 = [closure_22(tmp27Result, obj4), , , ];
    const obj6 = { user: stateFromStores, guildId: "Array", size, animate: true, needsOffscreenAlphaCompositing: null, status: OFFLINE, statusSizeOverride, cutout: memo, statusStyle: rect1 };
    const Avatar = tmp2(tmp3[13]).Avatar;
    const tmp36 = sharedValue2;
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    rect1 = { right: closure_14 - closure_19, bottom: closure_14 - closure_19 };
    items6[1] = closure_22(Avatar, obj6);
    let mapped;
    const tmp27Result3 = cleanup(OFFLINE[17]);
    if (memo != null) {
      const nativeCutouts1 = memo.nativeCutouts;
      if (nativeCutouts1 != null) {
        mapped = nativeCutouts1.map((item) => {
          const obj = { x: item.x + 1, y: item.y + 1 };
          const merged = Object.assign(item);
          return obj;
        });
      }
    }
    const obj7 = { cutouts: mapped, style: size3, pointerEvents: "none", children: closure_22(tmp36, obj8) };
    size3 = { position: "absolute", top: -1, left: -1, width: tmp5 + 2, height: tmp5 + 2 };
    obj8 = { style: size4 };
    size4 = { width: tmp5 + 2, height: tmp5 + 2, borderRadius: (tmp5 + 2) / 2, borderWidth: 1, borderColor: tmp30 };
    items6[2] = closure_22(tmp27Result3, obj7);
    let tmp33Result = null != avatarDecoration;
    if (tmp33Result) {
      const obj9 = { size: tmp2Result20.getDecorationSizeForAvatarSize(size), avatarDecoration, decorationStyle: rect2, animate: stateFromStores1 && "always", cutout: getDecorationCutoutForAvatarCutout(memo, (tmp2Result24.getDecorationSizeForAvatarSize(size) - closure_20) / 2) };
      const tmp27Result4 = cleanup(OFFLINE[20]);
      tmp2Result20 = transitionState(OFFLINE[21]);
      rect2 = { position: "absolute", top: -tmp2Result21.getDecorationSizeForAvatarSize(size) - tmp5 / 2, left: -tmp2Result22.getDecorationSizeForAvatarSize(size) - tmp5 / 2 };
      tmp2Result21 = transitionState(OFFLINE[21]);
      tmp2Result22 = transitionState(OFFLINE[21]);
      getDecorationCutoutForAvatarCutout = tmp2(tmp3[21]).getDecorationCutoutForAvatarCutout;
      transitionState(OFFLINE[21]);
      tmp2Result24 = transitionState(OFFLINE[21]);
      tmp33Result = tmp33(tmp27Result4, obj9, avatarDecoration.asset);
    }
    items6[3] = tmp33Result;
    tmp32Result = tmp32(View, obj3);
  }
  return tmp32Result;
}
function YouBarAvatar(transitionState) {
  let Avatar;
  let currentUser;
  let items3;
  let obj6;
  let status;
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  let sharedValue;
  let tmp = transitionState;
  let obj = transitionState(sharedValue[12]);
  const items = [SelfPresenceStore];
  let OFFLINE = obj.useStateFromStores(items, () => status.getStatus());
  const obj2 = transitionState(sharedValue[12]);
  const items1 = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj3 = transitionState(sharedValue[16]);
  const avatarDecoration = obj3.useAvatarDecoration(stateFromStores);
  const useSharedValue = transitionState(sharedValue[15]).useSharedValue;
  let num = 0;
  const tmp5 = transitionState(sharedValue[15]);
  if (transitionState === transitionState(sharedValue[14]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let fn = function o() {
    let fn;
    let value;
    let withSpring;
    let obj = { opacity: withSpring(value, closure_18, "respect-motion-settings", fn) };
    let tmp = spring;
    withSpring = tmp.withSpring;
    value = sharedValue.get();
    fn = function s(arg0) {
      const tmp = arg0 && closure_1_0 === transitionState(sharedValue[14]).TransitionStates.YEETED;
      if (tmp) {
        const obj = transitionState(sharedValue[15]);
        obj.runOnJS(cleanup)();
      }
    };
    fn.__closure = { transitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanup };
    fn.__workletHash = 1724804022422;
    fn.__initData = __initData;
    ({ transitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanup });
    return obj;
  };
  const tmpResult = tmp(sharedValue[15]);
  fn.__closure = { withSpring: tmp(sharedValue[18]).withSpring, opacity: sharedValue, YOU_BAR_SPRING_CONFIG, transitionState, TransitionStates: tmp(sharedValue[14]).TransitionStates, runOnJS: tmp(sharedValue[15]).runOnJS, cleanup };
  fn.__workletHash = 8237916771781;
  fn.__initData = __initData3;
  const items2 = [sharedValue, transitionState];
  ({ withSpring: tmp(sharedValue[18]).withSpring, opacity: sharedValue, YOU_BAR_SPRING_CONFIG, transitionState, TransitionStates: tmp(sharedValue[14]).TransitionStates, runOnJS: tmp(sharedValue[15]).runOnJS, cleanup });
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (transitionState === native2.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    let result = (tmp(tmp2[13]).AVATAR_SIZE_MAP[size2] - tmp(tmp2[13]).AVATAR_SIZE_MAP[closure_12]) / 2;
    const rect = { position: "absolute", top: -result, left: -result };
    const obj5 = { style: items3, children: closure_22(Avatar, obj6) };
    items3 = [rect, animatedStyle];
    const View = cleanup(tmp2[15]).View;
    obj6 = { user: stateFromStores, guildId: "Array", size: size2, animate: true, needsOffscreenAlphaCompositing: null, avatarDecoration, status: OFFLINE, autoStatusCutout: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZlL3dlYi9tb2RhbA==" };
    Avatar = tmp(tmp2[13]).Avatar;
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    return closure_22(View, obj5);
  }
}
let _asyncToGenerator = _asyncToGenerator_mod;
({ View: metroRequire, Pressable: metroImportDefault } = react_native);
({ YOU_BAR_AVATAR_LARGE_SIZE: unpackModuleId, YOU_BAR_AVATAR_PLACEHOLDER_SIZE: closure_12, YOU_BAR_AVATAR_SIZE: map1, YOU_BAR_STATUS_INSET: closure_14, YOU_BAR_HEIGHT: closure_15, YOU_BAR_LARGE_STATUS_SIZE: closure_16, YOU_BAR_PADDING: closure_17, YOU_BAR_SPRING_CONFIG: closure_18, YOU_BAR_STATUS_OFFSET: closure_19, YOU_BAR_AVATAR_LARGE_PX: closure_20 } = YouBarConstants);
const StatusTypes = Constants.StatusTypes;
({ jsx: closure_22, jsxs: closure_23 } = Fragment);
let createStyles = createStyles_mod;
let obj = { avatarShadow: obj2 };
obj2 = {};
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
let closure_24 = createStyles(obj);
const __initData = { code: "function YouBarAvatarTsx1(){const{withSpring,scale,YOU_BAR_SPRING_CONFIG,left,top,opacity,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{transform:[{scale:withSpring(scale.get(),YOU_BAR_SPRING_CONFIG)}],left:withSpring(left.get(),YOU_BAR_SPRING_CONFIG),top:withSpring(top.get(),YOU_BAR_SPRING_CONFIG),opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}" };
const __initData2 = { code: "function YouBarAvatarTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}" };
const __initData3 = { code: "function YouBarAvatarTsx3(){const{withSpring,opacity,YOU_BAR_SPRING_CONFIG,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}" };
let closure_29 = { code: "function YouBarAvatarTsx4(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}" };
const __initData4 = { code: "function YouBarAvatarTsx5(){const{withSpring,isAvatarPressed,YOU_BAR_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isAvatarPressed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_32 = { code: "function YouBarAvatarTsx6(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(false);}" };
let closure_33 = { code: "function YouBarAvatarTsx7(){const{runOnJS,handleAvatarLongPress}=this.__closure;runOnJS(handleAvatarLongPress)();}" };
let closure_34 = { code: "function YouBarAvatarTsx8(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(true);}" };
const memoResult = react.memo(function YouBarAvatarAnimated(isLargeAvatar) {
  let View;
  let currentUser;
  let items3;
  let obj5;
  let obj6;
  let obj7;
  let setIsAvatarPressed;
  isLargeAvatar = isLargeAvatar.isLargeAvatar;
  const onPress = isLargeAvatar.onPress;
  let isAvatarPressed;
  let callback1;
  const tmp = isLargeAvatar;
  const tmp2 = isAvatarPressed;
  let obj = isLargeAvatar(isAvatarPressed[12]);
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp4 = callback1(react.useState(false), 2);
  isAvatarPressed = tmp4[0];
  _asyncToGenerator = tmp4[1];
  let obj2 = isLargeAvatar(isAvatarPressed[15]);
  let fn = function _() {
    let items;
    let num = 1;
    const withSpring = spring.withSpring;
    spring;
    if (first) {
      num = 0.98;
    }
    const obj = { transform: items };
    items = [{ scale: withSpring(num, closure_18) }];
    ({ scale: withSpring(num, closure_18) });
    return obj;
  };
  let obj3 = { withSpring: isLargeAvatar(isAvatarPressed[18]).withSpring, isAvatarPressed, YOU_BAR_SPRING_CONFIG };
  fn.__closure = obj3;
  fn.__workletHash = 10944764008850;
  fn.__initData = __initData4;
  const items1 = [onPress];
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const callback = react.useCallback(() => {
    if (onPress != null) {
      tmp();
    }
    setIsAvatarPressed(false);
  }, items1);
  callback1 = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let paths;
    if (isAvatarPressed === 2) {
      isAvatarPressed = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        isAvatarPressed = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            isAvatarPressed = 3;
            throw value;
          } else if (arg0 === 2) {
            isAvatarPressed = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj2 = tmp3(isAvatarPressed[22]);
            const result = obj2.triggerHapticFeedback(tmp3(isAvatarPressed[22]).HapticFeedbackTypes.SOFT);
            c1 = 1;
            isAvatarPressed = 1;
            const obj5 = { value: tmp3(isAvatarPressed[24])(isAvatarPressed[23], isAvatarPressed.paths), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          isAvatarPressed = 3;
          throw value;
        } else if (arg0 === 2) {
          isAvatarPressed = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          value.openUserSettings();
          closure_128_3(false);
          isAvatarPressed = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        isAvatarPressed = 3;
        throw tmp11;
      }
    }
  }), []);
  const items2 = [callback1];
  const memo = react.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const LongPressResult = Gesture.LongPress();
    const result = LongPressResult.shouldCancelWhenOutside(false);
    const fn = function s() {
      const obj = isLargeAvatar(first[15]);
      obj.runOnJS(setIsAvatarPressed)(true);
    };
    let obj = { runOnJS: ReanimatedRexport.runOnJS, setIsAvatarPressed };
    fn.__closure = obj;
    fn.__workletHash = 11956186059259;
    fn.__initData = __initData3;
    const fn2 = function n() {
      const obj = isLargeAvatar(first[15]);
      obj.runOnJS(callback1)();
    };
    const onBeginResult = result.onBegin(fn);
    fn2.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleAvatarLongPress: callback1 };
    fn2.__workletHash = 446001392642;
    fn2.__initData = __initData2;
    ({ runOnJS: ReanimatedRexport.runOnJS, handleAvatarLongPress: callback1 });
    const fn3 = function t() {
      const obj = isLargeAvatar(first[15]);
      obj.runOnJS(setIsAvatarPressed)(false);
    };
    const onStartResult = onBeginResult.onStart(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport.runOnJS, setIsAvatarPressed };
    fn3.__workletHash = 1675248979678;
    fn3.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, setIsAvatarPressed });
    return onStartResult.onFinalize(fn3);
  }, items2);
  [][0] = isLargeAvatar;
  const callback2 = react.useCallback((arg0, arg1, transitionState, cleanup) => {
    const obj = { transitionState, cleanup };
    return closure_1_22(arg1 ? YouBarAvatarLarge : YouBarAvatar, obj, arg0);
  }, []);
  let tmp12 = null;
  if (null != stateFromStores) {
    let obj4 = { gesture: memo, children: closure_22(closure_7, obj5) };
    obj5 = {
      onPress: callback,
      onPressIn() {
          return setIsAvatarPressed(true);
        },
      onPressOut() {
          return setIsAvatarPressed(false);
        },
      android_ripple: { color: "transparent" },
      children: closure_22(View, obj6)
    };
    const GestureDetector = tmp(tmp2[25]).GestureDetector;
    obj6 = { style: items3, children: closure_22(tmp(tmp2[14]).TransitionGroup, obj7) };
    size = { height: tmp(tmp2[13]).AVATAR_SIZE_MAP[closure_12], width: tmp(tmp2[13]).AVATAR_SIZE_MAP[closure_12], position: "relative" };
    View = onPress(tmp2[15]).View;
    items3 = [size, animatedStyle];
    obj7 = {
      items: tmp11,
      getItemKey(arg0) {
          return arg0.toString();
        },
      renderItem: callback2
    };
    tmp12 = closure_22(GestureDetector, obj4);
  }
  return tmp12;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatar.tsx");

export default memoResult;
