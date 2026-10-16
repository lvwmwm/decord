// Module ID: 6751
// Function ID: 6752
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1658, 6742, 6530]

// Module 6751 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6530 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_6742 from "module_6742" /* 6742 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_6742.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
