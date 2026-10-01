// Module ID: 6454
// Function ID: 6455
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1638, 6444, 6232]

// Module 6454 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1638 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6444 = fn(6444);
const memoResult = fn(19).memo(module_6444.createBottomSheetScrollableComponent(fn(6232).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
