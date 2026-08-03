// Module ID: 5472
// Function ID: 5473
// Name: BottomSheetSectionList
// Dependencies: [19, 17, 1606, 5465, 5312]

// Module 5472 (BottomSheetSectionList)
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent";

const animatedComponent = require("cancelAnimation").createAnimatedComponent(require("get ActivityIndicator").SectionList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
