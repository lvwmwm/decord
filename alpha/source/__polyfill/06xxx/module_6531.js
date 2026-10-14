// Module ID: 6531
// Function ID: 6532
// Dependencies: [19, 17, 1656, 6524, 6312]

// Module 6531
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6312 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6524 from "module_6524" /* 6524 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_6524.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
