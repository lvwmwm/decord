// Module ID: 14536
// Function ID: 14537
// Name: useTraitPickerSelection
// Dependencies: [19, 1388, 14253, 6744, 6421, 6484, 504, 14537, 2110, 14251, 2]
// Exports: useTraitPickerSelection

// Module 14536 (useTraitPickerSelection)
import PremiumTypeUtils from "PremiumTypeUtils" /* 2110 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6421 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6744 */;
import Tracking from "Tracking" /* 14251 */;
import useTraitPickerOptions from "useTraitPickerOptions" /* 14537 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1388 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;
import size from "module_2" /* 2 */;

let react = react_mod;
let result = size.fileFinishedImporting("modules/checkpoint/hooks/useTraitPickerSelection.tsx");

export function useTraitPickerSelection(customizationOption) {
  let closure_2;
  let optionIds;
  customizationOption = customizationOption.customizationOption;
  const onSelectOption = customizationOption.onSelectOption;
  let savedOptionId;
  let tmp = customizationOption;
  let tmp2 = onSelectOption;
  react = customizationOption(onSelectOption[3]).CUSTOMIZATION_OPTION_TO_TRAIT[customizationOption];
  let obj = customizationOption(onSelectOption[6]);
  const items = [savedOptionId];
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
  const selectedOptionId = stateFromStoresObject.selectedOptionId;
  savedOptionId = stateFromStoresObject.savedOptionId;
  const items1 = [onSelectOption, savedOptionId, selectedOptionId];
  const onSelectOption1 = react.useCallback((item, item10034) => {
    let obj3;
    let obj4;
    if (item10034 !== selectedOptionId) {
      const obj = CheckpointCharacterTraits;
      const traitOptionRarity = obj.getTraitOptionRarity(item, item10034);
      const obj2 = { rarity: traitOptionRarity, isSavedOption: savedOptionId === item10034, visibleRarities: obj3.getVisibleTraitRarities(item, CheckpointStore.stats), hasNitroSubscription: obj4.isPremium(UserStore.getCurrentUser()) };
      const getTraitOptionStatus = useTraitPickerOptions.getTraitOptionStatus;
      useTraitPickerOptions;
      obj3 = CheckpointCharacterTraits;
      obj4 = PremiumTypeUtils;
      const traitOptionStatus = getTraitOptionStatus(obj2);
      const obj5 = Tracking;
      const result = obj5.trackCheckpoint2026CharacterChoiceSelected(item, item10034, traitOptionStatus, traitOptionRarity);
      onSelectOption(item, item10034);
    }
  }, items1);
  if (customizationOption(onSelectOption[3]).CheckpointCustomizationOption.OUTFIT === customizationOption) {
    optionIds = tmp(tmp2[4]).OUTFIT_DEFAULT_OPTION_IDS;
  } else if (tmp(tmp2[3]).CheckpointCustomizationOption.OUTFIT_COLOR === customizationOption) {
    let NONE = selectedOptionId;
    const getOutfitColorOptionIds = tmp(tmp2[4]).getOutfitColorOptionIds;
    tmp(tmp2[4]);
    if (selectedOptionId == null) {
      NONE = tmp(tmp2[5]).CheckpointCharacterOutfit.NONE;
    }
    optionIds = getOutfitColorOptionIds(NONE);
  }
  return { optionIds, selectedOptionId, savedOptionId, onSelectOption: onSelectOption1 };
}
