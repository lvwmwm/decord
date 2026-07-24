// Module ID: 1818
// Function ID: 19984
// Name: KeyboardExtender
// Dependencies: [31, 27, 33, 1572, 1776, 1787]
// Exports: default

// Module 1818 (KeyboardExtender)
import "result";
import { Animated } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = Animated.createAnimatedComponent(require("nativeEventEmitter").KeyboardBackgroundView);

export default function KeyboardExtender(children) {
  const enabled = children.enabled;
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  let obj = require(1776) /* useGenericKeyboardHandler */;
  obj = { enabled: tmp };
  obj.children = <closure_3 style={{ opacity: obj.useKeyboardAnimation().progress }}>{arg0.children}</closure_3>;
  return jsx(require(1787) /* KeyboardAvoidingView */.KeyboardStickyView, { enabled: tmp });
};
