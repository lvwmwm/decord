// Module ID: 6753
// Function ID: 6754
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1658, 6744, 6532]

// Module 6753 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6532 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_6744 from "module_6744" /* 6744 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_6744.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
