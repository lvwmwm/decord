// Module ID: 7123
// Function ID: 7124
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1637, 7114, 6902]

// Module 7123 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_7114 = fn(7114);
const memoResult = fn(19).memo(module_7114.createBottomSheetScrollableComponent(fn(6902).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
