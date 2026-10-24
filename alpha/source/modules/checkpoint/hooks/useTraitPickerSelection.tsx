// Module ID: 13022
// Function ID: 13023
// Name: useTraitPickerSelection
// Dependencies: [19, 12949, 6362, 6364, 6101, 558, 576, 504, 2]

// Module 13022 (useTraitPickerSelection)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6362 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6364 */;
import react_mod from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 12949 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTraitPickerSelection(customizationOption) {
  let first;
  let onSelectOption;
  let selectedOptionId;
  let tmp = customizationOption;
  let tmp2 = onSelectOption;
  let obj = customizationOption(onSelectOption[6]);
  const cResult = obj.c(15);
  customizationOption = customizationOption.customizationOption;
  onSelectOption = customizationOption.onSelectOption;
  const tmp4 = customizationOption(onSelectOption[2]).CUSTOMIZATION_OPTION_TRAITS[customizationOption];
  let closure_2 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [selectedOptionId];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === customizationOption) {
    let tmp7;
    if (cResult[2] === tmp4) {
      tmp7 = cResult[3];
    }
    const tmpResult = tmp(tmp2[7]);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7);
    selectedOptionId = stateFromStoresObject.selectedOptionId;
    const savedOptionId = stateFromStoresObject.savedOptionId;
    if (cResult[4] === onSelectOption) {
      let tmp9;
      let OUTFIT_DEFAULT_OPTION_IDS;
      if (cResult[5] === selectedOptionId) {
        tmp9 = cResult[6];
      }
      if (cResult[7] === customizationOption) {
        let tmp10;
        if (cResult[8] === selectedOptionId) {
          tmp10 = cResult[9];
        }
        if (cResult[10] === tmp9) {
          if (cResult[11] === savedOptionId) {
            if (cResult[12] === selectedOptionId) {
              let tmp13;
              if (cResult[13] === tmp10) {
                tmp13 = cResult[14];
              }
              return tmp13;
            }
          }
        }
        const obj2 = { optionIds: tmp10, selectedOptionId, savedOptionId, onSelectOption: tmp9 };
        cResult[10] = tmp9;
        cResult[11] = savedOptionId;
        cResult[12] = selectedOptionId;
        cResult[13] = tmp10;
        cResult[14] = obj2;
        tmp13 = obj2;
      }
      if (tmp(tmp2[2]).CheckpointCustomizationOption.OUTFIT === customizationOption) {
        OUTFIT_DEFAULT_OPTION_IDS = tmp(tmp2[3]).OUTFIT_DEFAULT_OPTION_IDS;
      } else if (tmp(tmp2[2]).CheckpointCustomizationOption.OUTFIT_COLOR === customizationOption) {
        let NONE = selectedOptionId;
        const getOutfitColorOptionIds = tmp(tmp2[3]).getOutfitColorOptionIds;
        tmp(tmp2[3]);
        if (selectedOptionId == null) {
          NONE = tmp(tmp2[4]).CheckpointCharacterOutfit.NONE;
        }
        OUTFIT_DEFAULT_OPTION_IDS = getOutfitColorOptionIds(NONE);
      }
      cResult[7] = customizationOption;
      cResult[8] = selectedOptionId;
      cResult[9] = OUTFIT_DEFAULT_OPTION_IDS;
      tmp10 = OUTFIT_DEFAULT_OPTION_IDS;
    }
    const fn2 = function u(arg0, arg1) {
      if (arg1 !== selectedOptionId) {
        onSelectOption(arg0, arg1);
      }
    };
    cResult[4] = onSelectOption;
    cResult[5] = selectedOptionId;
    cResult[6] = fn2;
    tmp9 = fn2;
  }
  const fn = function c() {
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
  };
  cResult[1] = customizationOption;
  cResult[2] = tmp4;
  cResult[3] = fn;
  tmp7 = fn;
}) : (function useTraitPickerSelection(customizationOption) {
  let closure_2;
  let optionIds;
  customizationOption = customizationOption.customizationOption;
  const onSelectOption = customizationOption.onSelectOption;
  let selectedOptionId;
  let tmp = customizationOption;
  let tmp2 = onSelectOption;
  react = customizationOption(onSelectOption[2]).CUSTOMIZATION_OPTION_TRAITS[customizationOption];
  let obj = customizationOption(onSelectOption[7]);
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
});
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useTraitPickerSelection.tsx");

export const useTraitPickerSelection = tmp2;
