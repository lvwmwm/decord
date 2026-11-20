// Module ID: 5258
// Function ID: 5259
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1653, 5250, 5027]

// Module 5258 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5027 */;
import module_1653 from "module_1653" /* 1653 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5250 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = module_1653.createAnimatedComponent(FlatList);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
