// Module ID: 6750
// Function ID: 6751
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1658, 6742, 6530]

// Module 6750 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6530 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_6742 from "module_6742" /* 6742 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_6742.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
