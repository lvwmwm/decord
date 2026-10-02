// Module ID: 6259
// Function ID: 6260
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1644, 6251, 6039]

// Module 6259 (BottomSheetFlatList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6039 */;
import cancelAnimation from "module_1644" /* 1644 */;
import module_6251 from "module_6251" /* 6251 */;

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_6251.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
