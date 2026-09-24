// Module ID: 7116
// Function ID: 7117
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1641, 7108, 6896]

// Module 7116 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1641 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_7108 = fn(7108);
const memoResult = fn(19).memo(module_7108.createBottomSheetScrollableComponent(fn(6896).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
