// Module ID: 14823
// Function ID: 14824
// Name: FloatingChatInputContainer
// Dependencies: [32, 19, 21, 1655, 5902, 575, 1644, 5503, 1628, 5548, 5551, 2]
// Exports: default

// Module 14823 (FloatingChatInputContainer)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1655 from "module_1655" /* 1655 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5503 */;
import timing_timing from "timing/timing" /* 5548 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const _modDef1655 = _mod1655;
let closure_2, dependencyMap, set;

let tmp2;
const timingPresets = tmp2(5551);
function useKeyboardOpenPaddingStyle() {
  let easing;
  let sharedValue;
  let tmp11;
  let tmp12;
  let tmp5;
  let token;
  let tmp2 = dependencyMap;
  let obj = token(5902);
  token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL);
  const tmp4 = sharedValue(react.useState(() => {
    const KeyboardController = token(closure_2[6]).KeyboardController;
    const stateResult = KeyboardController.state();
    let num;
    if (stateResult != null) {
      num = stateResult.height;
    }
    if (num == null) {
      num = 0;
    }
    return num > 0;
  }), 2);
  [tmp5, importDefault] = tmp4;
  const effect = react.useEffect(() => {
    const KeyboardEvents = token(closure_2[6]).KeyboardEvents;
    let closure_0 = KeyboardEvents.addListener("keyboardWillShow", (height) => closure_1(height.height > 0));
    const KeyboardEvents2 = token(closure_2[6]).KeyboardEvents;
    let closure_1 = KeyboardEvents2.addListener("keyboardDidShow", (height) => closure_1(height.height > 0));
    const KeyboardEvents3 = token(closure_2[6]).KeyboardEvents;
    closure_2 = KeyboardEvents3.addListener("keyboardWillHide", () => closure_1(false));
    const KeyboardEvents4 = token(closure_2[6]).KeyboardEvents;
    let closure_3 = KeyboardEvents4.addListener("keyboardDidHide", () => closure_1(false));
    return () => {
      closure_0.remove();
      closure_1.remove();
      closure_2.remove();
      closure_3.remove();
    };
  }, []);
  const obj3 = token(5503);
  const keyboardWillOpen = obj3.useKeyboardContextForType(token(1628).KeyboardTypes.SYSTEM).keyboardWillOpen;
  const tmp7 = useKeyboardTypeDefault();
  const SYSTEM = token(1628).KeyboardTypes.SYSTEM;
  const obj2 = react;
  if (!tmp5) {
    tmp5 = true === keyboardWillOpen;
  }
  if (!tmp5) {
    tmp5 = tmp7 !== SYSTEM;
  }
  dependencyMap = tmp5;
  let num = 0;
  const useSharedValue = tmp(1655).useSharedValue;
  token(1655);
  if (tmp5) {
    num = token;
  }
  sharedValue = useSharedValue(num);
  const items = [tmp5, token, sharedValue];
  const effect1 = obj2.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (closure_2) {
      num = token;
    }
    const obj = { duration: timingPresets.timingStandardDuration, easing };
    const result = set(withTiming(num, obj));
  }, items);
  const items1 = [closure_7, sharedValue];
  let c0;
  [tmp11, tmp12] = items1;
  const tmpResult2 = token(1655);
  class FloatingChatInputContainerTsx1 {
    constructor() {
      const obj = { paddingBottom: _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp12];
  FloatingChatInputContainerTsx1.__closure = items2;
  FloatingChatInputContainerTsx1.__workletHash = 15122796628316;
  FloatingChatInputContainerTsx1.__initData = tmp11;
  return tmpResult2.useAnimatedStyle(FloatingChatInputContainerTsx1);
}
const jsx = Fragment.jsx;
const Easing = _mod1655.Easing;
let closure_6 = Easing.bezier(0.2, 0, 0, 1);
let closure_7 = { code: "(function FloatingChatInputContainerTsx1(){let[paddingSV]=this.__closure;return{paddingBottom:paddingSV.get()};})" };
let result = size.fileFinishedImporting("modules/chat_input/native/FloatingChatInputContainer.tsx");

export default function FloatingChatInputContainer(arg0) {
  let children;
  let onLayout;
  let style;
  ({ style, onLayout, children } = arg0);
  const items = [style, useKeyboardOpenPaddingStyle()];
  useKeyboardOpenPaddingStyle();
  return jsx(_modDef1655.View, { style: items, onLayout, children });
};
export { useKeyboardOpenPaddingStyle };
