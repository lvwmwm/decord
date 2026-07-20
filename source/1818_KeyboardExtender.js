// Module ID: 1818
// Function ID: 19977
// Name: KeyboardExtender
// Dependencies: []
// Exports: default

// Module 1818 (KeyboardExtender)
importDefault(dependencyMap[0]);
const Animated = arg1(dependencyMap[1]).Animated;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_3 = Animated.createAnimatedComponent(arg1(dependencyMap[3]).KeyboardBackgroundView);

export default function KeyboardExtender(children) {
  const enabled = children.enabled;
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  let obj = arg1(dependencyMap[4]);
  obj = { enabled: tmp };
  obj.children = <closure_3 style={{ opacity: obj.useKeyboardAnimation().progress }}>{arg0.children}</closure_3>;
  return jsx(arg1(dependencyMap[5]).KeyboardStickyView, obj);
};
