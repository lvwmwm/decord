// Module ID: 6267
// Function ID: 6268
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1638, 6258, 6046]

// Module 6267 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1638 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6258 = fn(6258);
const memoResult = fn(19).memo(module_6258.createBottomSheetScrollableComponent(fn(6046).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
