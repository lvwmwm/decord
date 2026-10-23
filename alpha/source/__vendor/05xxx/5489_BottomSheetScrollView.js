// Module ID: 5489
// Function ID: 5490
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1658, 5480, 5268]

// Module 5489 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5268 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5480 from "module_5480" /* 5480 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_5480.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
