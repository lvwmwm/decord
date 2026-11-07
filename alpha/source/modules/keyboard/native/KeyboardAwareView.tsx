// Module ID: 7016
// Function ID: 7017
// Name: KeyboardAwareView
// Dependencies: [32, 19, 17, 1495, 21, 2020, 5325, 1625, 5736, 7017, 1652, 2]

// Module 7016 (KeyboardAwareView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1495 */;
import size from "module_2" /* 2 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let closure_8 = { code: "(function KeyboardAwareViewTsx1(){let[styleMarginBottom,animatedKeyboardHeight]=this.__closure;return{marginBottom:styleMarginBottom+animatedKeyboardHeight.get()};})" };
const memoResult = react.memo(function KeyboardAwareView(keyboardHeightOffset) {
  let animated;
  let children;
  let closure_2;
  let first;
  let pointerEvents;
  let style;
  let tmp13;
  let tmp14;
  let tmp15;
  ({ style, animated } = keyboardHeightOffset);
  ({ children, pointerEvents } = keyboardHeightOffset);
  if (animated === undefined) {
    animated = true;
  }
  let num = keyboardHeightOffset.keyboardHeightOffset;
  if (num === undefined) {
    num = 0;
  }
  let obj = react;
  let tmp = num;
  const useRef = react.useRef;
  let _Math = Math;
  const obj2 = num(2020);
  let systemKeyboardHeight = obj2.getSystemKeyboardHeight();
  if (0 === systemKeyboardHeight) {
    const tmpResult = tmp(5325);
    let keyboardType = tmpResult.getKeyboardType();
    let num2 = 0;
    if (keyboardType !== tmp(1625).KeyboardTypes.SYSTEM) {
      const tmpResult3 = tmp(5736);
      num2 = tmpResult3.getCustomKeyboardHeight();
    }
    systemKeyboardHeight = num2;
  }
  const ref = useRef(max(0, systemKeyboardHeight + num));
  [first, dependencyMap] = obj.useState(ref.current);
  const items = [num];
  const effect = obj.useEffect(() => subscribeToKeyboardUIStore(function keyboardHeightUpdater() {
    const _Math = Math;
    const obj = num(closure_2[5]);
    let systemKeyboardHeight = obj.getSystemKeyboardHeight();
    const tmp = closure_1_0;
    if (0 === systemKeyboardHeight) {
      const tmp2Result = num(closure_2[6]);
      const keyboardType = tmp2Result.getKeyboardType();
      num = 0;
      if (keyboardType !== num(closure_2[7]).KeyboardTypes.SYSTEM) {
        const tmp2Result2 = num(closure_2[8]);
        num = tmp2Result2.getCustomKeyboardHeight();
      }
      systemKeyboardHeight = num;
    }
    const maxResult = max(0, systemKeyboardHeight + tmp);
    if (ref.current !== maxResult) {
      ref.current = maxResult;
      closure_1_2(maxResult);
    }
  }), items);
  const tmp10 = ref(7017)(first, animated);
  const flattenResult = StyleSheet.flatten(style);
  let marginBottom;
  const tmp9 = ref;
  if (flattenResult != null) {
    marginBottom = flattenResult.marginBottom;
  }
  let num3 = 0;
  if (typeof marginBottom === "number") {
    num3 = marginBottom;
  }
  const items1 = [closure_8, num3, tmp10];
  let c0;
  let c1;
  [tmp13, tmp14, tmp15] = items1;
  const tmpResult4 = tmp(1652);
  class KeyboardAwareViewTsx1 {
    constructor() {
      const obj = { marginBottom: c0 + _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp14, tmp15];
  KeyboardAwareViewTsx1.__closure = items2;
  KeyboardAwareViewTsx1.__workletHash = 11313678442315;
  KeyboardAwareViewTsx1.__initData = tmp13;
  const animatedStyle = tmpResult4.useAnimatedStyle(KeyboardAwareViewTsx1);
  const items3 = [style, animatedStyle];
  return jsx(tmp9(1652).View, { style: items3, pointerEvents, children });
});
const result = size.fileFinishedImporting("modules/keyboard/native/KeyboardAwareView.tsx");

export default memoResult;
