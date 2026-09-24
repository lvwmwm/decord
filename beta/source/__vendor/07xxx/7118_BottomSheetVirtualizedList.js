// Module ID: 7118
// Function ID: 7119
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1641, 7108, 6896]

// Module 7118 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1641 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_7108 = fn(7108);
const memoResult = fn(19).memo(module_7108.createBottomSheetScrollableComponent(fn(6896).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
