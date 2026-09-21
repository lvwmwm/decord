// Module ID: 7090
// Function ID: 7091
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1637, 7082, 6870]

// Module 7090 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_7082 = fn(7082);
const memoResult = fn(19).memo(module_7082.createBottomSheetScrollableComponent(fn(6870).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
