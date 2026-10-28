// Module ID: 5526
// Function ID: 5527
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1655, 5518, 5306]

// Module 5526 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5306 */;
import cancelAnimation from "module_1655" /* 1655 */;
import module_5518 from "module_5518" /* 5518 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_5518.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
