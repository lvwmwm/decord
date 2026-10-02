// Module ID: 1786
// Function ID: 1787
// Name: AnimatedScrollView
// Dependencies: [109, 19, 17, 21, 1678, 1783, 1787]

// Module 1786 (AnimatedScrollView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1787 from "module_1787" /* 1787 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import module_1678 from "module_1678" /* 1678 */;
import module_1783 from "componentWithRef" /* 1783 */;

let scrollViewOffset;

let closure_2 = ["scrollViewOffset"];
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_5 = module_1678.createAnimatedComponent(ScrollView);

export const AnimatedScrollView = module_1783.componentWithRef((scrollViewOffset, arg1) => {
  let animatedRef = arg1;
  scrollViewOffset = scrollViewOffset.scrollViewOffset;
  const tmp2 = _objectWithoutProperties(scrollViewOffset, closure_2);
  if (null === arg1) {
    const obj = _mod1787;
    animatedRef = obj.useAnimatedRef();
  }
  if (scrollViewOffset) {
    const obj2 = _mod1787;
    const scrollViewOffset1 = obj2.useScrollViewOffset(animatedRef, scrollViewOffset);
  }
  if (!("scrollEventThrottle" in tmp2)) {
    tmp2.scrollEventThrottle = 1;
  }
  const merged = Object.assign(tmp2);
  return <closure_5 ref={animatedRef} />;
});
