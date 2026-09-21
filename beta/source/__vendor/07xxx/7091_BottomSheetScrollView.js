// Module ID: 7091
// Function ID: 7092
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1637, 7082, 6870]

// Module 7091 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_7082 = fn(7082);
const memoResult = fn(19).memo(module_7082.createBottomSheetScrollableComponent(fn(6870).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
