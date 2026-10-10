// Module ID: 6527
// Function ID: 6528
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1656, 6519, 6307]

// Module 6527 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6307 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6519 from "module_6519" /* 6519 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_6519.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
