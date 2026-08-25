// Module ID: 5728
// Function ID: 5729
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1654, 5718, 5506]

// Module 5728 (BottomSheetVirtualizedList)
import cancelAnimationDefault from "cancelAnimation" /* 1654 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5718 */;

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").VirtualizedList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
