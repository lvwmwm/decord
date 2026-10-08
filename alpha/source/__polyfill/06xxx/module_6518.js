// Module ID: 6518
// Function ID: 6519
// Dependencies: [19, 17, 1655, 6511, 6299]

// Module 6518
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6299 */;
import cancelAnimation from "module_1655" /* 1655 */;
import module_6511 from "module_6511" /* 6511 */;

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_6511.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
