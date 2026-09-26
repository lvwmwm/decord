// Module ID: 7124
// Function ID: 7125
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1637, 7114, 6902]

// Module 7124 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_7114 = fn(7114);
const memoResult = fn(19).memo(module_7114.createBottomSheetScrollableComponent(fn(6902).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
