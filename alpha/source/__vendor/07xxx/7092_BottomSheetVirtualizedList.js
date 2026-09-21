// Module ID: 7092
// Function ID: 7093
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1637, 7082, 6870]

// Module 7092 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_7082 = fn(7082);
const memoResult = fn(19).memo(module_7082.createBottomSheetScrollableComponent(fn(6870).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
