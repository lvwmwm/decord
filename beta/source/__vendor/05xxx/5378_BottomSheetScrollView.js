// Module ID: 5378
// Function ID: 5379
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1653, 5369, 5146]

// Module 5378 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5146 */;
import module_1653 from "module_1653" /* 1653 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5369 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = module_1653.createAnimatedComponent(ScrollView);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
