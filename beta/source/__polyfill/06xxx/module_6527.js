// Module ID: 6527
// Function ID: 6528
// Dependencies: [19, 17, 1656, 6520, 6308]

// Module 6527
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6308 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6520 from "module_6520" /* 6520 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_6520.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
