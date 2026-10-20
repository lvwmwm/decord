// Module ID: 5452
// Function ID: 5453
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1658, 5443, 5231]

// Module 5452 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5231 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5443 from "module_5443" /* 5443 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_5443.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
