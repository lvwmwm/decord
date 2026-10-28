// Module ID: 5528
// Function ID: 5529
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1655, 5518, 5306]

// Module 5528 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5306 */;
import cancelAnimation from "module_1655" /* 1655 */;
import module_5518 from "module_5518" /* 5518 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_5518.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
