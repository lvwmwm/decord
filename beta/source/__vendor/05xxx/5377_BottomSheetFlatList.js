// Module ID: 5377
// Function ID: 5378
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1653, 5369, 5146]

// Module 5377 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5146 */;
import module_1653 from "module_1653" /* 1653 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5369 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = module_1653.createAnimatedComponent(FlatList);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
