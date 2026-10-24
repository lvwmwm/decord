// Module ID: 5490
// Function ID: 5491
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1658, 5482, 5270]

// Module 5490 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5270 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5482 from "module_5482" /* 5482 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_5482.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
