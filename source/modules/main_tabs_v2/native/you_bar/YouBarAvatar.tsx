// Module ID: 14988
// Function ID: 112865
// Name: YouBarAvatarLarge
// Dependencies: []

// Module 14988 (YouBarAvatarLarge)
function YouBarAvatarLarge(transitionState) {
  transitionState = transitionState.transitionState;
  const arg1 = transitionState;
  const cleanup = transitionState.cleanup;
  const importDefault = cleanup;
  let importAllResult;
  let sharedValue1;
  let sharedValue2;
  let closure_8;
  let obj = arg1(dependencyMap[11]);
  const items = [closure_8];
  let OFFLINE = obj.useStateFromStores(items, () => sharedValue3.getStatus());
  const dependencyMap = OFFLINE;
  let obj1 = arg1(dependencyMap[11]);
  const items1 = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const result = arg1(dependencyMap[12]).AVATAR_SIZE_MAP[closure_12] / closure_19;
  let closure_3 = result;
  const result1 = (closure_19 - arg1(dependencyMap[12]).AVATAR_SIZE_MAP[closure_12]) / 2;
  let closure_4 = result1;
  let obj2 = arg1(dependencyMap[13]);
  let num = 0;
  if (transitionState === arg1(dependencyMap[14]).TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = obj2.useSharedValue(num);
  importAllResult = sharedValue;
  let obj3 = arg1(dependencyMap[13]);
  let num2 = 1;
  if (transitionState !== arg1(dependencyMap[14]).TransitionStates.MOUNTED) {
    num2 = result;
  }
  sharedValue1 = obj3.useSharedValue(num2);
  let obj4 = arg1(dependencyMap[13]);
  if (transitionState === arg1(dependencyMap[14]).TransitionStates.MOUNTED) {
    let tmp7 = -closure_16;
  } else {
    tmp7 = -result1;
  }
  sharedValue2 = obj4.useSharedValue(tmp7);
  let obj5 = arg1(dependencyMap[13]);
  if (transitionState === arg1(dependencyMap[14]).TransitionStates.MOUNTED) {
    let diff = -closure_16 - (closure_19 - closure_14) / 2;
  } else {
    diff = -result1;
  }
  const sharedValue3 = obj5.useSharedValue(diff);
  closure_8 = sharedValue3;
  const items2 = [transitionState, sharedValue, cleanup, result, result1, sharedValue2, sharedValue3, sharedValue1];
  const effect = importAllResult.useEffect(() => {
    if (transitionState(OFFLINE[14]).TransitionStates.ENTERED !== transitionState) {
      if (transitionState(OFFLINE[14]).TransitionStates.MOUNTED !== tmp) {
        if (transitionState(OFFLINE[14]).TransitionStates.YEETED === tmp) {
          const obj2 = transitionState(OFFLINE[15]);
          const fn = function n() {
            callback(closure_2[13]).runOnJS(closure_1)();
          };
          let obj = { runOnJS: transitionState(OFFLINE[13]).runOnJS, cleanup };
          fn.__closure = obj;
          fn.__workletHash = 7725536128708;
          fn.__initData = closure_24;
          const result = sharedValue.set(obj2.withSpring(0, closure_17, "respect-motion-settings", fn));
          const result1 = sharedValue1.set(transitionState(OFFLINE[15]).withSpring(result, closure_17));
          const obj4 = transitionState(OFFLINE[15]);
          const result2 = sharedValue2.set(transitionState(OFFLINE[15]).withSpring(tmp21, closure_17));
          const obj5 = transitionState(OFFLINE[15]);
          const result3 = sharedValue3.set(transitionState(OFFLINE[15]).withSpring(tmp21, closure_17));
          const obj6 = transitionState(OFFLINE[15]);
        } else {
          obj = transitionState(OFFLINE[16]);
          obj.assertNever(transitionState);
        }
      }
    }
    const result4 = sharedValue.set(transitionState(OFFLINE[15]).withSpring(1, closure_17));
    const obj7 = transitionState(OFFLINE[15]);
    const result5 = sharedValue1.set(transitionState(OFFLINE[15]).withSpring(1, closure_17));
    const obj8 = transitionState(OFFLINE[15]);
    const result6 = sharedValue2.set(transitionState(OFFLINE[15]).withSpring(-closure_16, closure_17));
    const obj9 = transitionState(OFFLINE[15]);
    const result7 = sharedValue3.set(transitionState(OFFLINE[15]).withSpring(-closure_16 - (closure_19 - closure_14) / 2, closure_17));
  }, items2);
  let obj6 = arg1(dependencyMap[17]);
  const avatarDecoration = obj6.useAvatarDecoration(stateFromStores);
  const items3 = [OFFLINE];
  const memo = importAllResult.useMemo(() => {
    if (OFFLINE === constants.UNKNOWN) {
      const OFFLINE = constants.OFFLINE;
    }
    if (null != OFFLINE) {
      const result = closure_15 / 2;
      const sum = result + transitionState(OFFLINE[12]).STATUS_PADDING;
      const diff = closure_19 - sum - closure_15 / 4 * 2;
      let obj = {};
      obj = { shape: transitionState(OFFLINE[18]).CutoutShape.Circle, x: diff + closure_18, y: diff + closure_18, size: 2 * sum };
      const items = [obj];
      obj.nativeCutouts = items;
      return obj;
    }
  }, items3);
  let obj7 = arg1(dependencyMap[13]);
  class M {
    constructor() {
      obj = {};
      obj = { scale: closure_6.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      obj.left = closure_7.get();
      obj.top = MOUNTED.get();
      obj.opacity = MOUNTED.get();
      return obj;
    }
  }
  M.__closure = { scale: sharedValue1, left: sharedValue2, top: sharedValue3, opacity: sharedValue };
  M.__workletHash = 1263402972256;
  M.__initData = closure_25;
  const animatedStyle = obj7.useAnimatedStyle(M);
  let obj8 = arg1(dependencyMap[19]);
  const token = obj8.useToken(importDefault(dependencyMap[10]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  arg1(dependencyMap[19]);
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
    obj1.children = callback3(sharedValue1, obj3);
    const items5 = [callback3(importDefault(dependencyMap[18]), obj1), , , ];
    obj5 = { user: stateFromStores, guildId: undefined, size: closure_10, animate: false, needsOffscreenAlphaCompositing: true };
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    obj5.status = OFFLINE;
    obj5.statusSizeOverride = closure_15;
    obj5.cutout = memo;
    obj6 = { right: closure_13 - closure_18, bottom: closure_13 - closure_18 };
    obj5.statusStyle = obj6;
    items5[1] = callback3(arg1(dependencyMap[12]).Avatar, obj5);
    obj7 = {};
    let mapped;
    const tmp23 = closure_22;
    const tmp28 = callback3;
    const tmp29 = importDefault(dependencyMap[18]);
    const tmp38 = callback3;
    const tmp49 = callback3;
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
    obj8 = { width: closure_19 + 2, height: closure_19 + 2 };
    obj7.style = obj8;
    class M {
      constructor() {
        obj = {};
        obj = { scale: closure_6.get() };
        items = [];
        items[0] = obj;
        obj.transform = items;
        obj.left = closure_7.get();
        obj.top = MOUNTED.get();
        obj.opacity = MOUNTED.get();
        return obj;
      }
    }
    obj7.pointerEvents = "none";
    const obj9 = {};
    const obj10 = { width: closure_19 + 2, height: closure_19 + 2, borderRadius: (closure_19 + 2) / 2, borderWidth: 1, borderColor: tmp21 };
    obj9.style = obj10;
    obj7.children = callback3(sharedValue1, obj9);
    items5[2] = tmp49(importDefault(dependencyMap[18]), obj7);
    let tmp61 = null != avatarDecoration;
    if (tmp61) {
      const obj11 = {};
      const tmp65 = importDefault(dependencyMap[20]);
      obj11.size = arg1(dependencyMap[21]).getDecorationSizeForAvatarSize(closure_10);
      obj11.avatarDecoration = avatarDecoration;
      const obj12 = { position: "absolute" };
      const obj23 = arg1(dependencyMap[21]);
      obj12.top = -arg1(dependencyMap[21]).getDecorationSizeForAvatarSize(closure_10) - closure_19 / 2;
      const obj25 = arg1(dependencyMap[21]);
      obj12.left = -arg1(dependencyMap[21]).getDecorationSizeForAvatarSize(closure_10) - closure_19 / 2;
      obj11.decorationStyle = obj12;
      obj11.animate = false;
      const obj26 = arg1(dependencyMap[21]);
      const obj27 = arg1(dependencyMap[21]);
      obj11.cutout = obj27.getDecorationCutoutForAvatarCutout(memo, (arg1(dependencyMap[21]).getDecorationSizeForAvatarSize(closure_10) - closure_19) / 2);
      tmp61 = callback3(tmp65, obj11, avatarDecoration.asset);
      const obj28 = arg1(dependencyMap[21]);
    }
    items5[3] = tmp61;
    obj.children = items5;
    tmp23Result = tmp23(importDefault(dependencyMap[13]).View, obj);
    const tmp52 = importDefault(dependencyMap[18]);
  }
  return tmp23Result;
}
function YouBarAvatar(transitionState) {
  transitionState = transitionState.transitionState;
  const arg1 = transitionState;
  const cleanup = transitionState.cleanup;
  const importDefault = cleanup;
  let dependencyMap;
  let obj = arg1(dependencyMap[11]);
  const items = [closure_8];
  let OFFLINE = obj.useStateFromStores(items, () => status.getStatus());
  let obj1 = arg1(dependencyMap[11]);
  const items1 = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const avatarDecoration = arg1(dependencyMap[17]).useAvatarDecoration(stateFromStores);
  const obj3 = arg1(dependencyMap[17]);
  let num = 0;
  if (transitionState === arg1(dependencyMap[14]).TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = arg1(dependencyMap[13]).useSharedValue(num);
  dependencyMap = sharedValue;
  const items2 = [transitionState, sharedValue, cleanup];
  const effect = importAllResult.useEffect(() => {
    if (transitionState(sharedValue[14]).TransitionStates.ENTERED !== transitionState) {
      if (transitionState(sharedValue[14]).TransitionStates.MOUNTED !== tmp) {
        if (transitionState(sharedValue[14]).TransitionStates.YEETED === tmp) {
          const obj2 = transitionState(sharedValue[15]);
          const fn = function n() {
            callback(closure_2[13]).runOnJS(closure_1)();
          };
          let obj = { runOnJS: transitionState(sharedValue[13]).runOnJS, cleanup };
          fn.__closure = obj;
          fn.__workletHash = 12490409237702;
          fn.__initData = closure_26;
          const result = sharedValue.set(obj2.withSpring(0, closure_17, "respect-motion-settings", fn));
        } else {
          obj = transitionState(sharedValue[16]);
          obj.assertNever(transitionState);
        }
      }
    }
    const result1 = sharedValue.set(transitionState(sharedValue[15]).withSpring(1, closure_17));
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    const result = (arg1(dependencyMap[12]).AVATAR_SIZE_MAP[closure_12] - arg1(dependencyMap[12]).AVATAR_SIZE_MAP[closure_11]) / 2;
    obj = {};
    obj = { position: "absolute", top: -result, left: -result, opacity: sharedValue };
    obj.style = obj;
    obj1 = { user: stateFromStores, guildId: undefined, size: closure_12, animate: false, needsOffscreenAlphaCompositing: true, avatarDecoration };
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    obj1.status = OFFLINE;
    obj1.autoStatusCutout = true;
    obj.children = closure_21(arg1(dependencyMap[12]).Avatar, obj1);
    return closure_21(importDefault(dependencyMap[13]).View, obj);
  }
  const obj4 = arg1(dependencyMap[13]);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ View: closure_6, Pressable: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[3]);
({ YOU_BAR_AVATAR_LARGE_SIZE: closure_10, YOU_BAR_AVATAR_PLACEHOLDER_SIZE: closure_11, YOU_BAR_AVATAR_SIZE: closure_12, YOU_BAR_STATUS_INSET: closure_13, YOU_BAR_HEIGHT: closure_14, YOU_BAR_LARGE_STATUS_SIZE: closure_15, YOU_BAR_PADDING: closure_16, YOU_BAR_SPRING_CONFIG: closure_17, YOU_BAR_STATUS_OFFSET: closure_18, YOU_BAR_AVATAR_LARGE_PX: closure_19 } = arg1(dependencyMap[6]));
const StatusTypes = arg1(dependencyMap[7]).StatusTypes;
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_21, jsxs: closure_22 } = arg1(dependencyMap[8]));
const tmp4 = arg1(dependencyMap[8]);
let obj = {};
obj = {};
const merged = Object.assign(importDefault(dependencyMap[10]).shadows.SHADOW_MEDIUM);
obj.avatarShadow = obj;
let closure_23 = arg1(dependencyMap[9]).createStyles(obj);
let closure_24 = { code: "function YouBarAvatarTsx1(){const{runOnJS,cleanup}=this.__closure;runOnJS(cleanup)();}" };
let closure_25 = { code: "function YouBarAvatarTsx2(){const{scale,left,top,opacity}=this.__closure;return{transform:[{scale:scale.get()}],left:left.get(),top:top.get(),opacity:opacity.get()};}" };
let closure_26 = { code: "function YouBarAvatarTsx3(){const{runOnJS,cleanup}=this.__closure;runOnJS(cleanup)();}" };
let closure_27 = { code: "function YouBarAvatarTsx4(){const{withSpring,isAvatarPressed,YOU_BAR_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isAvatarPressed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_28 = { code: "function YouBarAvatarTsx5(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(false);}" };
let closure_29 = { code: "function YouBarAvatarTsx6(){const{runOnJS,handleAvatarLongPress}=this.__closure;runOnJS(handleAvatarLongPress)();}" };
let closure_30 = { code: "function YouBarAvatarTsx7(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(true);}" };
const obj2 = arg1(dependencyMap[9]);
const memoResult = importAllResult.memo(function YouBarAvatarAnimated(isLargeAvatar) {
  isLargeAvatar = isLargeAvatar.isLargeAvatar;
  const arg1 = isLargeAvatar;
  const onPress = isLargeAvatar.onPress;
  const importDefault = onPress;
  let obj = arg1(dependencyMap[11]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp2 = callback2(importAllResult.useState(false), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  let callback = tmp2[1];
  let obj1 = arg1(dependencyMap[13]);
  const fn = function c() {
    let obj = {};
    obj = {};
    let num = 1;
    if (first) {
      num = 0.98;
    }
    obj.scale = isLargeAvatar(first[15]).withSpring(num, closure_17);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[15]).withSpring, isAvatarPressed: first, YOU_BAR_SPRING_CONFIG: closure_17 };
  fn.__closure = obj;
  fn.__workletHash = 11045019958035;
  fn.__initData = closure_27;
  const items1 = [onPress];
  const fn2 = () => {
    if (null != onPress) {
      onPress();
    }
    callback(false);
  };
  const animatedStyle = obj1.useAnimatedStyle(fn);
  // CreateGeneratorClosureLongIndex (0x67)
  callback = importAllResult.useCallback(fn2, items1);
  const callback1 = importAllResult.useCallback(callback(fn2), []);
  let callback2 = callback1;
  const items2 = [callback1];
  const memo = importAllResult.useMemo(() => {
    const Gesture = isLargeAvatar(first[25]).Gesture;
    const result = Gesture.LongPress().shouldCancelWhenOutside(false);
    const fn = function n() {
      callback(closure_2[13]).runOnJS(closure_3)(true);
    };
    let obj = { runOnJS: isLargeAvatar(first[13]).runOnJS, setIsAvatarPressed: closure_3 };
    fn.__closure = obj;
    fn.__workletHash = 3059819956724;
    fn.__initData = closure_30;
    const LongPressResult = Gesture.LongPress();
    const fn2 = function s() {
      callback(closure_2[13]).runOnJS(closure_4)();
    };
    obj = { runOnJS: isLargeAvatar(first[13]).runOnJS, handleAvatarLongPress: callback1 };
    fn2.__closure = obj;
    fn2.__workletHash = 546257341827;
    fn2.__initData = closure_29;
    const onBeginResult = result.onBegin(fn);
    const fn3 = function t() {
      callback(closure_2[13]).runOnJS(closure_3)(false);
    };
    const onStartResult = result.onBegin(fn).onStart(fn2);
    fn3.__closure = { runOnJS: isLargeAvatar(first[13]).runOnJS, setIsAvatarPressed: closure_3 };
    fn3.__workletHash = 13941331198045;
    fn3.__initData = closure_28;
    return onStartResult.onFinalize(fn3);
  }, items2);
  [][0] = isLargeAvatar;
  callback2 = importAllResult.useCallback((arg0, arg1, transitionState, cleanup) => callback2(arg1 ? closure_31 : closure_32, { transitionState, cleanup }, arg0), []);
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
    const obj4 = { height: arg1(dependencyMap[12]).AVATAR_SIZE_MAP[closure_11], width: arg1(dependencyMap[12]).AVATAR_SIZE_MAP[closure_11], position: "relative" };
    const items3 = [obj4, animatedStyle];
    obj3.style = items3;
    const obj5 = {
      items: tmp9,
      getItemKey(arg0) {
          return arg0.toString();
        },
      renderItem: callback2
    };
    obj3.children = callback3(arg1(dependencyMap[14]).TransitionGroup, obj5);
    obj1.children = callback3(importDefault(dependencyMap[13]).View, obj3);
    obj.children = callback3(closure_7, obj1);
    tmp10 = callback3(arg1(dependencyMap[25]).GestureDetector, obj);
  }
  return tmp10;
});
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatar.tsx");

export default memoResult;
