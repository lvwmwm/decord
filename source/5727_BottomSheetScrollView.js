// Module ID: 5727
// Function ID: 5728
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1654, 5718, 5506]

// Module 5727 (BottomSheetScrollView)
import cancelAnimationDefault from "cancelAnimation" /* 1654 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5718 */;

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").ScrollView);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
