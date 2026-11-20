// Module ID: 5257
// Function ID: 5258
// Name: BottomSheetSectionList
// Dependencies: [19, 17, 1653, 5250, 5027]

// Module 5257 (BottomSheetSectionList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5027 */;
import module_1653 from "module_1653" /* 1653 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5250 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = module_1653.createAnimatedComponent(SectionList);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
