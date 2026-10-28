// Module ID: 5523
// Function ID: 5524
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1658, 5514, 5302]

// Module 5523 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5302 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5514 from "module_5514" /* 5514 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_5514.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
