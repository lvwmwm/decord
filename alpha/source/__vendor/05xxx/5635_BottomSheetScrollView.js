// Module ID: 5635
// Function ID: 5636
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1652, 5626, 5403]

// Module 5635 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5403 */;
import module_1652 from "module_1652" /* 1652 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5626 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = module_1652.createAnimatedComponent(ScrollView);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
