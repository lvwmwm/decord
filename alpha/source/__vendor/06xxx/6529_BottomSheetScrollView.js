// Module ID: 6529
// Function ID: 6530
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1656, 6520, 6308]

// Module 6529 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6308 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6520 from "module_6520" /* 6520 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_6520.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
