// Module ID: 5797
// Function ID: 5798
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1655, 5788, 5565]

// Module 5797 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5565 */;
import module_1655 from "module_1655" /* 1655 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5788 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = module_1655.createAnimatedComponent(ScrollView);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
