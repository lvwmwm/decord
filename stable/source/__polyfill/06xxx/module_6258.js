// Module ID: 6258
// Function ID: 6259
// Dependencies: [19, 17, 1644, 6251, 6039]

// Module 6258
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6039 */;
import cancelAnimation from "module_1644" /* 1644 */;
import module_6251 from "module_6251" /* 6251 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_6251.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
