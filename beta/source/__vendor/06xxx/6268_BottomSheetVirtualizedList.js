// Module ID: 6268
// Function ID: 6269
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1638, 6258, 6046]

// Module 6268 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6046 */;
import cancelAnimation from "module_1638" /* 1638 */;
import module_6258 from "module_6258" /* 6258 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_6258.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
