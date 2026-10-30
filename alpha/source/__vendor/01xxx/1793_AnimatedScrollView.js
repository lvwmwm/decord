// Module ID: 1793
// Function ID: 1794
// Name: AnimatedScrollView
// Dependencies: [109, 19, 17, 21, 1685, 1790, 1794]

// Module 1793 (AnimatedScrollView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1794 from "module_1794" /* 1794 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import module_1685 from "module_1685" /* 1685 */;
import module_1790 from "componentWithRef" /* 1790 */;

let scrollViewOffset;

let closure_2 = ["scrollViewOffset"];
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_5 = module_1685.createAnimatedComponent(ScrollView);

export const AnimatedScrollView = module_1790.componentWithRef((scrollViewOffset, arg1) => {
  let animatedRef = arg1;
  scrollViewOffset = scrollViewOffset.scrollViewOffset;
  const tmp2 = _objectWithoutProperties(scrollViewOffset, closure_2);
  if (null === arg1) {
    const obj = _mod1794;
    animatedRef = obj.useAnimatedRef();
  }
  if (scrollViewOffset) {
    const obj2 = _mod1794;
    const scrollViewOffset1 = obj2.useScrollViewOffset(animatedRef, scrollViewOffset);
  }
  if (!("scrollEventThrottle" in tmp2)) {
    tmp2.scrollEventThrottle = 1;
  }
  const merged = Object.assign(tmp2);
  return <closure_5 ref={animatedRef} />;
});
