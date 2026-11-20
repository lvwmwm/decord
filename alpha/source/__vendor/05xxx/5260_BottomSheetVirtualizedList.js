// Module ID: 5260
// Function ID: 5261
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1653, 5250, 5027]

// Module 5260 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5027 */;
import module_1653 from "module_1653" /* 1653 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5250 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = module_1653.createAnimatedComponent(VirtualizedList);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
