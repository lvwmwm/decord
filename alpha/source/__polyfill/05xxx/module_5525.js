// Module ID: 5525
// Function ID: 5526
// Dependencies: [19, 17, 1655, 5518, 5306]

// Module 5525
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5306 */;
import cancelAnimation from "module_1655" /* 1655 */;
import module_5518 from "module_5518" /* 5518 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_5518.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
