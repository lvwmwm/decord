// Module ID: 1874
// Function ID: 1875
// Dependencies: [19, 17, 21, 1628, 1832, 1843]
// Exports: default

// Module 1874
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import KeyboardControllerNative from "KeyboardControllerNative" /* 1628 */;
import _mod1832 from "module_1832" /* 1832 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1843 */;
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
  const obj = _mod1832;
  ({ style: { opacity: obj.useKeyboardAnimation().progress }, children });
  const KeyboardStickyView = KeyboardAvoidingView.KeyboardStickyView;
  return <KeyboardStickyView enabled={tmp}>{null}</KeyboardStickyView>;
};
