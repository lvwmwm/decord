// Module ID: 6463
// Function ID: 6464
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1638, 6454, 6242]

// Module 6463 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1638 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6454 = fn(6454);
const memoResult = fn(19).memo(module_6454.createBottomSheetScrollableComponent(fn(6242).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
