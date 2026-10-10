// Module ID: 6528
// Function ID: 6529
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1656, 6519, 6307]

// Module 6528 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6307 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6519 from "module_6519" /* 6519 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_6519.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
