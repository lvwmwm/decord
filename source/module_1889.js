// Module ID: 1889
// Function ID: 1890
// Dependencies: [19, 17, 21, 1643, 1847, 1858]
// Exports: default

// Module 1889
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
  let obj = require(1847) /* useResizeMode */;
  obj = { enabled: tmp, children: null };
  obj[1] = <closure_3 style={{ opacity: obj.useKeyboardAnimation().progress }}>{arg0.children}</closure_3>;
  return jsx(require(1858) /* KeyboardAvoidingView */.KeyboardStickyView, { enabled: tmp, children: null });
};
