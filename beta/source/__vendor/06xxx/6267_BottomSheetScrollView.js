// Module ID: 6267
// Function ID: 6268
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1638, 6258, 6046]

// Module 6267 (BottomSheetScrollView)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6046 */;
import cancelAnimation from "module_1638" /* 1638 */;
import module_6258 from "module_6258" /* 6258 */;

const memo = react.memo;
const ScrollView = react_native.ScrollView;
const animatedComponent = cancelAnimation.createAnimatedComponent(ScrollView);
const memoResult = memo(module_6258.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
