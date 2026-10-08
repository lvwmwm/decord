// Module ID: 6521
// Function ID: 6522
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1655, 6511, 6299]

// Module 6521 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6299 */;
import cancelAnimation from "module_1655" /* 1655 */;
import module_6511 from "module_6511" /* 6511 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_6511.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
