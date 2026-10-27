// Module ID: 1891
// Function ID: 1892
// Dependencies: [19, 17, 21, 1645, 1849, 1860]
// Exports: default

// Module 1891
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import KeyboardControllerNative from "KeyboardControllerNative" /* 1645 */;
import _mod1849 from "module_1849" /* 1849 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1860 */;
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
  const obj = _mod1849;
  ({ style: { opacity: obj.useKeyboardAnimation().progress }, children });
  const KeyboardStickyView = KeyboardAvoidingView.KeyboardStickyView;
  return <KeyboardStickyView enabled={tmp}>{null}</KeyboardStickyView>;
};
