// Module ID: 13906
// Function ID: 13907
// Name: TraitPickerControls
// Dependencies: [21, 13907, 13908, 2]
// Exports: default

// Module 13906 (TraitPickerControls)
import Fragment from "Fragment" /* 21 */;
import useTraitPickerSelection from "useTraitPickerSelection" /* 13907 */;
import TraitPickerDefault from "TraitPicker" /* 13908 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPickerControls.tsx");

export default function TraitPickerControls(activeCustomizationOption) {
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  const onSelectOption = activeCustomizationOption.onSelectOption;
  const merged = Object.assign(activeCustomizationOption, Object.assign({ activeCustomizationOption: 0, onSelectOption: 0 }));
  const obj = useTraitPickerSelection;
  const traitPickerSelection = obj.useTraitPickerSelection({ customizationOption: activeCustomizationOption, onSelectOption });
  TraitPickerDefault;
  const merged1 = Object.assign(merged);
  ({ optionIds: obj2.optionIds, savedOptionId: obj2.savedOptionId, selectedOptionId: obj2.selectedOptionId, onSelectOption: obj2.onSelectOption } = traitPickerSelection);
  return <tmp3 customizationOption={activeCustomizationOption} />;
};
