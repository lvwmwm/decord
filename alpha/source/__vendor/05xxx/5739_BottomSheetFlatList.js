// Module ID: 5739
// Function ID: 5740
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1652, 5731, 5508]

// Module 5739 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5508 */;
import module_1652 from "module_1652" /* 1652 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5731 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = module_1652.createAnimatedComponent(FlatList);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
