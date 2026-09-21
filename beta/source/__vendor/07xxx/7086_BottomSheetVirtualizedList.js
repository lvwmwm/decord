// Module ID: 7086
// Function ID: 7087
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1641, 7076, 6864]

// Module 7086 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1641 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_7076 = fn(7076);
const memoResult = fn(19).memo(module_7076.createBottomSheetScrollableComponent(fn(6864).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
