// Module ID: 7093
// Function ID: 7094
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1637, 7084, 6872]

// Module 7093 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_7084 = fn(7084);
const memoResult = fn(19).memo(module_7084.createBottomSheetScrollableComponent(fn(6872).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
