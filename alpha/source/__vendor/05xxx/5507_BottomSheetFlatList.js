// Module ID: 5507
// Function ID: 5508
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1654, 5499, 5276]

// Module 5507 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5276 */;
import module_1654 from "module_1654" /* 1654 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5499 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = module_1654.createAnimatedComponent(FlatList);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
