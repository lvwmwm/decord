// Module ID: 5845
// Function ID: 5846
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1653, 5837, 5625]

// Module 5845 (BottomSheetFlatList)
import cancelAnimationDefault from "cancelAnimation" /* 1653 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5837 */;

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").FlatList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
