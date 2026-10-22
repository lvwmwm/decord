// Module ID: 5476
// Function ID: 5477
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1658, 5468, 5256]

// Module 5476 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5256 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5468 from "module_5468" /* 5468 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_5468.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
