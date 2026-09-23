// Module ID: 7176
// Function ID: 7177
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1637, 7168, 6956]

// Module 7176 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_7168 = fn(7168);
const memoResult = fn(19).memo(module_7168.createBottomSheetScrollableComponent(fn(6956).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
