// Module ID: 5521
// Function ID: 5522
// Dependencies: [19, 17, 1658, 5514, 5302]

// Module 5521
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5302 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5514 from "module_5514" /* 5514 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_5514.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
