// Module ID: 6805
// Function ID: 6806
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1658, 6797, 6585]

// Module 6805 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6585 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_6797 from "module_6797" /* 6797 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_6797.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
