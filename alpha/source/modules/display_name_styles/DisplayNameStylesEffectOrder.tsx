// Module ID: 14859
// Function ID: 14860
// Name: DisplayNameStylesEffectOrder
// Dependencies: [19, 1390, 9178, 2]
// Exports: useVisibleEffectOrder

// Module 14859 (DisplayNameStylesEffectOrder)
import noop from "module_19" /* 19 */;

const require = fn;
const DisplayNameStylesConstants = fn(1390);
const EFFECT_ORDER = DisplayNameStylesConstants.EFFECT_ORDER;
let items = [...tmp2.FLYWHEEL_EFFECTS];
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesEffectOrder.tsx");

export const useVisibleEffectOrder = function useVisibleEffectOrder() {
  isDisplayNameStylesFlywheelSettersEnabled = isDisplayNameStylesFlywheelSettersEnabled(9178).useIsDisplayNameStylesFlywheelSettersEnabled("effect-order");
  items = [isDisplayNameStylesFlywheelSettersEnabled];
  return noop.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? items : EFFECT_ORDER, items);
};
