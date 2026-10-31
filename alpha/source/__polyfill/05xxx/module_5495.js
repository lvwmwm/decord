// Module ID: 5495
// Function ID: 5496
// Dependencies: [19, 17, 1650, 5488, 5276]

// Module 5495
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5276 */;
import cancelAnimation from "module_1650" /* 1650 */;
import module_5488 from "module_5488" /* 5488 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_5488.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
