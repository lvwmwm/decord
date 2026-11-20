// Module ID: 5259
// Function ID: 5260
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1653, 5250, 5027]

// Module 5259 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5027 */;
import module_1653 from "module_1653" /* 1653 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5250 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = module_1653.createAnimatedComponent(ScrollView);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
