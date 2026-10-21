// Module ID: 5474
// Function ID: 5475
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1658, 5464, 5252]

// Module 5474 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5252 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5464 from "module_5464" /* 5464 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_5464.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
