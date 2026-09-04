// Module ID: 15262
// Function ID: 15263
// Name: items
// Dependencies: [19, 1938, 9106, 2]
// Exports: useVisibleEffectOrder

// Module 15262 (items)
import closure_2 from "noop" /* 19 */;
import items3 from "items3" /* 1938 */;

const require = arg1;
const EFFECT_ORDER = items3.EFFECT_ORDER;
let items = [...tmp2.FLYWHEEL_EFFECTS];
const result = require("set").fileFinishedImporting("modules/display_name_styles/DisplayNameStylesEffectOrder.tsx");

export const useVisibleEffectOrder = function useVisibleEffectOrder() {
  isDisplayNameStylesFlywheelSettersEnabled = isDisplayNameStylesFlywheelSettersEnabled(9106).useIsDisplayNameStylesFlywheelSettersEnabled("effect-order");
  items = [isDisplayNameStylesFlywheelSettersEnabled];
  return React.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? closure_1_4 : closure_1_3, items);
};
