// Module ID: 6519
// Function ID: 6520
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1655, 6511, 6299]

// Module 6519 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6299 */;
import cancelAnimation from "module_1655" /* 1655 */;
import module_6511 from "module_6511" /* 6511 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_6511.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
