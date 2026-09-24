// Module ID: 7178
// Function ID: 7179
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1637, 7170, 6958]

// Module 7178 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_7170 = fn(7170);
const memoResult = fn(19).memo(module_7170.createBottomSheetScrollableComponent(fn(6958).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
