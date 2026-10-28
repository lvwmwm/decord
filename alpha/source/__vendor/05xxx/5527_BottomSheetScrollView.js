// Module ID: 5527
// Function ID: 5528
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1655, 5518, 5306]

// Module 5527 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5306 */;
import cancelAnimation from "module_1655" /* 1655 */;
import module_5518 from "module_5518" /* 5518 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_5518.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
