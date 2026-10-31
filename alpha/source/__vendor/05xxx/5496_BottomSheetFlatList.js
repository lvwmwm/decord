// Module ID: 5496
// Function ID: 5497
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1650, 5488, 5276]

// Module 5496 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5276 */;
import cancelAnimation from "module_1650" /* 1650 */;
import module_5488 from "module_5488" /* 5488 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_5488.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
