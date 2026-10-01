// Module ID: 6266
// Function ID: 6267
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1638, 6258, 6046]

// Module 6266 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6046 */;
import cancelAnimation from "module_1638" /* 1638 */;
import module_6258 from "module_6258" /* 6258 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_6258.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
