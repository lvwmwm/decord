// Module ID: 5350
// Function ID: 45955
// Name: BottomSheetFlatList
// Dependencies: [31, 27, 1582, 5342, 5190]

// Module 5350 (BottomSheetFlatList)
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent";

const animatedComponent = require("cancelAnimation").createAnimatedComponent(require("get ActivityIndicator").FlatList);
const memoResult = require("result").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
