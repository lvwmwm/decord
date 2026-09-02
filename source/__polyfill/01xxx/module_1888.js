// Module ID: 1888
// Function ID: 1889
// Dependencies: [19, 17, 21, 1642, 1846, 1857]
// Exports: default

// Module 1888
import noopDefault from "noop" /* 19 */;
import useResizeMode from "useResizeMode" /* 1846 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1857 */;
import { Animated } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopDefault;
let closure_3 = Animated.createAnimatedComponent(require("nativeEventEmitter").KeyboardBackgroundView);

export default function _default(children) {
  const enabled = children.enabled;
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  let obj = useResizeMode;
  obj = { enabled: tmp, children: <closure_3 style={{ opacity: obj.useKeyboardAnimation().progress }}>{arg0.children}</closure_3> };
  return jsx(KeyboardAvoidingView.KeyboardStickyView, { enabled: tmp, children: <closure_3 style={{ opacity: obj.useKeyboardAnimation().progress }}>{arg0.children}</closure_3> });
};
