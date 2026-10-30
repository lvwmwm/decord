// Module ID: 13643
// Function ID: 13644
// Name: useTraitPickerSelection
// Dependencies: [19, 13386, 6429, 6106, 6169, 504, 2]
// Exports: useTraitPickerSelection

// Module 13643 (useTraitPickerSelection)
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6106 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6429 */;
import react_mod from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13386 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useTraitPickerSelection.tsx");

export function useTraitPickerSelection(customizationOption) {
  let closure_2;
  let optionIds;
  customizationOption = customizationOption.customizationOption;
  const onSelectOption = customizationOption.onSelectOption;
  let selectedOptionId;
  let tmp = customizationOption;
  let tmp2 = onSelectOption;
  react = customizationOption(onSelectOption[2]).CUSTOMIZATION_OPTION_TO_TRAIT[customizationOption];
  let obj = customizationOption(onSelectOption[5]);
  const items = [selectedOptionId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let tmp11;
    let tmp7 = tmp4;
    const tmp = customizationOption;
    const tmp2 = CheckpointStore;
    const tmp3 = closure_2;
    if (customizationOption === CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT) {
      let outfitDefaultOptionId;
      if (null != CheckpointStore.selectedCharacterTraits[closure_2]) {
        const tmp5Result = CheckpointCharacterTraits;
        outfitDefaultOptionId = tmp5Result.getOutfitDefaultOptionId(tmp4);
      }
      tmp7 = outfitDefaultOptionId;
    }
    const character = tmp2.character;
    let tmp10;
    const obj = { selectedOptionId: tmp7, savedOptionId: tmp11 };
    if (character != null) {
      tmp10 = character[tmp3];
    }
    tmp11 = tmp10;
    if (tmp === CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT) {
      let outfitDefaultOptionId1;
      if (null != tmp10) {
        const tmp5Result2 = CheckpointCharacterTraits;
        outfitDefaultOptionId1 = tmp5Result2.getOutfitDefaultOptionId(tmp10);
      }
      tmp11 = outfitDefaultOptionId1;
    }
    return obj;
  });
  selectedOptionId = stateFromStoresObject.selectedOptionId;
  const items1 = [onSelectOption, selectedOptionId];
  const savedOptionId = stateFromStoresObject.savedOptionId;
  const onSelectOption1 = react.useCallback((arg0, arg1) => {
    if (arg1 !== selectedOptionId) {
      onSelectOption(arg0, arg1);
    }
  }, items1);
  if (customizationOption(onSelectOption[2]).CheckpointCustomizationOption.OUTFIT === customizationOption) {
    optionIds = tmp(tmp2[3]).OUTFIT_DEFAULT_OPTION_IDS;
  } else if (tmp(tmp2[2]).CheckpointCustomizationOption.OUTFIT_COLOR === customizationOption) {
    let NONE = selectedOptionId;
    const getOutfitColorOptionIds = tmp(tmp2[3]).getOutfitColorOptionIds;
    tmp(tmp2[3]);
    if (selectedOptionId == null) {
      NONE = tmp(tmp2[4]).CheckpointCharacterOutfit.NONE;
    }
    optionIds = getOutfitColorOptionIds(NONE);
  }
  return { optionIds, selectedOptionId, savedOptionId, onSelectOption: onSelectOption1 };
}
