// Module ID: 5129
// Function ID: 43556
// Name: BottomSheetVirtualizedList
// Dependencies: []

// Module 5129 (BottomSheetVirtualizedList)
const animatedComponent = importDefault(dependencyMap[2]).createAnimatedComponent(arg1(dependencyMap[1]).VirtualizedList);
const importDefaultResult = importDefault(dependencyMap[2]);
const memoResult = arg1(dependencyMap[0]).memo(arg1(dependencyMap[3]).createBottomSheetScrollableComponent(arg1(dependencyMap[4]).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
