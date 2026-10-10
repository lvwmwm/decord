// Module ID: 6529
// Function ID: 6530
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1656, 6519, 6307]

// Module 6529 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6307 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6519 from "module_6519" /* 6519 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_6519.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
