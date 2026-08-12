// Module ID: 5659
// Function ID: 5660
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1653, 5651, 5439]

// Module 5659 (BottomSheetFlatList)
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent";

const animatedComponent = require("cancelAnimation").createAnimatedComponent(require("get ActivityIndicator").FlatList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
