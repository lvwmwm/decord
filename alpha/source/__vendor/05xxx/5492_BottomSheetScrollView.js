// Module ID: 5492
// Function ID: 5493
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1651, 5483, 5271]

// Module 5492 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5271 */;
import cancelAnimation from "module_1651" /* 1651 */;
import module_5483 from "module_5483" /* 5483 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_5483.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
