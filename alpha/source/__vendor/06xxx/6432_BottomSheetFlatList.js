// Module ID: 6432
// Function ID: 6433
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1638, 6424, 6212]

// Module 6432 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1638 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6424 = fn(6424);
const memoResult = fn(19).memo(module_6424.createBottomSheetScrollableComponent(fn(6212).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
