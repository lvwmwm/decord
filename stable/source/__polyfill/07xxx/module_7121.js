// Module ID: 7121
// Function ID: 7122
// Dependencies: [19, 17, 1637, 7114, 6902]

// Module 7121
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).SectionList);
const module_7114 = fn(7114);
const memoResult = fn(19).memo(module_7114.createBottomSheetScrollableComponent(fn(6902).SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
