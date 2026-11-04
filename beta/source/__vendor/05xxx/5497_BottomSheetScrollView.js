// Module ID: 5497
// Function ID: 5498
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1650, 5488, 5276]

// Module 5497 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5276 */;
import cancelAnimation from "module_1650" /* 1650 */;
import module_5488 from "module_5488" /* 5488 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_5488.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
