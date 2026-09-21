// Module ID: 7084
// Function ID: 7085
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1641, 7076, 6864]

// Module 7084 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1641 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_7076 = fn(7076);
const memoResult = fn(19).memo(module_7076.createBottomSheetScrollableComponent(fn(6864).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
