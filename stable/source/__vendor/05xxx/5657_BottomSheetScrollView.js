// Module ID: 5657
// Function ID: 5658
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1652, 5648, 5425]

// Module 5657 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5425 */;
import module_1652 from "module_1652" /* 1652 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5648 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = module_1652.createAnimatedComponent(ScrollView);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
