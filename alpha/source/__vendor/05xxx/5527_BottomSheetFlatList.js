// Module ID: 5527
// Function ID: 5528
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1656, 5519, 5307]

// Module 5527 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5307 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_5519 from "module_5519" /* 5519 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_5519.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
