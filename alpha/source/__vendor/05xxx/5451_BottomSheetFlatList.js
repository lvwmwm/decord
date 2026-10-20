// Module ID: 5451
// Function ID: 5452
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1658, 5443, 5231]

// Module 5451 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5231 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5443 from "module_5443" /* 5443 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_5443.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
