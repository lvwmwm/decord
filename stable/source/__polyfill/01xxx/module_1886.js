// Module ID: 1886
// Function ID: 1887
// Dependencies: [19, 17, 21, 1640, 1844, 1855]
// Exports: default

// Module 1886
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import KeyboardControllerNative from "KeyboardControllerNative" /* 1640 */;
import _mod1844 from "module_1844" /* 1844 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1855 */;
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
  const obj = _mod1844;
  ({ style: { opacity: obj.useKeyboardAnimation().progress }, children });
  const KeyboardStickyView = KeyboardAvoidingView.KeyboardStickyView;
  return <KeyboardStickyView enabled={tmp}>{null}</KeyboardStickyView>;
};
