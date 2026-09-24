// Module ID: 7180
// Function ID: 7181
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1637, 7170, 6958]

// Module 7180 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_7170 = fn(7170);
const memoResult = fn(19).memo(module_7170.createBottomSheetScrollableComponent(fn(6958).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
