// Module ID: 5352
// Function ID: 45957
// Name: BottomSheetVirtualizedList
// Dependencies: [31, 27, 1582, 5342, 5190]

// Module 5352 (BottomSheetVirtualizedList)
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent";

const animatedComponent = require("cancelAnimation").createAnimatedComponent(require("get ActivityIndicator").VirtualizedList);
const memoResult = require("result").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
