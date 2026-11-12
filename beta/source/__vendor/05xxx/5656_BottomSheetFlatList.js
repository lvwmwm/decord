// Module ID: 5656
// Function ID: 5657
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1652, 5648, 5425]

// Module 5656 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5425 */;
import module_1652 from "module_1652" /* 1652 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5648 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = module_1652.createAnimatedComponent(FlatList);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
