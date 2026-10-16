// Module ID: 6749
// Function ID: 6750
// Dependencies: [19, 17, 1658, 6742, 6530]

// Module 6749
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6530 */;
import cancelAnimation from "module_1658" /* 1658 */;
import module_6742 from "module_6742" /* 6742 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_6742.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
