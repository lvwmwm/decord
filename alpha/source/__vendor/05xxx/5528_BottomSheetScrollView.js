// Module ID: 5528
// Function ID: 5529
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1656, 5519, 5307]

// Module 5528 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5307 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_5519 from "module_5519" /* 5519 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_5519.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
