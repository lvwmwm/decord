// Module ID: 5796
// Function ID: 5797
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1655, 5788, 5565]

// Module 5796 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5565 */;
import module_1655 from "module_1655" /* 1655 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5788 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = module_1655.createAnimatedComponent(FlatList);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
