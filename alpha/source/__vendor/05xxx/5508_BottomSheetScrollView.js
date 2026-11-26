// Module ID: 5508
// Function ID: 5509
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1654, 5499, 5276]

// Module 5508 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5276 */;
import module_1654 from "module_1654" /* 1654 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5499 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = module_1654.createAnimatedComponent(ScrollView);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
