// Module ID: 6434
// Function ID: 6435
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1638, 6424, 6212]

// Module 6434 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1638 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6424 = fn(6424);
const memoResult = fn(19).memo(module_6424.createBottomSheetScrollableComponent(fn(6212).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
