// Module ID: 13956
// Function ID: 13957
// Name: FloatingChatInputContainer
// Dependencies: [32, 19, 21, 5095, 5596, 575, 1639, 5209, 1623, 5254, 5257, 2]
// Exports: default

// Module 13956 (FloatingChatInputContainer)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5209 */;
import timing from "timing" /* 5254 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let closure_2, dependencyMap, set;

let tmp2;
const timingPresets = tmp2(5257);
function useKeyboardOpenPaddingStyle() {
  let easing;
  let sharedValue;
  let tmp5;
  let token;
  let tmp2 = dependencyMap;
  let obj = token(5596);
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
  const obj3 = token(5209);
  const keyboardWillOpen = obj3.useKeyboardContextForType(token(1623).KeyboardTypes.SYSTEM).keyboardWillOpen;
  const tmp7 = useKeyboardTypeDefault();
  const SYSTEM = token(1623).KeyboardTypes.SYSTEM;
  const obj2 = react;
  if (!tmp5) {
    tmp5 = true === keyboardWillOpen;
  }
  if (!tmp5) {
    tmp5 = tmp7 !== SYSTEM;
  }
  dependencyMap = tmp5;
  let num = 0;
  const useSharedValue = tmp(5095).useSharedValue;
  token(5095);
  if (tmp5) {
    num = token;
  }
  sharedValue = useSharedValue(num);
  const items = [tmp5, token, sharedValue];
  const effect1 = obj2.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (closure_2) {
      num = token;
    }
    const obj = { duration: timingPresets.timingStandardDuration, easing };
    const result = set(withTiming(num, obj));
  }, items);
  const fn = function p() {
    const obj = { paddingBottom: sharedValue.get() };
    return obj;
  };
  fn.__closure = { paddingSV: sharedValue };
  fn.__workletHash = 5673482424037;
  fn.__initData = __initData;
  const tmpResult2 = token(5095);
  return tmpResult2.useAnimatedStyle(fn);
}
const jsx = Fragment.jsx;
const Easing = ReanimatedRexport.Easing;
let closure_6 = Easing.bezier(0.2, 0, 0, 1);
const __initData = { code: "function FloatingChatInputContainerTsx1(){const{paddingSV}=this.__closure;return{paddingBottom:paddingSV.get()};}" };
let result = size.fileFinishedImporting("modules/chat_input/native/FloatingChatInputContainer.tsx");

export default function FloatingChatInputContainer(arg0) {
  let children;
  let onLayout;
  let style;
  ({ style, onLayout, children } = arg0);
  const items = [style, useKeyboardOpenPaddingStyle()];
  useKeyboardOpenPaddingStyle();
  return jsx(ReanimatedRexportDefault.View, { style: items, onLayout, children });
};
export { useKeyboardOpenPaddingStyle };
