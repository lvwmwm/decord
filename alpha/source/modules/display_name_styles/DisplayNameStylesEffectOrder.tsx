// Module ID: 17260
// Function ID: 17261
// Name: DisplayNameStylesEffectOrder
// Dependencies: [1402, 2]
// Exports: useVisibleEffectOrder

// Module 17260 (DisplayNameStylesEffectOrder)
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1402 */;
import size from "module_2" /* 2 */;

const items = [..._module.FLYWHEEL_EFFECTS];
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesEffectOrder.tsx");

export function useVisibleEffectOrder() {
  return items;
}
