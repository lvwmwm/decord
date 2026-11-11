// Module ID: 5741
// Function ID: 5742
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1652, 5731, 5508]

// Module 5741 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5508 */;
import module_1652 from "module_1652" /* 1652 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5731 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = module_1652.createAnimatedComponent(VirtualizedList);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
