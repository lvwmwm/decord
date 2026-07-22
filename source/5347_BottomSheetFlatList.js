// Module ID: 5347
// Function ID: 45931
// Name: BottomSheetFlatList
// Dependencies: []

// Module 5347 (BottomSheetFlatList)
const animatedComponent = importDefault(dependencyMap[2]).createAnimatedComponent(arg1(dependencyMap[1]).FlatList);
const importDefaultResult = importDefault(dependencyMap[2]);
const memoResult = arg1(dependencyMap[0]).memo(arg1(dependencyMap[3]).createBottomSheetScrollableComponent(arg1(dependencyMap[4]).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
