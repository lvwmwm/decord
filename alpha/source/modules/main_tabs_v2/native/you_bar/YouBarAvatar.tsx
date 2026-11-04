// Module ID: 18730
// Function ID: 18731
// Name: YouBarAvatar
// Dependencies: [5, 32, 19, 17, 5142, 6705, 1385, 17322, 1072, 21, 5141, 575, 504, 1187, 5207, 1652, 6988, 9656, 5771, 1705, 5732, 9655, 8869, 5384, 7703, 2123, 5428, 2]

// Module 18730 (YouBarAvatar)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import native from "native" /* 1187 */;
import _mod1705 from "module_1705" /* 1705 */;
import native2 from "native" /* 5207 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5428 */;
import ClipView from "ClipView" /* 9656 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6705 */;
import UserStore from "UserStore" /* 1385 */;
import YouBarConstants from "YouBarConstants" /* 17322 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let _undefined4, dependencyMap, set, set2, set3, size2;

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
  let items7;
  let items8;
  let obj5;
  let obj8;
  let rect;
  let rect1;
  let size1;
  let size3;
  let size4;
  let status;
  let tmp14;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp2Result20;
  let tmp2Result21;
  let tmp2Result22;
  let tmp2Result24;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  transitionState = transitionState.transitionState;
  let sharedValue;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  const cleanup = transitionState.cleanup;
  let tmp2 = transitionState;
  let tmp = closure_24();
  let obj = transitionState(504);
  let items = [SelfPresenceStore];
  let OFFLINE = obj.useStateFromStores(items, () => status.getStatus());
  let items1 = [UserStore];
  const obj2 = transitionState(504);
  const stateFromStores = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const tmp5 = closure_20;
  let result = transitionState(1187).AVATAR_SIZE_MAP[closure_13] / closure_20;
  dependencyMap = result;
  const result1 = (closure_20 - transitionState(1187).AVATAR_SIZE_MAP[closure_13]) / 2;
  let tmp8 = transitionState === transitionState(5207).TransitionStates.MOUNTED;
  let num = 0;
  const useSharedValue = transitionState(1652).useSharedValue;
  const tmp9 = transitionState(1652);
  if (tmp8) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let num2 = 1;
  const useSharedValue2 = tmp2(1652).useSharedValue;
  tmp2(1652);
  if (!tmp8) {
    num2 = result;
  }
  sharedValue2 = useSharedValue2(num2);
  const useSharedValue3 = tmp2(1652).useSharedValue;
  tmp2(1652);
  if (tmp8) {
    tmp14 = -closure_17;
  } else {
    tmp14 = -result1;
  }
  sharedValue3 = useSharedValue3(tmp14);
  const useSharedValue4 = tmp2(1652).useSharedValue;
  tmp2(1652);
  if (tmp8) {
    diff = -closure_17 - (tmp5 - closure_15) / 2;
  } else {
    diff = -result1;
  }
  sharedValue4 = useSharedValue4(diff);
  let items2 = [transitionState, sharedValue, sharedValue2, sharedValue3, sharedValue4, result, result1];
  const effect = sharedValue2.useEffect(() => {
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
      num = c2;
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
  const tmp2Result15 = tmp2(6988);
  const avatarDecoration = tmp2Result15.useAvatarDecoration(stateFromStores);
  const items3 = [AccessibilityStore];
  const items4 = [OFFLINE];
  const tmp2Result16 = tmp2(504);
  const stateFromStores1 = tmp2Result16.useStateFromStores(items3, () => AccessibilityStore.animateYouBarAvatarDeco);
  const memo = sharedValue2.useMemo(() => {
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
  const items5 = [closure_26, , , , , , , , , , , ];
  const useAnimatedStyle = tmp2(1652).useAnimatedStyle;
  tmp2(1652);
  items5[1] = tmp2(5771).withSpring;
  items5[2] = sharedValue2;
  items5[3] = closure_18;
  items5[4] = sharedValue3;
  items5[5] = sharedValue4;
  items5[6] = sharedValue;
  items5[7] = closure_25;
  items5[8] = transitionState;
  items5[9] = tmp2(5207).TransitionStates;
  items5[10] = tmp2(1705).scheduleOnRN;
  items5[11] = cleanup;
  let c0;
  let c1;
  dependencyMap = undefined;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items5;
  class YouBarAvatarTsx2 {
    constructor() {
      let _undefined2;
      let items;
      let tmp;
      let tmp2;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let value;
      const rect = { transform: items, left: _undefined(_undefined4.get(), c2), top: _undefined(_undefined5.get(), c2), opacity: tmp(value, tmp2, "respect-motion-settings", YouBarAvatarTsx1) };
      tmp = _undefined;
      items = [{ scale: _undefined(_undefined2.get(), c2) }];
      ({ scale: _undefined(_undefined2.get(), c2) });
      value = _undefined6.get();
      const items1 = [c6, c7, c8, c9, c10];
      _undefined = undefined;
      _undefined2 = undefined;
      tmp2 = c2;
      c2 = undefined;
      _undefined4 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8] = items1;
      class YouBarAvatarTsx1 {
        constructor(arg0) {
          tmp = arg0;
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
      const items2 = [tmp5, tmp6, tmp7, tmp8];
      YouBarAvatarTsx1.__closure = items2;
      YouBarAvatarTsx1.__workletHash = 12612160073355;
      YouBarAvatarTsx1.__initData = tmp4;
      return rect;
    }
  }
  const items6 = [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38];
  YouBarAvatarTsx2.__closure = items6;
  YouBarAvatarTsx2.__workletHash = 7492548934333;
  YouBarAvatarTsx2.__initData = tmp27;
  const animatedStyle = useAnimatedStyle(YouBarAvatarTsx2);
  const tmp2Result18 = tmp2(5732);
  const token = tmp2Result18.useToken(OFFLINE(575).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  tmp2(5732);
  let tmp45Result = null;
  if (null != stateFromStores) {
    const obj3 = { style: items7, children: items8 };
    items7 = [tmp.avatarShadow, , ];
    size = { position: "absolute", width: tmp5, height: tmp5 };
    items7[1] = size;
    items7[2] = animatedStyle;
    const View = tmp40(1652).View;
    let nativeCutouts;
    const tmp40Result = OFFLINE(9656);
    const tmp45 = closure_23;
    if (memo != null) {
      nativeCutouts = memo.nativeCutouts;
    }
    const obj4 = { cutouts: nativeCutouts, style: size1, children: closure_22(sharedValue3, obj5) };
    size1 = { position: "absolute", width: tmp5, height: tmp5 };
    obj5 = { style: size2 };
    size2 = { width: tmp5, height: tmp5, borderRadius: tmp5 / 2, backgroundColor: token };
    items8 = [closure_22(tmp40Result, obj4), , , ];
    const obj6 = { user: stateFromStores, guildId: "Array", size, animate: true, needsOffscreenAlphaCompositing: null, status: OFFLINE, statusSizeOverride, cutout: memo, statusStyle: rect };
    const Avatar = tmp2(1187).Avatar;
    const tmp49 = sharedValue3;
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    rect = { right: closure_14 - closure_19, bottom: closure_14 - closure_19 };
    items8[1] = closure_22(Avatar, obj6);
    let mapped;
    const tmp40Result3 = OFFLINE(9656);
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
    const obj7 = { cutouts: mapped, style: size3, pointerEvents: "none", children: closure_22(tmp49, obj8) };
    size3 = { position: "absolute", top: -1, left: -1, width: tmp5 + 2, height: tmp5 + 2 };
    obj8 = { style: size4 };
    size4 = { width: tmp5 + 2, height: tmp5 + 2, borderRadius: (tmp5 + 2) / 2, borderWidth: 1, borderColor: tmp43 };
    items8[2] = closure_22(tmp40Result3, obj7);
    let tmp46Result = null != avatarDecoration;
    if (tmp46Result) {
      const obj9 = { size: tmp2Result20.getDecorationSizeForAvatarSize(size), avatarDecoration, decorationStyle: rect1, animate: stateFromStores1 && "always", cutout: getDecorationCutoutForAvatarCutout(memo, (tmp2Result24.getDecorationSizeForAvatarSize(size) - tmp5) / 2) };
      const tmp40Result4 = OFFLINE(9655);
      tmp2Result20 = tmp2(8869);
      rect1 = { position: "absolute", top: -tmp2Result21.getDecorationSizeForAvatarSize(size) - tmp5 / 2, left: -tmp2Result22.getDecorationSizeForAvatarSize(size) - tmp5 / 2 };
      tmp2Result21 = tmp2(8869);
      tmp2Result22 = tmp2(8869);
      getDecorationCutoutForAvatarCutout = tmp2(8869).getDecorationCutoutForAvatarCutout;
      tmp2(8869);
      tmp2Result24 = tmp2(8869);
      tmp46Result = tmp46(tmp40Result4, obj9, avatarDecoration.asset);
    }
    items8[3] = tmp46Result;
    tmp45Result = tmp45(View, obj3);
  }
  return tmp45Result;
}
function YouBarAvatar(transitionState) {
  let Avatar;
  let currentUser;
  let items5;
  let obj5;
  let status;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp8;
  let tmp9;
  transitionState = transitionState.transitionState;
  let sharedValue;
  let tmp = transitionState;
  const cleanup = transitionState.cleanup;
  let obj = transitionState(504);
  let items = [SelfPresenceStore];
  let OFFLINE = obj.useStateFromStores(items, () => status.getStatus());
  let items1 = [UserStore];
  const obj2 = transitionState(504);
  const stateFromStores = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj3 = transitionState(6988);
  const avatarDecoration = obj3.useAvatarDecoration(stateFromStores);
  const tmp5 = transitionState(1652);
  const useSharedValue = tmp5.useSharedValue;
  let num = 0;
  if (transitionState === transitionState(5207).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const items2 = [closure_29, , , , , , , , ];
  const useAnimatedStyle = tmp(1652).useAnimatedStyle;
  tmp(1652);
  items2[1] = tmp(5771).withSpring;
  items2[2] = sharedValue;
  items2[3] = closure_18;
  items2[4] = closure_28;
  items2[5] = transitionState;
  items2[6] = tmp(5207).TransitionStates;
  items2[7] = tmp(1705).scheduleOnRN;
  items2[8] = cleanup;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
  class YouBarAvatarTsx4 {
    constructor() {
      let _undefined;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp = c0;
      const value = _undefined.get();
      const items = [c3, c4, c5, c6, c7];
      c0 = undefined;
      _undefined = undefined;
      const tmp3 = c2;
      c2 = undefined;
      c3 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
      const obj = { opacity: tmp(value, tmp3, "respect-motion-settings", YouBarAvatarTsx3) };
      class YouBarAvatarTsx3 {
        constructor(arg0) {
          tmp = arg0;
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
      const items1 = [tmp5, tmp6, tmp7, tmp8];
      YouBarAvatarTsx3.__closure = items1;
      YouBarAvatarTsx3.__workletHash = 3956764835913;
      YouBarAvatarTsx3.__initData = tmp4;
      return obj;
    }
  }
  const items3 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  YouBarAvatarTsx4.__closure = items3;
  YouBarAvatarTsx4.__workletHash = 11641235222673;
  YouBarAvatarTsx4.__initData = tmp8;
  const items4 = [sharedValue, transitionState];
  const animatedStyle = useAnimatedStyle(YouBarAvatarTsx4);
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (transitionState === native2.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else {
    let result = (tmp(1187).AVATAR_SIZE_MAP[size2] - tmp(1187).AVATAR_SIZE_MAP[closure_12]) / 2;
    const rect = { position: "absolute", top: -result, left: -result };
    const obj4 = { style: items5, children: closure_22(Avatar, obj5) };
    items5 = [rect, animatedStyle];
    const View = sharedValue(1652).View;
    obj5 = { user: stateFromStores, guildId: "Array", size: size2, animate: true, needsOffscreenAlphaCompositing: null, avatarDecoration, status: OFFLINE, autoStatusCutout: "/assets/.cache/intl/bW9kdWxlcy9naWZ0X2NhcmRzL21lc3NhZ2Vz" };
    Avatar = tmp(1187).Avatar;
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    return closure_22(View, obj4);
  }
}
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
let closure_25 = { code: "(function YouBarAvatarTsx1(finished){let[transitionState,TransitionStates,scheduleOnRN,cleanup]=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanup);}})" };
let closure_26 = { code: "(function YouBarAvatarTsx2(){let[withSpring,scale,YOU_BAR_SPRING_CONFIG,left,top,opacity,_worklet_12612160073355_init_data,transitionState,TransitionStates,scheduleOnRN,cleanup]=this.__closure;return{transform:[{scale:withSpring(scale.get(),YOU_BAR_SPRING_CONFIG)}],left:withSpring(left.get(),YOU_BAR_SPRING_CONFIG),top:withSpring(top.get(),YOU_BAR_SPRING_CONFIG),opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function YouBarAvatarTsx1Factory([_worklet_12612160073355_init_data,transitionState,TransitionStates,scheduleOnRN,cleanup]){const YouBarAvatarTsx1=function(finished){if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanup);}};YouBarAvatarTsx1.__closure=[transitionState,TransitionStates,scheduleOnRN,cleanup];YouBarAvatarTsx1.__workletHash=12612160073355;YouBarAvatarTsx1.__initData=_worklet_12612160073355_init_data;return YouBarAvatarTsx1;}([_worklet_12612160073355_init_data,transitionState,TransitionStates,scheduleOnRN,cleanup]))};})" };
let closure_28 = { code: "(function YouBarAvatarTsx3(finished){let[transitionState,TransitionStates,scheduleOnRN,cleanup]=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanup);}})" };
let closure_29 = { code: "(function YouBarAvatarTsx4(){let[withSpring,opacity,YOU_BAR_SPRING_CONFIG,_worklet_3956764835913_init_data,transitionState,TransitionStates,scheduleOnRN,cleanup]=this.__closure;return{opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function YouBarAvatarTsx3Factory([_worklet_3956764835913_init_data,transitionState,TransitionStates,scheduleOnRN,cleanup]){const YouBarAvatarTsx3=function(finished){if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanup);}};YouBarAvatarTsx3.__closure=[transitionState,TransitionStates,scheduleOnRN,cleanup];YouBarAvatarTsx3.__workletHash=3956764835913;YouBarAvatarTsx3.__initData=_worklet_3956764835913_init_data;return YouBarAvatarTsx3;}([_worklet_3956764835913_init_data,transitionState,TransitionStates,scheduleOnRN,cleanup]))};})" };
let closure_31 = { code: "(function YouBarAvatarTsx5(){let[withSpring,isAvatarPressed,YOU_BAR_SPRING_CONFIG]=this.__closure;return{transform:[{scale:withSpring(isAvatarPressed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};})" };
let closure_32 = { code: "(function YouBarAvatarTsx6(){let[scheduleOnRN,setIsAvatarPressed]=this.__closure;scheduleOnRN(setIsAvatarPressed,true);})" };
let closure_33 = { code: "(function YouBarAvatarTsx7(){let[scheduleOnRN,handleAvatarLongPress]=this.__closure;scheduleOnRN(handleAvatarLongPress);})" };
let closure_34 = { code: "(function YouBarAvatarTsx8(){let[scheduleOnRN,setIsAvatarPressed]=this.__closure;scheduleOnRN(setIsAvatarPressed,false);})" };
const memoResult = react.memo(function YouBarAvatarAnimated(isLargeAvatar) {
  let View;
  let c2;
  let currentUser;
  let items5;
  let obj4;
  let obj5;
  let obj6;
  let tmp10;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp9;
  isLargeAvatar = isLargeAvatar.isLargeAvatar;
  const onPress = isLargeAvatar.onPress;
  dependencyMap = undefined;
  let callback1;
  const tmp = isLargeAvatar;
  const tmp2 = dependencyMap;
  let obj = isLargeAvatar(504);
  let items = [UserStore];
  let obj2 = react;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp4 = _slicedToArray(react.useState(false), 2);
  [tmp5, c2] = tmp4;
  const tmp6 = isLargeAvatar(1652);
  let items1 = [closure_31, , , ];
  const useAnimatedStyle = tmp6.useAnimatedStyle;
  items1[1] = isLargeAvatar(5771).withSpring;
  items1[2] = tmp5;
  items1[3] = closure_18;
  let c0;
  let c1;
  dependencyMap = undefined;
  [tmp7, tmp8, tmp9, tmp10] = items1;
  class YouBarAvatarTsx5 {
    constructor() {
      let items;
      let num = 1;
      if (c1) {
        num = 0.98;
      }
      const obj = { transform: items };
      items = [{ scale: tmp(num, c2) }];
      ({ scale: _undefined(num, c2) });
      return obj;
    }
  }
  let items2 = [tmp8, tmp9, tmp10];
  YouBarAvatarTsx5.__closure = items2;
  YouBarAvatarTsx5.__workletHash = 4651565273867;
  YouBarAvatarTsx5.__initData = tmp7;
  let items3 = [onPress];
  const animatedStyle = useAnimatedStyle(YouBarAvatarTsx5);
  const callback = obj2.useCallback(() => {
    if (onPress != null) {
      tmp();
    }
    _undefined(false);
  }, items3);
  callback1 = obj2.useCallback(callback1(function*(arg0, value) {
    let closure_0;
    let paths;
    if (_undefined === 2) {
      _undefined = 3;
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
        _undefined = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            _undefined = 3;
            throw value;
          } else if (arg0 === 2) {
            _undefined = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj2 = tmp3(_undefined[23]);
            const result = obj2.triggerHapticFeedback(tmp3(_undefined[23]).HapticFeedbackTypes.SOFT);
            c1 = 1;
            _undefined = 1;
            const obj5 = { value: tmp3(_undefined[25])(_undefined[24], _undefined.paths), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          _undefined = 3;
          throw value;
        } else if (arg0 === 2) {
          _undefined = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          value.openUserSettings();
          closure_128_2(false);
          _undefined = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        _undefined = 3;
        throw tmp11;
      }
    }
  }), []);
  let items4 = [callback1];
  const memo = obj2.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp9;
    const Gesture = LegacyBaseButton.Gesture;
    const LongPressResult = Gesture.LongPress();
    const result = LongPressResult.shouldCancelWhenOutside(false);
    const items = [closure_32, , ];
    const onBegin = result.onBegin;
    items[1] = _mod1705.scheduleOnRN;
    items[2] = c2;
    let c0;
    let c1;
    [tmp5, tmp6, tmp7] = items;
    class YouBarAvatarTsx6 {
      constructor() {
        tmp = closure_0(closure_1, true);
        return;
      }
    }
    const items1 = [tmp6, tmp7];
    YouBarAvatarTsx6.__closure = items1;
    YouBarAvatarTsx6.__workletHash = 9336474323041;
    YouBarAvatarTsx6.__initData = tmp5;
    const items2 = [closure_33, , ];
    const onStart = onBegin(YouBarAvatarTsx6).onStart;
    onBegin(YouBarAvatarTsx6);
    items2[1] = _mod1705.scheduleOnRN;
    items2[2] = callback1;
    c0 = undefined;
    c1 = undefined;
    [tmp9, tmp10, tmp11] = items2;
    const tmp4 = c2;
    class YouBarAvatarTsx7 {
      constructor() {
        tmp = closure_0(closure_1);
        return;
      }
    }
    const items3 = [tmp10, tmp11];
    YouBarAvatarTsx7.__closure = items3;
    YouBarAvatarTsx7.__workletHash = 11759750447418;
    YouBarAvatarTsx7.__initData = tmp9;
    const items4 = [closure_34, , ];
    const onFinalize = onStart(YouBarAvatarTsx7).onFinalize;
    onStart(YouBarAvatarTsx7);
    items4[1] = _mod1705.scheduleOnRN;
    items4[2] = tmp4;
    c0 = undefined;
    c1 = undefined;
    [tmp13, tmp14, tmp15] = items4;
    class YouBarAvatarTsx8 {
      constructor() {
        tmp = closure_0(closure_1, false);
        return;
      }
    }
    const items5 = [tmp14, tmp15];
    YouBarAvatarTsx8.__closure = items5;
    YouBarAvatarTsx8.__workletHash = 8238011315684;
    YouBarAvatarTsx8.__initData = tmp13;
    return onFinalize(YouBarAvatarTsx8);
  }, items4);
  [][0] = isLargeAvatar;
  const callback2 = obj2.useCallback((arg0, arg1, transitionState, cleanup) => {
    const obj = { transitionState, cleanup };
    return closure_1_22(arg1 ? YouBarAvatarLarge : YouBarAvatar, obj, arg0);
  }, []);
  let tmp17 = null;
  if (null != stateFromStores) {
    let obj3 = { gesture: memo, children: closure_22(closure_7, obj4) };
    obj4 = {
      onPress: callback,
      onPressIn() {
          return _undefined(true);
        },
      onPressOut() {
          return _undefined(false);
        },
      android_ripple: { color: "transparent" },
      children: closure_22(View, obj5)
    };
    const GestureDetector = tmp(5428).GestureDetector;
    obj5 = { style: items5, children: closure_22(tmp(5207).TransitionGroup, obj6) };
    size = { height: tmp(1187).AVATAR_SIZE_MAP[closure_12], width: tmp(1187).AVATAR_SIZE_MAP[closure_12], position: "relative" };
    View = onPress(1652).View;
    items5 = [size, animatedStyle];
    obj6 = {
      items: tmp16,
      getItemKey(arg0) {
          return arg0.toString();
        },
      renderItem: callback2
    };
    tmp17 = closure_22(GestureDetector, obj3);
  }
  return tmp17;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatar.tsx");

export default memoResult;
