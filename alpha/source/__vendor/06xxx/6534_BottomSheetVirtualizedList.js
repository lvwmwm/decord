// Module ID: 6534
// Function ID: 6535
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1656, 6524, 6312]

// Module 6534 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6312 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6524 from "module_6524" /* 6524 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_6524.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
