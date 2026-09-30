// Module ID: 6464
// Function ID: 6465
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1638, 6454, 6242]

// Module 6464 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1638 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6454 = fn(6454);
const memoResult = fn(19).memo(module_6454.createBottomSheetScrollableComponent(fn(6242).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
