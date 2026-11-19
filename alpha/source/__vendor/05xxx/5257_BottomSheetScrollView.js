// Module ID: 5257
// Function ID: 5258
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1655, 5248, 5025]

// Module 5257 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5025 */;
import module_1655 from "module_1655" /* 1655 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5248 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = module_1655.createAnimatedComponent(ScrollView);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
