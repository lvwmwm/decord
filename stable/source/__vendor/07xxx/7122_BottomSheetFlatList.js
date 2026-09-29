// Module ID: 7122
// Function ID: 7123
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1637, 7114, 6902]

// Module 7122 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_7114 = fn(7114);
const memoResult = fn(19).memo(module_7114.createBottomSheetScrollableComponent(fn(6902).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
