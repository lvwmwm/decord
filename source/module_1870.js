// Module ID: 1870
// Function ID: 1871
// Dependencies: [19, 17, 21, 1624, 1828, 1839]
// Exports: default

// Module 1870
import "noop";
import { Animated } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = Animated.createAnimatedComponent(require("nativeEventEmitter").KeyboardBackgroundView);

export default function _default(children) {
  const enabled = children.enabled;
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  let obj = require(1828) /* useResizeMode */;
  obj = { enabled: tmp, children: null };
  obj[1] = <closure_3 style={{ opacity: obj.useKeyboardAnimation().progress }}>{arg0.children}</closure_3>;
  return jsx(require(1839) /* KeyboardAvoidingView */.KeyboardStickyView, { enabled: tmp, children: null });
};
