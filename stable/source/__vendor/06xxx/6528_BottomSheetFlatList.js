// Module ID: 6528
// Function ID: 6529
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1656, 6520, 6308]

// Module 6528 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6308 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6520 from "module_6520" /* 6520 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_6520.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
