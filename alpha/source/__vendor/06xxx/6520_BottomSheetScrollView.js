// Module ID: 6520
// Function ID: 6521
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1655, 6511, 6299]

// Module 6520 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6299 */;
import cancelAnimation from "module_1655" /* 1655 */;
import module_6511 from "module_6511" /* 6511 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_6511.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
