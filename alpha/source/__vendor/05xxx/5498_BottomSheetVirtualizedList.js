// Module ID: 5498
// Function ID: 5499
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1650, 5488, 5276]

// Module 5498 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5276 */;
import cancelAnimation from "module_1650" /* 1650 */;
import module_5488 from "module_5488" /* 5488 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_5488.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
