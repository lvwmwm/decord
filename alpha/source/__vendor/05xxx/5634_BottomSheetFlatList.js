// Module ID: 5634
// Function ID: 5635
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1652, 5626, 5403]

// Module 5634 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5403 */;
import module_1652 from "module_1652" /* 1652 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5626 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = module_1652.createAnimatedComponent(FlatList);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
