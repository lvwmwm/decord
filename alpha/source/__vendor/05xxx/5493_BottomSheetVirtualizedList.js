// Module ID: 5493
// Function ID: 5494
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1655, 5483, 5271]

// Module 5493 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5271 */;
import cancelAnimation from "module_1655" /* 1655 */;
import module_5483 from "module_5483" /* 5483 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_5483.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
