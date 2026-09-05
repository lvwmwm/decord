// Module ID: 6850
// Function ID: 6851
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1636, 6840, 6628]

// Module 6850 (BottomSheetVirtualizedList)
import cancelAnimationDefault from "cancelAnimation" /* 1636 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 6840 */;

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").VirtualizedList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
