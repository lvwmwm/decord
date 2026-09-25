// Module ID: 6261
// Function ID: 6262
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1637, 6253, 6041]

// Module 6261 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6253 = fn(6253);
const memoResult = fn(19).memo(module_6253.createBottomSheetScrollableComponent(fn(6041).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
