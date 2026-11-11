// Module ID: 5738
// Function ID: 5739
// Name: BottomSheetSectionList
// Dependencies: [19, 17, 1652, 5731, 5508]

// Module 5738 (BottomSheetSectionList)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5508 */;
import module_1652 from "module_1652" /* 1652 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5731 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = module_1652.createAnimatedComponent(SectionList);
const memoResult = memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
