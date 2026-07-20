// Module ID: 14094
// Function ID: 107026
// Name: items
// Dependencies: []
// Exports: useVisibleEffectOrder

// Module 14094 (items)
let closure_2 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const EFFECT_ORDER = tmp2.EFFECT_ORDER;
const items = [...tmp2.FLYWHEEL_EFFECTS];
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/display_name_styles/DisplayNameStylesEffectOrder.tsx");

export const useVisibleEffectOrder = function useVisibleEffectOrder() {
  const isDisplayNameStylesFlywheelSettersEnabled = arg1(dependencyMap[2]).useIsDisplayNameStylesFlywheelSettersEnabled("effect-order");
  const arg1 = isDisplayNameStylesFlywheelSettersEnabled;
  const items = [isDisplayNameStylesFlywheelSettersEnabled];
  return React.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? closure_4 : closure_3, items);
};
