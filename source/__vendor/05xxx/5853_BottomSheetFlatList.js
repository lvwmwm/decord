// Module ID: 5853
// Function ID: 5854
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1652, 5845, 5633]

// Module 5853 (BottomSheetFlatList)
import cancelAnimationDefault from "cancelAnimation" /* 1652 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5845 */;

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").FlatList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
