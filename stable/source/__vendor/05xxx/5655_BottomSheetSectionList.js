// Module ID: 5655
// Function ID: 5656
// Name: BottomSheetSectionList
// Dependencies: [19, 17, 1652, 5648, 5425]

// Module 5655 (BottomSheetSectionList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5425 */;
import module_1652 from "module_1652" /* 1652 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5648 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = module_1652.createAnimatedComponent(SectionList);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
