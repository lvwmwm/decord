// Module ID: 6335
// Function ID: 6336
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1643, 6325, 6113]

// Module 6335 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6113 */;
import cancelAnimation from "module_1643" /* 1643 */;
import module_6325 from "module_6325" /* 6325 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_6325.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
