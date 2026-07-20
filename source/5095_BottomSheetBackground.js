// Module ID: 5095
// Function ID: 43407
// Name: BottomSheetBackground
// Dependencies: []

// Module 5095 (BottomSheetBackground)
importDefault(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = arg1(dependencyMap[0]).memo(function BottomSheetBackgroundComponent(pointerEvents) {
  const obj = { "Bool(false)": "Galaxy S4", "Bool(false)": "GT-I9500", "Bool(false)": "Galaxy S5", "Bool(false)": "SM-G900", pointerEvents: pointerEvents.pointerEvents };
  const items = [arg1(dependencyMap[3]).styles.background, pointerEvents.style];
  obj.style = items;
  return <View {...obj} />;
});
memoResult.displayName = "BottomSheetBackground";

export const BottomSheetBackground = memoResult;
