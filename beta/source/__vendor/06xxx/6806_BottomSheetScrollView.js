// Module ID: 6806
// Function ID: 6807
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1658, 6797, 6585]

// Module 6806 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6585 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_6797 from "module_6797" /* 6797 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_6797.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
