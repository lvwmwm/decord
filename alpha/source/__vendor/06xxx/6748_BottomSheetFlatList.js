// Module ID: 6748
// Function ID: 6749
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1656, 6740, 6528]

// Module 6748 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6528 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6740 from "module_6740" /* 6740 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_6740.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
