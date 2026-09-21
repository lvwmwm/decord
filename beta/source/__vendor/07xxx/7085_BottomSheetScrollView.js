// Module ID: 7085
// Function ID: 7086
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1641, 7076, 6864]

// Module 7085 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1641 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_7076 = fn(7076);
const memoResult = fn(19).memo(module_7076.createBottomSheetScrollableComponent(fn(6864).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
