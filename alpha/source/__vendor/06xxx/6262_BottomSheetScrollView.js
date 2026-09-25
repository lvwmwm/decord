// Module ID: 6262
// Function ID: 6263
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1637, 6253, 6041]

// Module 6262 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6253 = fn(6253);
const memoResult = fn(19).memo(module_6253.createBottomSheetScrollableComponent(fn(6041).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
