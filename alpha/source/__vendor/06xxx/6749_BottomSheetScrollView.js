// Module ID: 6749
// Function ID: 6750
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1656, 6740, 6528]

// Module 6749 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6528 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6740 from "module_6740" /* 6740 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_6740.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
