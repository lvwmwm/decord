// Module ID: 6526
// Function ID: 6527
// Dependencies: [19, 17, 1656, 6519, 6307]

// Module 6526
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6307 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6519 from "module_6519" /* 6519 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_6519.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
