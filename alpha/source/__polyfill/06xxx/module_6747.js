// Module ID: 6747
// Function ID: 6748
// Dependencies: [19, 17, 1656, 6740, 6528]

// Module 6747
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6528 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6740 from "module_6740" /* 6740 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_6740.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
