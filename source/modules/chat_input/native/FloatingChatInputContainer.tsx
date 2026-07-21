// Module ID: 11095
// Function ID: 86318
// Name: FloatingChatInputContainer
// Dependencies: []
// Exports: default

// Module 11095 (FloatingChatInputContainer)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const Easing = arg1(dependencyMap[3]).Easing;
let closure_6 = Easing.bezier(0.2, 0, 0, 1);
let closure_7 = { code: "function FloatingChatInputContainerTsx1(){const{paddingSV}=this.__closure;return{paddingBottom:paddingSV.get()};}" };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/chat_input/native/FloatingChatInputContainer.tsx");

export default function FloatingChatInputContainer(arg0) {
  let children;
  let onLayout;
  let style;
  ({ style, onLayout, children } = arg0);
  style = [, ];
  style[0] = style;
  style[1] = function useKeyboardOpenPaddingStyle() {
    const token = token(first[4]).useToken(callback(first[5]).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL);
    const tmp2 = sharedValue(React.useState(() => {
      let height;
      const KeyboardController = token(first[6]).KeyboardController;
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
    const callback = tmp2[1];
    const effect = React.useEffect(() => {
      const KeyboardEvents = token(first[6]).KeyboardEvents;
      const token = KeyboardEvents.addListener("keyboardWillShow", () => lib(true));
      const KeyboardEvents2 = token(first[6]).KeyboardEvents;
      let closure_1 = KeyboardEvents2.addListener("keyboardWillHide", () => lib(false));
      return () => {
        closure_0.remove();
        lib.remove();
      };
    }, []);
    const obj = token(first[4]);
    const obj2 = token(first[7]);
    const tmp5 = true === token(first[7]).useKeyboardContextForType(token(first[8]).KeyboardTypes.SYSTEM).keyboardWillOpen;
    const tmp6 = callback(first[7])();
    if (!first) {
      first = tmp5;
    }
    if (!first) {
      first = tmp7;
    }
    const tmp7 = callback(first[7])() !== token(first[8]).KeyboardTypes.SYSTEM;
    let num = 0;
    if (first) {
      num = token;
    }
    const sharedValue = token(first[3]).useSharedValue(num);
    const items = [first, token, sharedValue];
    const effect1 = React.useEffect(() => {
      let obj = token(first[9]);
      let num = 0;
      if (first) {
        num = token;
      }
      obj = { duration: token(first[10]).timingStandardDuration, easing: closure_6 };
      const result = sharedValue.set(obj.withTiming(num, obj));
    }, items);
    const obj3 = token(first[3]);
    return token(first[3]).useAnimatedStyle(() => {
      class FloatingChatInputContainerTsx1 {
        constructor() {
          obj = { paddingBottom: closure_3.get() };
          return obj;
        }
      }
      FloatingChatInputContainerTsx1.__closure = { paddingSV: sharedValue };
      FloatingChatInputContainerTsx1.__workletHash = 5673482424037;
      FloatingChatInputContainerTsx1.__initData = closure_7;
      return FloatingChatInputContainerTsx1;
    }());
  }();
  return jsx(importDefault(dependencyMap[3]).View, { style, onLayout, children });
};
