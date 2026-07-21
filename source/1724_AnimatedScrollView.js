// Module ID: 1724
// Function ID: 19369
// Name: AnimatedScrollView
// Dependencies: [57, 31, 1585, 1690, 1619, 1610, 1613]

// Module 1724 (AnimatedScrollView)
import _slicedToArray from "_slicedToArray";
import "module_31";
import { jsx } from "findNodeHandle";
import checkInvalidReadDuringRender from "checkInvalidReadDuringRender";

let closure_2 = [2478319141321596300000000000000000000000000000000000000000000000000000000000000000000];
let closure_5 = checkInvalidReadDuringRender.createAnimatedComponent(require("isJest").ScrollView);

export const AnimatedScrollView = require("getShadowNodeWrapperFromRef").componentWithRef((scrollViewOffset) => {
  let animatedRef = arg1;
  scrollViewOffset = scrollViewOffset.scrollViewOffset;
  const tmp2 = callback(scrollViewOffset, closure_2);
  if (null === arg1) {
    let obj = arg1(dependencyMap[6]);
    animatedRef = obj.useAnimatedRef();
  }
  if (scrollViewOffset) {
    scrollViewOffset = arg1(dependencyMap[6]).useScrollViewOffset(animatedRef, scrollViewOffset);
    const obj2 = arg1(dependencyMap[6]);
  }
  if (!("scrollEventThrottle" in tmp2)) {
    tmp2.scrollEventThrottle = 1;
  }
  obj = { ref: animatedRef };
  return <closure_5 {...Object.assign(obj, tmp2)} />;
});
