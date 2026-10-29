// Module ID: 5529
// Function ID: 5530
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1656, 5519, 5307]

// Module 5529 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5307 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_5519 from "module_5519" /* 5519 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_5519.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
