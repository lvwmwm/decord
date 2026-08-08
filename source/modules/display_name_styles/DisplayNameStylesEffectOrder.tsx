// Module ID: 14572
// Function ID: 14573
// Name: items
// Dependencies: [19, 1915, 9237, 2]
// Exports: useVisibleEffectOrder

// Module 14572 (items)
import noop from "noop";
import items3 from "items3";

const require = arg1;
const EFFECT_ORDER = items3.EFFECT_ORDER;
let items = [...tmp2.FLYWHEEL_EFFECTS];
const result = require("apexExperiment").fileFinishedImporting("modules/display_name_styles/DisplayNameStylesEffectOrder.tsx");

export const useVisibleEffectOrder = function useVisibleEffectOrder() {
  isDisplayNameStylesFlywheelSettersEnabled = isDisplayNameStylesFlywheelSettersEnabled(9237).useIsDisplayNameStylesFlywheelSettersEnabled("effect-order");
  const items = [isDisplayNameStylesFlywheelSettersEnabled];
  return React.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? outer1_4 : outer1_3, items);
};
