// Module ID: 5633
// Function ID: 5634
// Name: BottomSheetSectionList
// Dependencies: [19, 17, 1652, 5626, 5403]

// Module 5633 (BottomSheetSectionList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5403 */;
import module_1652 from "module_1652" /* 1652 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5626 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = module_1652.createAnimatedComponent(SectionList);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
