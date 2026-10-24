// Module ID: 5489
// Function ID: 5490
// Dependencies: [19, 17, 1658, 5482, 5270]

// Module 5489
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5270 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_5482 from "module_5482" /* 5482 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_5482.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
