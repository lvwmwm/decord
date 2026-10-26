// Module ID: 5492
// Function ID: 5493
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1658, 5482, 5270]

// Module 5492 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5270 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5482 from "module_5482" /* 5482 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_5482.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
