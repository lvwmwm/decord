// Module ID: 5524
// Function ID: 5525
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1658, 5514, 5302]

// Module 5524 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5302 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5514 from "module_5514" /* 5514 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_5514.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
