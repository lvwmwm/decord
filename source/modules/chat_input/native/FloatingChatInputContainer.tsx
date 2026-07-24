// Module ID: 11133
// Function ID: 86570
// Name: FloatingChatInputContainer
// Dependencies: [57, 31, 33, 3991, 3834, 689, 1571, 3996, 1555, 4131, 4134, 2]
// Exports: default

// Module 11133 (FloatingChatInputContainer)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";
import { Easing } from "module_3991";

const require = arg1;
let closure_6 = Easing.bezier(0.2, 0, 0, 1);
let closure_7 = { code: "function FloatingChatInputContainerTsx1(){const{paddingSV}=this.__closure;return{paddingBottom:paddingSV.get()};}" };
let result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/FloatingChatInputContainer.tsx");

export default function FloatingChatInputContainer(arg0) {
  let children;
  let onLayout;
  let style;
  ({ style, onLayout, children } = arg0);
  style = [, ];
  style[0] = style;
  style[1] = (function useKeyboardOpenPaddingStyle() {
    const token = outer1_0(outer1_2[4]).useToken(outer1_1(outer1_2[5]).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL);
    const tmp2 = outer1_3(outer1_4.useState(() => {
      let height;
      const KeyboardController = outer2_0(outer2_2[6]).KeyboardController;
      const stateResult = KeyboardController.state();
      if (null != stateResult) {
        height = stateResult.height;
      }
      let num = 0;
      if (null != height) {
        num = height;
      }
      return num > 0;
    }), 2);
    let first = tmp2[0];
    let closure_1 = tmp2[1];
    const effect = outer1_4.useEffect(() => {
      const KeyboardEvents = outer2_0(outer2_2[6]).KeyboardEvents;
      let closure_0 = KeyboardEvents.addListener("keyboardWillShow", () => lib(true));
      const KeyboardEvents2 = outer2_0(outer2_2[6]).KeyboardEvents;
      let closure_1 = KeyboardEvents2.addListener("keyboardWillHide", () => lib(false));
      return () => {
        closure_0.remove();
        lib.remove();
      };
    }, []);
    let obj = outer1_0(outer1_2[4]);
    const obj2 = outer1_0(outer1_2[7]);
    const tmp5 = true === outer1_0(outer1_2[7]).useKeyboardContextForType(outer1_0(outer1_2[8]).KeyboardTypes.SYSTEM).keyboardWillOpen;
    const tmp6 = outer1_1(outer1_2[7])();
    if (!first) {
      first = tmp5;
    }
    if (!first) {
      first = tmp7;
    }
    tmp7 = outer1_1(outer1_2[7])() !== outer1_0(outer1_2[8]).KeyboardTypes.SYSTEM;
    let num = 0;
    if (first) {
      num = token;
    }
    const sharedValue = outer1_0(outer1_2[3]).useSharedValue(num);
    const items = [first, token, sharedValue];
    const effect1 = outer1_4.useEffect(() => {
      let obj = outer2_0(outer2_2[9]);
      let num = 0;
      if (first) {
        num = token;
      }
      obj = { duration: outer2_0(outer2_2[10]).timingStandardDuration, easing: outer2_6 };
      const result = sharedValue.set(obj.withTiming(num, obj));
    }, items);
    const obj3 = outer1_0(outer1_2[3]);
    return outer1_0(outer1_2[3]).useAnimatedStyle((() => {
      class FloatingChatInputContainerTsx1 {
        constructor() {
          obj = { paddingBottom: outer1_3.get() };
          return obj;
        }
      }
      FloatingChatInputContainerTsx1.__closure = { paddingSV: sharedValue };
      FloatingChatInputContainerTsx1.__workletHash = 5673482424037;
      FloatingChatInputContainerTsx1.__initData = outer2_7;
      return FloatingChatInputContainerTsx1;
    })());
  })();
  return jsx(importDefault(3991).View, { style, onLayout, children });
};
