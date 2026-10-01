// Module ID: 6265
// Function ID: 6266
// Dependencies: [19, 17, 1638, 6258, 6046]

// Module 6265
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6046 */;
import cancelAnimation from "module_1638" /* 1638 */;
import module_6258 from "module_6258" /* 6258 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_6258.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
