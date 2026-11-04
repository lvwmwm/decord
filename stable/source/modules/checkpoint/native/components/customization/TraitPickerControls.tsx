// Module ID: 13058
// Function ID: 13059
// Name: TraitPickerControls
// Dependencies: [109, 21, 558, 576, 13059, 13060, 2]

// Module 13058 (TraitPickerControls)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import TraitPickerDefault from "TraitPicker" /* 13060 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const useTraitPickerSelection = tmp(13059);
let closure_3 = ["activeCustomizationOption", "onSelectOption"];
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function TraitPickerControls(arg0) {
  let activeCustomizationOption;
  let onSelectOption;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(14);
  if (cResult[0] !== arg0) {
    ({ activeCustomizationOption, onSelectOption } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = activeCustomizationOption;
    cResult[2] = onSelectOption;
    cResult[3] = tmp9;
    tmp6 = tmp9;
    tmp5 = onSelectOption;
    tmp4 = activeCustomizationOption;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] === tmp4) {
    let tmp10;
    if (cResult[5] === tmp5) {
      tmp10 = cResult[6];
    }
    const tmpResult = useTraitPickerSelection;
    const traitPickerSelection = tmpResult.useTraitPickerSelection(tmp10);
    if (cResult[7] === tmp4) {
      if (cResult[8] === tmp6) {
        if (cResult[9] === traitPickerSelection.onSelectOption) {
          if (cResult[10] === traitPickerSelection.optionIds) {
            if (cResult[11] === traitPickerSelection.savedOptionId) {
              let tmp12;
              if (cResult[12] === traitPickerSelection.selectedOptionId) {
                tmp12 = cResult[13];
              }
              return tmp12;
            }
          }
        }
      }
    }
    TraitPickerDefault;
    const merged = Object.assign(tmp6);
    ({ optionIds: obj4.optionIds, savedOptionId: obj4.savedOptionId, selectedOptionId: obj4.selectedOptionId, onSelectOption: obj4.onSelectOption } = traitPickerSelection);
    const tmp19 = <tmp15 key={tmp4} customizationOption={tmp4} />;
    cResult[7] = tmp4;
    cResult[8] = tmp6;
    cResult[9] = traitPickerSelection.onSelectOption;
    cResult[10] = traitPickerSelection.optionIds;
    cResult[11] = traitPickerSelection.savedOptionId;
    cResult[12] = traitPickerSelection.selectedOptionId;
    cResult[13] = tmp19;
    tmp12 = tmp19;
  }
  const obj3 = { customizationOption: tmp4, onSelectOption: tmp5 };
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = obj3;
  tmp10 = obj3;
}) : (function TraitPickerControls(activeCustomizationOption) {
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  const onSelectOption = activeCustomizationOption.onSelectOption;
  const merged = Object.assign(activeCustomizationOption, Object.assign({ activeCustomizationOption: 0, onSelectOption: 0 }));
  const obj = useTraitPickerSelection;
  const traitPickerSelection = obj.useTraitPickerSelection({ customizationOption: activeCustomizationOption, onSelectOption });
  TraitPickerDefault;
  const merged1 = Object.assign(merged);
  ({ optionIds: obj2.optionIds, savedOptionId: obj2.savedOptionId, selectedOptionId: obj2.selectedOptionId, onSelectOption: obj2.onSelectOption } = traitPickerSelection);
  return <tmp3 key={activeCustomizationOption} customizationOption={activeCustomizationOption} />;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPickerControls.tsx");

export default tmp2;
