// Module ID: 1798
// Function ID: 1799
// Name: AnimatedScrollView
// Dependencies: [109, 19, 17, 21, 1690, 1795, 1799]

// Module 1798 (AnimatedScrollView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1799 from "module_1799" /* 1799 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import module_1690 from "module_1690" /* 1690 */;
import module_1795 from "componentWithRef" /* 1795 */;

let scrollViewOffset;

let closure_2 = ["scrollViewOffset"];
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_5 = module_1690.createAnimatedComponent(ScrollView);

export const AnimatedScrollView = module_1795.componentWithRef((scrollViewOffset, arg1) => {
  let animatedRef = arg1;
  scrollViewOffset = scrollViewOffset.scrollViewOffset;
  const tmp2 = _objectWithoutProperties(scrollViewOffset, closure_2);
  if (null === arg1) {
    const obj = _mod1799;
    animatedRef = obj.useAnimatedRef();
  }
  if (scrollViewOffset) {
    const obj2 = _mod1799;
    const scrollViewOffset1 = obj2.useScrollViewOffset(animatedRef, scrollViewOffset);
  }
  if (!("scrollEventThrottle" in tmp2)) {
    tmp2.scrollEventThrottle = 1;
  }
  const merged = Object.assign(tmp2);
  return <closure_5 ref={animatedRef} />;
});
