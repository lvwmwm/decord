// Module ID: 6526
// Function ID: 6527
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1656, 6518, 6306]

// Module 6526 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6306 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6518 from "module_6518" /* 6518 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_6518.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
