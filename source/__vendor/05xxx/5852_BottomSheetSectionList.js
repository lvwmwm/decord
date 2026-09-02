// Module ID: 5852
// Function ID: 5853
// Name: BottomSheetSectionList
// Dependencies: [19, 17, 1652, 5845, 5633]

// Module 5852 (BottomSheetSectionList)
import cancelAnimationDefault from "cancelAnimation" /* 1652 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5845 */;

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").SectionList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
