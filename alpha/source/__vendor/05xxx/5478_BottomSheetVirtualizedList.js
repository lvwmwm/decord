// Module ID: 5478
// Function ID: 5479
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1658, 5468, 5256]

// Module 5478 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5256 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5468 from "module_5468" /* 5468 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_5468.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
