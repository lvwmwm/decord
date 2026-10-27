// Module ID: 1797
// Function ID: 1798
// Name: AnimatedScrollView
// Dependencies: [109, 19, 17, 21, 1689, 1794, 1798]

// Module 1797 (AnimatedScrollView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1798 from "module_1798" /* 1798 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import module_1689 from "module_1689" /* 1689 */;
import module_1794 from "componentWithRef" /* 1794 */;

let scrollViewOffset;

let closure_2 = ["scrollViewOffset"];
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_5 = module_1689.createAnimatedComponent(ScrollView);

export const AnimatedScrollView = module_1794.componentWithRef((scrollViewOffset, arg1) => {
  let animatedRef = arg1;
  scrollViewOffset = scrollViewOffset.scrollViewOffset;
  const tmp2 = _objectWithoutProperties(scrollViewOffset, closure_2);
  if (null === arg1) {
    const obj = _mod1798;
    animatedRef = obj.useAnimatedRef();
  }
  if (scrollViewOffset) {
    const obj2 = _mod1798;
    const scrollViewOffset1 = obj2.useScrollViewOffset(animatedRef, scrollViewOffset);
  }
  if (!("scrollEventThrottle" in tmp2)) {
    tmp2.scrollEventThrottle = 1;
  }
  const merged = Object.assign(tmp2);
  return <closure_5 ref={animatedRef} />;
});
