// Module ID: 1780
// Function ID: 1781
// Name: AnimatedScrollView
// Dependencies: [109, 19, 17, 21, 1672, 1777, 1781]

// Module 1780 (AnimatedScrollView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1781 from "module_1781" /* 1781 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import module_1672 from "module_1672" /* 1672 */;
import module_1777 from "componentWithRef" /* 1777 */;

let scrollViewOffset;

let closure_2 = ["scrollViewOffset"];
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_5 = module_1672.createAnimatedComponent(ScrollView);

export const AnimatedScrollView = module_1777.componentWithRef((scrollViewOffset, arg1) => {
  let animatedRef = arg1;
  scrollViewOffset = scrollViewOffset.scrollViewOffset;
  const tmp2 = _objectWithoutProperties(scrollViewOffset, closure_2);
  if (null === arg1) {
    const obj = _mod1781;
    animatedRef = obj.useAnimatedRef();
  }
  if (scrollViewOffset) {
    const obj2 = _mod1781;
    const scrollViewOffset1 = obj2.useScrollViewOffset(animatedRef, scrollViewOffset);
  }
  if (!("scrollEventThrottle" in tmp2)) {
    tmp2.scrollEventThrottle = 1;
  }
  const merged = Object.assign(tmp2);
  return <closure_5 ref={animatedRef} />;
});
