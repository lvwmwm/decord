// Module ID: 6750
// Function ID: 6751
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1656, 6740, 6528]

// Module 6750 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6528 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6740 from "module_6740" /* 6740 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_6740.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
