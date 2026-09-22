// Module ID: 6949
// Function ID: 6950
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1636, 6941, 6729]

// Module 6949 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6941 = fn(6941);
const memoResult = fn(19).memo(module_6941.createBottomSheetScrollableComponent(fn(6729).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
