// Module ID: 6533
// Function ID: 6534
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1656, 6524, 6312]

// Module 6533 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6312 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6524 from "module_6524" /* 6524 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_6524.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
