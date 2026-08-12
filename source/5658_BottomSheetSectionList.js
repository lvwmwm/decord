// Module ID: 5658
// Function ID: 5659
// Name: BottomSheetSectionList
// Dependencies: [19, 17, 1653, 5651, 5439]

// Module 5658 (BottomSheetSectionList)
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent";

const animatedComponent = require("cancelAnimation").createAnimatedComponent(require("get ActivityIndicator").SectionList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
