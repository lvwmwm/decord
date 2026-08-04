// Module ID: 5501
// Function ID: 5502
// Name: BottomSheetSectionList
// Dependencies: [19, 17, 1606, 5494, 5341]

// Module 5501 (BottomSheetSectionList)
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent";

const animatedComponent = require("cancelAnimation").createAnimatedComponent(require("get ActivityIndicator").SectionList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
