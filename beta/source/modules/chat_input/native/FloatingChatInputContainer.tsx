// Module ID: 11900
// Function ID: 11901
// Name: FloatingChatInputContainer
// Dependencies: [32, 19, 21, 4566, 4531, 576, 1627, 4703, 1611, 4837, 4840, 2]
// Exports: default

// Module 11900 (FloatingChatInputContainer)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4703 */;
import timing from "timing" /* 4837 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let dependencyMap, set;

let tmp2;
const timingPresets = tmp2(4840);
function useKeyboardOpenPaddingStyle() {
  let closure_2;
  let easing;
  let sharedValue;
  let tmp5;
  let token;
  let tmp2 = dependencyMap;
  let obj = token(4531);
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
    let closure_0 = KeyboardEvents.addListener("keyboardWillShow", () => closure_1(true));
    const KeyboardEvents2 = token(closure_2[6]).KeyboardEvents;
    let closure_1 = KeyboardEvents2.addListener("keyboardWillHide", () => closure_1(false));
    return () => {
      closure_0.remove();
      closure_1.remove();
    };
  }, []);
  const obj3 = token(4703);
  const keyboardWillOpen = obj3.useKeyboardContextForType(token(1611).KeyboardTypes.SYSTEM).keyboardWillOpen;
  const tmp7 = useKeyboardTypeDefault();
  const SYSTEM = token(1611).KeyboardTypes.SYSTEM;
  const obj2 = react;
  if (!tmp5) {
    tmp5 = true === keyboardWillOpen;
  }
  if (!tmp5) {
    tmp5 = tmp7 !== SYSTEM;
  }
  dependencyMap = tmp5;
  let num = 0;
  const useSharedValue = tmp(4566).useSharedValue;
  token(4566);
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
  const fn = function b() {
    const obj = { paddingBottom: sharedValue.get() };
    return obj;
  };
  fn.__closure = { paddingSV: sharedValue };
  fn.__workletHash = 5673482424037;
  fn.__initData = __initData;
  const tmpResult2 = token(4566);
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
