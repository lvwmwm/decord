// Module ID: 5453
// Function ID: 5454
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1658, 5443, 5231]

// Module 5453 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5231 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5443 from "module_5443" /* 5443 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_5443.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
