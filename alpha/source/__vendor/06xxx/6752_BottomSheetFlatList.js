// Module ID: 6752
// Function ID: 6753
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1658, 6744, 6532]

// Module 6752 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6532 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_6744 from "module_6744" /* 6744 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_6744.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
