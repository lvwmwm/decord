// Module ID: 17473
// Function ID: 17474
// Name: DisplayNameStylesEffectOrder
// Dependencies: [1403, 2]
// Exports: useVisibleEffectOrder

// Module 17473 (DisplayNameStylesEffectOrder)
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1403 */;
import size from "module_2" /* 2 */;

const items = [..._module.FLYWHEEL_EFFECTS];
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesEffectOrder.tsx");

export function useVisibleEffectOrder() {
  return items;
}
