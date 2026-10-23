// Module ID: 5490
// Function ID: 5491
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1658, 5480, 5268]

// Module 5490 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5268 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5480 from "module_5480" /* 5480 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_5480.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
