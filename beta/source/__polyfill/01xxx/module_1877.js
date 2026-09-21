// Module ID: 1877
// Function ID: 1878
// Dependencies: [19, 17, 21, 1631, 1835, 1846]
// Exports: default

// Module 1877
import _mod1835 from "module_1835" /* 1835 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1846 */;
import noop from "module_19" /* 19 */;

require = fn;
const Animated = fn(17).Animated;
const jsx = fn(21).jsx;
let closure_3 = Animated.createAnimatedComponent(fn(1631).KeyboardBackgroundView);

export default function _default(children) {
  const enabled = children.enabled;
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  const obj2 = { enabled: tmp, children: null };
  obj2.children = <closure_3 style={{ opacity: _mod1835.useKeyboardAnimation().progress }}>{arg0.children}</closure_3>;
  return jsx(KeyboardAvoidingView.KeyboardStickyView, { enabled: tmp, children: null });
};
