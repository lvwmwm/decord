// Module ID: 5811
// Function ID: 5812
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1654, 5802, 5590]

// Module 5811 (BottomSheetScrollView)
import cancelAnimationDefault from "cancelAnimation" /* 1654 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5802 */;

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").ScrollView);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
