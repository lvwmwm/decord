// Module ID: 6462
// Function ID: 6463
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1638, 6454, 6242]

// Module 6462 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1638 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6454 = fn(6454);
const memoResult = fn(19).memo(module_6454.createBottomSheetScrollableComponent(fn(6242).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
