// Module ID: 5472
// Function ID: 5473
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1658, 5464, 5252]

// Module 5472 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5252 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5464 from "module_5464" /* 5464 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_5464.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
