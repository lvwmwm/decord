// Module ID: 5741
// Function ID: 5742
// Name: BottomSheetBackdrop
// Dependencies: [32, 19, 21, 5742, 1652, 5429, 5452, 5743]

// Module 5741 (BottomSheetBackdrop)
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5452 */;
import react_native from "react-native" /* 5743 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;

let onPress;

let closure_4;
let hasOwnProperty;
let memo;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ useCallback: closure_4, useEffect: hasOwnProperty, useMemo: metroRequire, useRef: metroImportDefault, useState: metroImportAll, memo } = react);
react = react_mod;
const jsx = Fragment.jsx;
let closure_10 = { code: "(function pnpm_BottomSheetBackdropTsx1(){let[runOnJS,handleOnPress]=this.__closure;runOnJS(handleOnPress)();})" };
let closure_11 = { code: "(function pnpm_BottomSheetBackdropTsx2(){let[interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity,Extrapolation]=this.__closure;return{opacity:interpolate(animatedIndex.value,[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity],Extrapolation.CLAMP)};})" };
let closure_12 = { code: "(function pnpm_BottomSheetBackdropTsx3(){let[animatedIndex,disappearsOnIndex]=this.__closure;return Math.round(animatedIndex.value)<=disappearsOnIndex;})" };
let closure_13 = { code: "(function pnpm_BottomSheetBackdropTsx4(shouldDisableTouchability,previous){let[runOnJS,handleContainerTouchability]=this.__closure;if(shouldDisableTouchability===previous){return;}runOnJS(handleContainerTouchability)(shouldDisableTouchability);})" };
const memoResult = memo((onPress) => {
  let ViewComponent;
  let animatedIndex;
  let appearsOnIndex;
  let children;
  let disappearsOnIndex;
  let enableTouchThrough;
  let opacity;
  let pressBehavior;
  let style;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  ({ animatedIndex, opacity, appearsOnIndex, disappearsOnIndex, enableTouchThrough, pressBehavior } = onPress);
  if (pressBehavior === undefined) {
    const tmp = pressBehavior;
    let tmp2 = style;
    pressBehavior = pressBehavior(style[3]).DEFAULT_PRESS_BEHAVIOR;
  }
  onPress = onPress.onPress;
  style = onPress.style;
  ({ ViewComponent, children } = onPress);
  if (ViewComponent === undefined) {
    const tmp3 = onPress;
    const tmp4 = style;
    ViewComponent = onPress(style[4]).View;
  }
  let DEFAULT_ACCESSIBLE = onPress.accessible;
  if (DEFAULT_ACCESSIBLE === undefined) {
    DEFAULT_ACCESSIBLE = pressBehavior(style[3]).DEFAULT_ACCESSIBLE;
  }
  let DEFAULT_ACCESSIBILITY_ROLE = onPress.accessibilityRole;
  if (DEFAULT_ACCESSIBILITY_ROLE === undefined) {
    DEFAULT_ACCESSIBILITY_ROLE = pressBehavior(style[3]).DEFAULT_ACCESSIBILITY_ROLE;
  }
  let DEFAULT_ACCESSIBILITY_LABEL = onPress.accessibilityLabel;
  if (DEFAULT_ACCESSIBILITY_LABEL === undefined) {
    DEFAULT_ACCESSIBILITY_LABEL = pressBehavior(style[3]).DEFAULT_ACCESSIBILITY_LABEL;
  }
  let DEFAULT_ACCESSIBILITY_HINT = onPress.accessibilityHint;
  if (DEFAULT_ACCESSIBILITY_HINT === undefined) {
    DEFAULT_ACCESSIBILITY_HINT = pressBehavior(style[3]).DEFAULT_ACCESSIBILITY_HINT;
  }
  disappearsOnIndex = undefined;
  let closure_7;
  let closure_8;
  let animatedStyle;
  let obj = pressBehavior(style[5]);
  const bottomSheet = obj.useBottomSheet();
  const snapToIndex = bottomSheet.snapToIndex;
  const close = bottomSheet.close;
  const ref = closure_7(false);
  if (opacity == null) {
    opacity = tmp13(tmp14[3]).DEFAULT_OPACITY;
  }
  if (appearsOnIndex == null) {
    appearsOnIndex = tmp13(tmp14[3]).DEFAULT_APPEARS_ON_INDEX;
  }
  if (disappearsOnIndex == null) {
    disappearsOnIndex = tmp13(tmp14[3]).DEFAULT_DISAPPEARS_ON_INDEX;
  }
  if (enableTouchThrough == null) {
    enableTouchThrough = tmp13(tmp14[3]).DEFAULT_ENABLE_TOUCH_THROUGH;
  }
  let str = "auto";
  const tmp16 = closure_8;
  if (enableTouchThrough) {
    str = "none";
  }
  const tmp17 = snapToIndex(tmp16(str), 2);
  closure_7 = tmp17[1];
  let items = [snapToIndex, close, disappearsOnIndex, pressBehavior, onPress];
  const first = tmp17[0];
  const tmp19 = close(() => {
    if (onPress != null) {
      tmp();
    }
    if ("close" === pressBehavior) {
      close();
    } else if ("collapse" === pressBehavior) {
      snapToIndex(disappearsOnIndex);
    } else if (typeof pressBehavior === "number") {
      snapToIndex(pressBehavior);
    }
  }, items);
  closure_8 = tmp19;
  let items1 = [tmp19];
  const tmp20 = close((arg0) => {
    if (ref.current) {
      let str = "auto";
      const tmp2 = closure_7;
      if (arg0) {
        str = "none";
      }
      tmp2(str);
    }
  }, []);
  const items2 = [closure_11, , , , , , ];
  const tmp22 = disappearsOnIndex(() => {
    let tmp2;
    let tmp3;
    let tmp4;
    const Gesture = LegacyBaseButton.Gesture;
    const items = [closure_10, , ];
    const onEnd = Gesture.Tap().onEnd;
    Gesture.Tap();
    items[1] = _mod1652.runOnJS;
    items[2] = closure_8;
    let c0;
    let c1;
    [tmp2, tmp3, tmp4] = items;
    function pnpm_BottomSheetBackdropTsx1() {
      _undefined(c1)();
    }
    const items1 = [tmp3, tmp4];
    pnpm_BottomSheetBackdropTsx1.__closure = items1;
    pnpm_BottomSheetBackdropTsx1.__workletHash = 5911610326560;
    pnpm_BottomSheetBackdropTsx1.__initData = tmp2;
    return onEnd(pnpm_BottomSheetBackdropTsx1);
  }, items1);
  const useAnimatedStyle = pressBehavior(style[4]).useAnimatedStyle;
  pressBehavior(style[4]);
  items2[1] = pressBehavior(style[4]).interpolate;
  items2[2] = animatedIndex;
  items2[3] = disappearsOnIndex;
  items2[4] = appearsOnIndex;
  items2[5] = opacity;
  items2[6] = pressBehavior(style[4]).Extrapolation;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items2;
  function pnpm_BottomSheetBackdropTsx2() {
    let items;
    let items1;
    const obj = { opacity: _undefined(_undefined2.value, items, items1, _undefined3.CLAMP) };
    items = [-1, c2, c3];
    items1 = [0, 0, c4];
    return obj;
  }
  const items3 = [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30];
  pnpm_BottomSheetBackdropTsx2.__closure = items3;
  pnpm_BottomSheetBackdropTsx2.__workletHash = 2617863468453;
  pnpm_BottomSheetBackdropTsx2.__initData = tmp24;
  const items4 = [animatedIndex, appearsOnIndex, disappearsOnIndex, opacity];
  animatedStyle = useAnimatedStyle(pnpm_BottomSheetBackdropTsx2, items4);
  const items5 = [style, animatedStyle];
  const items6 = [closure_12, animatedIndex, disappearsOnIndex];
  [tmp34, tmp35, tmp36] = items6;
  function pnpm_BottomSheetBackdropTsx3() {
    return Math.round(_undefined.value) <= c1;
  }
  const items7 = [tmp35, tmp36];
  pnpm_BottomSheetBackdropTsx3.__closure = items7;
  pnpm_BottomSheetBackdropTsx3.__workletHash = 5714761068433;
  pnpm_BottomSheetBackdropTsx3.__initData = tmp34;
  const items8 = [closure_13, , ];
  const tmp21Result = disappearsOnIndex(() => {
    const items = [react_native.styles.backdrop, style, animatedStyle];
    return items;
  }, items5);
  const useAnimatedReaction = pressBehavior(style[4]).useAnimatedReaction;
  pressBehavior(style[4]);
  items8[1] = pressBehavior(style[4]).runOnJS;
  items8[2] = tmp20;
  let c0;
  let c1;
  [tmp37, tmp38, tmp39] = items8;
  function pnpm_BottomSheetBackdropTsx4(arg0, arg1) {
    if (arg0 !== arg1) {
      _undefined(c1)(arg0);
    }
  }
  const items9 = [tmp38, tmp39];
  pnpm_BottomSheetBackdropTsx4.__closure = items9;
  pnpm_BottomSheetBackdropTsx4.__workletHash = 3849870476375;
  pnpm_BottomSheetBackdropTsx4.__initData = tmp37;
  const items10 = [disappearsOnIndex];
  const animatedReaction = useAnimatedReaction(pnpm_BottomSheetBackdropTsx3, pnpm_BottomSheetBackdropTsx4, items10);
  ref(() => {
    ref.current = true;
    return () => {
      ref.current = false;
    };
  }, []);
  const obj2 = { style: tmp21Result, pointerEvents: first, accessible: DEFAULT_ACCESSIBLE, accessibilityRole: DEFAULT_ACCESSIBILITY_ROLE, accessibilityLabel: DEFAULT_ACCESSIBILITY_LABEL, accessibilityHint: DEFAULT_ACCESSIBILITY_HINT, children };
  if (!DEFAULT_ACCESSIBILITY_HINT) {
    let str2 = "move";
    if (typeof pressBehavior === "string") {
      str2 = pressBehavior;
    }
    const _HermesInternal = HermesInternal;
    DEFAULT_ACCESSIBILITY_HINT = "Tap to " + str2 + " the Bottom Sheet";
  }
  const tmp42Result = animatedStyle(ViewComponent, obj2);
  let tmp42Result2 = tmp42Result;
  if ("none" !== pressBehavior) {
    const obj3 = { gesture: tmp22, children: tmp42Result };
    tmp42Result2 = tmp42(tmp13(tmp14[6]).GestureDetector, obj3);
  }
  return tmp42Result2;
});
memoResult.displayName = "BottomSheetBackdrop";

export const BottomSheetBackdrop = memoResult;
