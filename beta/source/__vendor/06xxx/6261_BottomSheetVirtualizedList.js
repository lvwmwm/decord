// Module ID: 6261
// Function ID: 6262
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1644, 6251, 6039]

// Module 6261 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6039 */;
import cancelAnimation from "module_1644" /* 1644 */;
import module_6251 from "module_6251" /* 6251 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = cancelAnimation.createAnimatedComponent(VirtualizedList);
const memoResult = memo(module_6251.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
