// Module ID: 5376
// Function ID: 5377
// Name: BottomSheetSectionList
// Dependencies: [19, 17, 1653, 5369, 5146]

// Module 5376 (BottomSheetSectionList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5146 */;
import module_1653 from "module_1653" /* 1653 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5369 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = module_1653.createAnimatedComponent(SectionList);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
