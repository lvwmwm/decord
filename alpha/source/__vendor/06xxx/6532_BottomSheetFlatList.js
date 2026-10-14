// Module ID: 6532
// Function ID: 6533
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1656, 6524, 6312]

// Module 6532 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6312 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6524 from "module_6524" /* 6524 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_6524.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
