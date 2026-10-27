// Module ID: 5491
// Function ID: 5492
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1655, 5483, 5271]

// Module 5491 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5271 */;
import cancelAnimation from "module_1655" /* 1655 */;
import module_5483 from "module_5483" /* 5483 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_5483.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
