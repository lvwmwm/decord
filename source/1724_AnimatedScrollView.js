// Module ID: 1724
// Function ID: 19371
// Name: AnimatedScrollView
// Dependencies: [29, 31, 27, 33, 1616, 1721, 1725]

// Module 1724 (AnimatedScrollView)
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import { jsx } from "jsxProd";
import createAnimatedComponent from "createAnimatedComponent";
import getCurrentReactOwner from "getCurrentReactOwner";

const require = arg1;
let closure_2 = ["scrollViewOffset"];
let closure_5 = createAnimatedComponent.createAnimatedComponent(require("get ActivityIndicator").ScrollView);

export const AnimatedScrollView = getCurrentReactOwner.componentWithRef((scrollViewOffset) => {
  let animatedRef = arg1;
  scrollViewOffset = scrollViewOffset.scrollViewOffset;
  const tmp2 = callback(scrollViewOffset, closure_2);
  if (null === arg1) {
    let obj = require(1725) /* useAnimatedGestureHandler */;
    animatedRef = obj.useAnimatedRef();
  }
  if (scrollViewOffset) {
    scrollViewOffset = require(1725) /* useAnimatedGestureHandler */.useScrollViewOffset(animatedRef, scrollViewOffset);
    const obj2 = require(1725) /* useAnimatedGestureHandler */;
  }
  if (!("scrollEventThrottle" in tmp2)) {
    tmp2.scrollEventThrottle = 1;
  }
  obj = { ref: animatedRef };
  return <closure_5 {...Object.assign(obj, tmp2)} />;
});
