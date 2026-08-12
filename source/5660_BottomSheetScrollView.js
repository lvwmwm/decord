// Module ID: 5660
// Function ID: 5661
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1653, 5651, 5439]

// Module 5660 (BottomSheetScrollView)
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent";

const animatedComponent = require("cancelAnimation").createAnimatedComponent(require("get ActivityIndicator").ScrollView);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
