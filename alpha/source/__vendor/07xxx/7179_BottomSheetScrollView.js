// Module ID: 7179
// Function ID: 7180
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1637, 7170, 6958]

// Module 7179 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_7170 = fn(7170);
const memoResult = fn(19).memo(module_7170.createBottomSheetScrollableComponent(fn(6958).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
