// Module ID: 1783
// Function ID: 1784
// Name: AnimatedScrollView
// Dependencies: [109, 19, 17, 21, 1675, 1780, 1784]

// Module 1783 (AnimatedScrollView)
import eulerToQuaternion from "eulerToQuaternion" /* 1784 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["scrollViewOffset"];
const jsx = fn(21).jsx;
const _isNativeReflectConstruct = fn(1675);
let closure_5 = _isNativeReflectConstruct.createAnimatedComponent(fn(17).ScrollView);
const module_1780 = fn(1780);

export const AnimatedScrollView = module_1780.componentWithRef((scrollViewOffset, arg1) => {
  let animatedRef = arg1;
  scrollViewOffset = scrollViewOffset.scrollViewOffset;
  const tmp2 = _objectWithoutProperties(scrollViewOffset, closure_2);
  if (null === arg1) {
    animatedRef = eulerToQuaternion.useAnimatedRef();
  }
  if (scrollViewOffset) {
    const scrollViewOffset1 = eulerToQuaternion.useScrollViewOffset(animatedRef, scrollViewOffset);
  }
  if (!("scrollEventThrottle" in tmp2)) {
    tmp2.scrollEventThrottle = 1;
  }
  const merged = Object.assign(tmp2);
  return <closure_5 ref={animatedRef} />;
});
