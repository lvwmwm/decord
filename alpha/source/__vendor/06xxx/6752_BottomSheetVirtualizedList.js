// Module ID: 6752
// Function ID: 6753
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1658, 6742, 6530]

// Module 6752 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6530 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_6742 from "module_6742" /* 6742 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_6742.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
