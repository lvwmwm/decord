// Module ID: 5488
// Function ID: 5489
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1658, 5480, 5268]

// Module 5488 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5268 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5480 from "module_5480" /* 5480 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_5480.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
