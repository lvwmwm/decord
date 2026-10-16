// Module ID: 6754
// Function ID: 6755
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1658, 6744, 6532]

// Module 6754 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6532 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_6744 from "module_6744" /* 6744 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_6744.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
