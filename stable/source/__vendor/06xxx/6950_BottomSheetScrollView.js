// Module ID: 6950
// Function ID: 6951
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1636, 6941, 6729]

// Module 6950 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6941 = fn(6941);
const memoResult = fn(19).memo(module_6941.createBottomSheetScrollableComponent(fn(6729).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
