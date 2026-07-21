// Module ID: 5097
// Function ID: 43448
// Name: BottomSheetBackground
// Dependencies: []

// Module 5097 (BottomSheetBackground)
importDefault(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = arg1(dependencyMap[0]).memo(function BottomSheetBackgroundComponent(pointerEvents) {
  const obj = { ToggleShowActivitiesDebugOverlay: true, end_time: true, step1: true, fetchedAt: true, pointerEvents: pointerEvents.pointerEvents };
  const items = [arg1(dependencyMap[3]).styles.background, pointerEvents.style];
  obj.style = items;
  return <View {...obj} />;
});
memoResult.displayName = "BottomSheetBackground";

export const BottomSheetBackground = memoResult;
