// Module ID: 7117
// Function ID: 7118
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1641, 7108, 6896]

// Module 7117 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1641 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_7108 = fn(7108);
const memoResult = fn(19).memo(module_7108.createBottomSheetScrollableComponent(fn(6896).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
