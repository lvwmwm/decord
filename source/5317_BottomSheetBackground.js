// Module ID: 5317
// Function ID: 45825
// Name: BottomSheetBackground
// Dependencies: []

// Module 5317 (BottomSheetBackground)
importDefault(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = arg1(dependencyMap[0]).memo(function BottomSheetBackgroundComponent(pointerEvents) {
  const obj = { pointerEvents: pointerEvents.pointerEvents };
  const items = [arg1(dependencyMap[3]).styles.background, pointerEvents.style];
  obj.style = items;
  return <View {...obj} />;
});
memoResult.displayName = "BottomSheetBackground";

export const BottomSheetBackground = memoResult;
