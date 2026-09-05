// Module ID: 6847
// Function ID: 6848
// Name: BottomSheetSectionList
// Dependencies: [19, 17, 1636, 6840, 6628]

// Module 6847 (BottomSheetSectionList)
import cancelAnimationDefault from "cancelAnimation" /* 1636 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 6840 */;

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").SectionList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
