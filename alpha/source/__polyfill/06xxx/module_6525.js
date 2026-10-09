// Module ID: 6525
// Function ID: 6526
// Dependencies: [19, 17, 1656, 6518, 6306]

// Module 6525
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6306 */;
import cancelAnimation from "module_1656" /* 1656 */;
import module_6518 from "module_6518" /* 6518 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_6518.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
