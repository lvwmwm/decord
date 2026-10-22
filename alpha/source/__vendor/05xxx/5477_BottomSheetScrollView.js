// Module ID: 5477
// Function ID: 5478
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1658, 5468, 5256]

// Module 5477 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5256 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5468 from "module_5468" /* 5468 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_5468.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
