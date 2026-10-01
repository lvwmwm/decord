// Module ID: 6453
// Function ID: 6454
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1638, 6444, 6232]

// Module 6453 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1638 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6444 = fn(6444);
const memoResult = fn(19).memo(module_6444.createBottomSheetScrollableComponent(fn(6232).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
