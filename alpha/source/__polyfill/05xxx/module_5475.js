// Module ID: 5475
// Function ID: 5476
// Dependencies: [19, 17, 1658, 5468, 5256]

// Module 5475
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5256 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5468 from "module_5468" /* 5468 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_5468.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
