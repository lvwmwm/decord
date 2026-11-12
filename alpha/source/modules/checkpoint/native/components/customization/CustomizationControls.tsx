// Module ID: 14413
// Function ID: 14414
// Name: CustomizationControls
// Dependencies: [21, 14414, 2]
// Exports: default

// Module 14413 (CustomizationControls)
import Fragment from "Fragment" /* 21 */;
import TraitPickerControlsDefault from "TraitPickerControls" /* 14414 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/CustomizationControls.tsx");

export default function CustomizationControls(arg0) {
  let activeCustomizationOption;
  let isCurrentTraitBlocked;
  let isFinalizeRoute;
  let isLandscape;
  let isSaving;
  let onSelectFinalizeOption;
  let onSelectTraitOption;
  ({ activeCustomizationOption, isFinalizeRoute } = arg0);
  ({ isCurrentTraitBlocked, isSaving, isLandscape, onSelectFinalizeOption, onSelectTraitOption } = arg0);
  let str = "finalize";
  const tmp = jsx;
  const tmp2 = TraitPickerControlsDefault;
  if (!isFinalizeRoute) {
    str = activeCustomizationOption;
  }
  return tmp(tmp2, { activeCustomizationOption, isFinalizeRoute, isCurrentTraitBlocked, disabled, isLandscape, onSelectOption, onSelectFinalizeOption }, str);
};
