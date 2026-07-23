// Module ID: 5351
// Function ID: 45951
// Name: BottomSheetScrollView
// Dependencies: [31, 27, 1582, 5342, 5190]

// Module 5351 (BottomSheetScrollView)
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent";

const animatedComponent = require("cancelAnimation").createAnimatedComponent(require("get ActivityIndicator").ScrollView);
const memoResult = require("result").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
