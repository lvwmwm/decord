// Module ID: 17330
// Function ID: 17331
// Name: DisplayNameStylesEffectOrder
// Dependencies: [1401, 2]
// Exports: useVisibleEffectOrder

// Module 17330 (DisplayNameStylesEffectOrder)
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1401 */;
import size from "module_2" /* 2 */;

const items = [..._module.FLYWHEEL_EFFECTS];
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesEffectOrder.tsx");

export function useVisibleEffectOrder() {
  return items;
}
