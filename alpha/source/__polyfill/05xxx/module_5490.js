// Module ID: 5490
// Function ID: 5491
// Dependencies: [19, 17, 1655, 5483, 5271]

// Module 5490
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5271 */;
import cancelAnimation from "module_1655" /* 1655 */;
import module_5483 from "module_5483" /* 5483 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_5483.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
