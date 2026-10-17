// Module ID: 6807
// Function ID: 6808
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1658, 6797, 6585]

// Module 6807 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6585 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_6797 from "module_6797" /* 6797 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_6797.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
