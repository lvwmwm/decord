// Module ID: 5847
// Function ID: 5848
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1653, 5837, 5625]

// Module 5847 (BottomSheetVirtualizedList)
import cancelAnimationDefault from "cancelAnimation" /* 1653 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5837 */;

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").VirtualizedList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
