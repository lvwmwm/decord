// Module ID: 5798
// Function ID: 5799
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1655, 5788, 5565]

// Module 5798 (BottomSheetVirtualizedList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5565 */;
import module_1655 from "module_1655" /* 1655 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5788 */;

const memo = react.memo;
const VirtualizedList = react_native.VirtualizedList;
const animatedComponent = module_1655.createAnimatedComponent(VirtualizedList);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
