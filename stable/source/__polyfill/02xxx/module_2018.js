// Module ID: 2018
// Function ID: 2019
// Dependencies: [19, 17, 21, 1645, 1976, 1987]
// Exports: default

// Module 2018
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import KeyboardControllerNative from "KeyboardControllerNative" /* 1645 */;
import _mod1976 from "module_1976" /* 1976 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1987 */;
import react from "react" /* 19 */;

const Animated = react_native.Animated;
const jsx = Fragment.jsx;
let closure_3 = Animated.createAnimatedComponent(KeyboardControllerNative.KeyboardBackgroundView);

export default function _default(enabled) {
  enabled = enabled.enabled;
  let tmp = undefined === enabled;
  const children = enabled.children;
  if (!tmp) {
    tmp = enabled;
  }
  const obj = _mod1976;
  ({ style: { opacity: obj.useKeyboardAnimation().progress }, children });
  const KeyboardStickyView = KeyboardAvoidingView.KeyboardStickyView;
  return <KeyboardStickyView enabled={tmp}>{null}</KeyboardStickyView>;
};
