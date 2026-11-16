// Module ID: 5793
// Function ID: 5794
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1655, 5784, 5561]

// Module 5793 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5561 */;
import module_1655 from "module_1655" /* 1655 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5784 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = module_1655.createAnimatedComponent(ScrollView);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
