// Module ID: 12865
// Function ID: 12866
// Name: CustomizationControls
// Dependencies: [21, 12866, 12869, 2]
// Exports: default

// Module 12865 (CustomizationControls)
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/CustomizationControls.tsx");

export default function CustomizationControls(isFinalizeRoute) {
  let activeCustomizationOption;
  let isLandscape;
  let isSaving;
  let onSelectTraitOption;
  let tmp3Result;
  ({ activeCustomizationOption, isSaving, isLandscape, onSelectTraitOption } = isFinalizeRoute);
  if (isFinalizeRoute.isFinalizeRoute) {
    const obj2 = { customizationOption: activeCustomizationOption, isCurrentTraitBlocked: tmp, disabled: isSaving, isLandscape, onSelectOption: onSelectTraitOption, onSelectFinalizeOption: tmp2 };
    tmp3Result = tmp3(tmp4(12866), obj2);
  } else {
    const obj = { customizationOption: activeCustomizationOption, disabled: isSaving, isLandscape, onSelectOption: onSelectTraitOption };
    tmp3Result = tmp3(tmp4(12869), obj, activeCustomizationOption);
  }
  return tmp3Result;
};
