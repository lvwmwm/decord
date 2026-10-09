// Module ID: 6527
// Function ID: 6528
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1656, 6518, 6306]

// Module 6527 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6306 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6518 from "module_6518" /* 6518 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_6518.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
