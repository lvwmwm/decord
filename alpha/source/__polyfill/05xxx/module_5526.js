// Module ID: 5526
// Function ID: 5527
// Dependencies: [19, 17, 1656, 5519, 5307]

// Module 5526
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5307 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_5519 from "module_5519" /* 5519 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_5519.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
