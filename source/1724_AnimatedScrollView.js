// Module ID: 1724
// Function ID: 19364
// Name: AnimatedScrollView
// Dependencies: []

// Module 1724 (AnimatedScrollView)
let closure_2 = [true];
let closure_3 = importDefault(dependencyMap[0]);
importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_5 = arg1(dependencyMap[4]).createAnimatedComponent(arg1(dependencyMap[2]).ScrollView);
const obj = arg1(dependencyMap[4]);

export const AnimatedScrollView = arg1(dependencyMap[5]).componentWithRef((scrollViewOffset) => {
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
