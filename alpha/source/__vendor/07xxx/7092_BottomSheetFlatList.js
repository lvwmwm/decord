// Module ID: 7092
// Function ID: 7093
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1637, 7084, 6872]

// Module 7092 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_7084 = fn(7084);
const memoResult = fn(19).memo(module_7084.createBottomSheetScrollableComponent(fn(6872).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
