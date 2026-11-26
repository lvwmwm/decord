// Module ID: 5506
// Function ID: 5507
// Name: BottomSheetSectionList
// Dependencies: [19, 17, 1654, 5499, 5276]

// Module 5506 (BottomSheetSectionList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5276 */;
import module_1654 from "module_1654" /* 1654 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5499 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = module_1654.createAnimatedComponent(SectionList);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
