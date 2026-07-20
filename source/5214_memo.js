// Module ID: 5214
// Function ID: 44112
// Name: memo
// Dependencies: []

// Module 5214 (memo)
let memo;
let closure_3 = importDefault(dependencyMap[0]);
({ useCallback: closure_4, useEffect: closure_5, useMemo: closure_6, useRef: closure_7, useState: closure_8, memo } = arg1(dependencyMap[1]));
importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_10 = { code: "function pnpm_BottomSheetBackdropTsx1(){const{runOnJS,handleOnPress}=this.__closure;runOnJS(handleOnPress)();}" };
let closure_11 = { code: "function pnpm_BottomSheetBackdropTsx2(){const{interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity,Extrapolation}=this.__closure;return{opacity:interpolate(animatedIndex.value,[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity],Extrapolation.CLAMP)};}" };
let closure_12 = { code: "function pnpm_BottomSheetBackdropTsx3(){const{animatedIndex,disappearsOnIndex}=this.__closure;return animatedIndex.value<=disappearsOnIndex;}" };
let closure_13 = { code: "function pnpm_BottomSheetBackdropTsx4(shouldDisableTouchability,previous){const{runOnJS,handleContainerTouchability}=this.__closure;if(shouldDisableTouchability===previous){return;}runOnJS(handleContainerTouchability)(shouldDisableTouchability);}" };
const memoResult = memo(function BottomSheetBackdropComponent(animatedIndex) {
  let ViewComponent;
  let appearsOnIndex;
  let children;
  let disappearsOnIndex;
  let enableTouchThrough;
  let opacity;
  let pressBehavior;
  animatedIndex = animatedIndex.animatedIndex;
  const arg1 = animatedIndex;
  ({ opacity, appearsOnIndex, disappearsOnIndex, enableTouchThrough, pressBehavior } = animatedIndex);
  if (undefined === pressBehavior) {
    pressBehavior = arg1(dependencyMap[3]).DEFAULT_PRESS_BEHAVIOR;
  }
  const importDefault = pressBehavior;
  const onPress = animatedIndex.onPress;
  const dependencyMap = onPress;
  const style = animatedIndex.style;
  const callback = style;
  ({ ViewComponent, children } = animatedIndex);
  if (undefined === ViewComponent) {
    ViewComponent = importDefault(dependencyMap[4]).View;
  }
  let DEFAULT_ACCESSIBLE = animatedIndex.accessible;
  if (undefined === DEFAULT_ACCESSIBLE) {
    DEFAULT_ACCESSIBLE = arg1(dependencyMap[3]).DEFAULT_ACCESSIBLE;
  }
  let DEFAULT_ACCESSIBILITY_ROLE = animatedIndex.accessibilityRole;
  if (undefined === DEFAULT_ACCESSIBILITY_ROLE) {
    DEFAULT_ACCESSIBILITY_ROLE = arg1(dependencyMap[3]).DEFAULT_ACCESSIBILITY_ROLE;
  }
  let DEFAULT_ACCESSIBILITY_LABEL = animatedIndex.accessibilityLabel;
  if (undefined === DEFAULT_ACCESSIBILITY_LABEL) {
    DEFAULT_ACCESSIBILITY_LABEL = arg1(dependencyMap[3]).DEFAULT_ACCESSIBILITY_LABEL;
  }
  let DEFAULT_ACCESSIBILITY_HINT = animatedIndex.accessibilityHint;
  if (undefined === DEFAULT_ACCESSIBILITY_HINT) {
    DEFAULT_ACCESSIBILITY_HINT = arg1(dependencyMap[3]).DEFAULT_ACCESSIBILITY_HINT;
  }
  let obj = arg1(dependencyMap[5]);
  const bottomSheet = obj.useBottomSheet();
  const snapToIndex = bottomSheet.snapToIndex;
  const close = bottomSheet.close;
  const callback2 = opacity(false);
  if (null == opacity) {
    opacity = arg1(dependencyMap[3]).DEFAULT_OPACITY;
  }
  if (null == appearsOnIndex) {
    appearsOnIndex = arg1(dependencyMap[3]).DEFAULT_APPEARS_ON_INDEX;
  }
  if (null == disappearsOnIndex) {
    disappearsOnIndex = arg1(dependencyMap[3]).DEFAULT_DISAPPEARS_ON_INDEX;
  }
  const jsx = disappearsOnIndex;
  if (null == enableTouchThrough) {
    enableTouchThrough = arg1(dependencyMap[3]).DEFAULT_ENABLE_TOUCH_THROUGH;
  }
  let str = "auto";
  if (enableTouchThrough) {
    str = "none";
  }
  const tmp23 = callback(appearsOnIndex(str), 2);
  let closure_10 = tmp23[1];
  const items = [snapToIndex, close, disappearsOnIndex, pressBehavior, onPress];
  const tmp24 = snapToIndex(() => {
    if (null != onPress) {
      onPress();
    }
    if ("close" === pressBehavior) {
      close();
    } else if ("collapse" === pressBehavior) {
      snapToIndex(disappearsOnIndex);
    } else if ("number" === typeof pressBehavior) {
      snapToIndex(pressBehavior);
    }
  }, items);
  let closure_11 = tmp24;
  const tmp25 = snapToIndex((arg0) => {
    if (ref.current) {
      let str = "auto";
      if (arg0) {
        str = "none";
      }
      closure_10(str);
      const tmp = closure_10;
    }
  }, []);
  let closure_12 = tmp25;
  const items1 = [tmp24];
  let obj1 = arg1(dependencyMap[4]);
  /* worklet (recovered source) */ function pnpm_BottomSheetBackdropTsx2(){const{interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity,Extrapolation}=this.__closure;return{opacity:interpolate(animatedIndex.value,[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity],Extrapolation.CLAMP)};}
  obj = { interpolate: arg1(dependencyMap[4]).interpolate, animatedIndex, disappearsOnIndex, appearsOnIndex, opacity, Extrapolation: arg1(dependencyMap[4]).Extrapolation };
  pnpm_BottomSheetBackdropTsx2.__closure = obj;
  pnpm_BottomSheetBackdropTsx2.__workletHash = 7085425846204;
  pnpm_BottomSheetBackdropTsx2.__initData = closure_11;
  const items2 = [animatedIndex, appearsOnIndex, disappearsOnIndex, opacity];
  const animatedStyle = obj1.useAnimatedStyle(pnpm_BottomSheetBackdropTsx2, items2);
  let closure_13 = animatedStyle;
  const items3 = [style, animatedStyle];
  const tmp22 = appearsOnIndex;
  const tmp26 = callback2(() => {
    const Gesture = animatedIndex(onPress[6]).Gesture;
    /* worklet (recovered source) */ function pnpm_BottomSheetBackdropTsx1(){const{runOnJS,handleOnPress}=this.__closure;runOnJS(handleOnPress)();}
    const TapResult = Gesture.Tap();
    pnpm_BottomSheetBackdropTsx1.__closure = { runOnJS: animatedIndex(onPress[4]).runOnJS, handleOnPress: tmp24 };
    pnpm_BottomSheetBackdropTsx1.__workletHash = 10704059633145;
    pnpm_BottomSheetBackdropTsx1.__initData = closure_10;
    return TapResult.onEnd(pnpm_BottomSheetBackdropTsx1);
  }, items1);
  let obj3 = arg1(dependencyMap[4]);
  /* worklet (recovered source) */ function pnpm_BottomSheetBackdropTsx3(){const{animatedIndex,disappearsOnIndex}=this.__closure;return animatedIndex.value<=disappearsOnIndex;}
  obj = { animatedIndex, disappearsOnIndex };
  pnpm_BottomSheetBackdropTsx3.__closure = obj;
  pnpm_BottomSheetBackdropTsx3.__workletHash = 8948110613973;
  pnpm_BottomSheetBackdropTsx3.__initData = closure_12;
  /* worklet (recovered source) */ function pnpm_BottomSheetBackdropTsx4(shouldDisableTouchability,previous){const{runOnJS,handleContainerTouchability}=this.__closure;if(shouldDisableTouchability===previous){return;}runOnJS(handleContainerTouchability)(shouldDisableTouchability);}
  obj1 = { runOnJS: arg1(dependencyMap[4]).runOnJS, handleContainerTouchability: tmp25 };
  pnpm_BottomSheetBackdropTsx4.__closure = obj1;
  pnpm_BottomSheetBackdropTsx4.__workletHash = 17426135168622;
  pnpm_BottomSheetBackdropTsx4.__initData = closure_13;
  const items4 = [disappearsOnIndex];
  const animatedReaction = obj3.useAnimatedReaction(pnpm_BottomSheetBackdropTsx3, pnpm_BottomSheetBackdropTsx4, items4);
  close(() => {
    closure_6.current = true;
    return () => {
      closure_6.current = false;
    };
  }, []);
  const obj2 = {
    style: callback2(() => {
      const items = [animatedIndex(onPress[7]).styles.backdrop, style, animatedStyle];
      return items;
    }, items3),
    pointerEvents: tmp23[0]
  };
  let tmp32;
  if (null != DEFAULT_ACCESSIBLE) {
    tmp32 = DEFAULT_ACCESSIBLE;
  }
  obj2.accessible = tmp32;
  let tmp33;
  if (null != DEFAULT_ACCESSIBILITY_ROLE) {
    tmp33 = DEFAULT_ACCESSIBILITY_ROLE;
  }
  obj2.accessibilityRole = tmp33;
  let tmp34;
  if (null != DEFAULT_ACCESSIBILITY_LABEL) {
    tmp34 = DEFAULT_ACCESSIBILITY_LABEL;
  }
  obj2.accessibilityLabel = tmp34;
  if (!DEFAULT_ACCESSIBILITY_HINT) {
    let str2 = "move";
    if ("string" === typeof pressBehavior) {
      str2 = pressBehavior;
    }
    const _HermesInternal = HermesInternal;
    DEFAULT_ACCESSIBILITY_HINT = "Tap to " + str2 + " the Bottom Sheet";
  }
  obj2.accessibilityHint = DEFAULT_ACCESSIBILITY_HINT;
  obj2.children = children;
  const tmp31Result = <ViewComponent {...obj2} />;
  let tmp37 = tmp31Result;
  if ("none" !== pressBehavior) {
    obj3 = { gesture: tmp26, children: tmp31Result };
    tmp37 = jsx(arg1(dependencyMap[6]).GestureDetector, obj3);
  }
  return tmp37;
});
memoResult.displayName = "BottomSheetBackdrop";

export const BottomSheetBackdrop = memoResult;
