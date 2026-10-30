// Module ID: 13647
// Function ID: 13648
// Name: useTraitPickerOptions
// Dependencies: [19, 1384, 13386, 504, 1984, 6429, 6431, 6106, 6108, 6062, 1114, 2]
// Exports: useTraitPickerOptions

// Module 13647 (useTraitPickerOptions)
import intl2 from "intl" /* 1114 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6429 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import CheckpointStore from "CheckpointStore" /* 13386 */;
import size from "module_2" /* 2 */;

let closure_4, closure_5, earnedCount, set, totalCount;

const result = size.fileFinishedImporting("modules/checkpoint/hooks/useTraitPickerOptions.tsx");

export function useTraitPickerOptions(customizationOption) {
  customizationOption = customizationOption.customizationOption;
  const savedOptionId = customizationOption.savedOptionId;
  const rarityOrder = customizationOption.rarityOrder;
  const optionIds = customizationOption.optionIds;
  let stateFromStores;
  let obj = customizationOption(savedOptionId[3]);
  let items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.stats);
  let obj2 = customizationOption(savedOptionId[3]);
  const items1 = [optionIds];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const obj = customizationOption(savedOptionId[4]);
    return obj.isPremium(optionIds.getCurrentUser());
  });
  const items2 = [rarityOrder];
  const memo = rarityOrder.useMemo(() => {
    const obj = CheckpointCustomizationUtils;
    return obj.makeTraitRaritySorter(rarityOrder);
  }, items2);
  const items3 = [customizationOption, stateFromStores1, optionIds, memo, savedOptionId, stateFromStores];
  return rarityOrder.useMemo(() => {
    let c4;
    let c5;
    let trait;
    let tmp = customizationOption;
    const tmp2 = savedOptionId;
    const tmp3 = customizationOption(savedOptionId[5]).CUSTOMIZATION_OPTION_TO_TRAIT[trait];
    trait = tmp3;
    if (trait === customizationOption(savedOptionId[5]).CheckpointCustomizationOption.OUTFIT_COLOR) {
      let CHECKPOINT_OUTFIT_TO_COLOR_NAME = tmp(tmp2[6]).CHECKPOINT_OUTFIT_TO_COLOR_NAME;
    } else {
      CHECKPOINT_OUTFIT_TO_COLOR_NAME = tmp(tmp2[6]).CHECKPOINT_TRAIT_TO_OPTION_NAMES[tmp3];
    }
    const tmpResult = tmp(tmp2[7]);
    set = tmpResult.getVisibleTraitRarities(tmp3, totalCount);
    const items = [];
    totalCount = 0;
    earnedCount = 0;
    let tmp4 = items;
    function _loop(item10034) {
      let NITRO_LOCKED;
      let thumbnail;
      trait = item10034;
      const tmp = customizationOption;
      const obj = customizationOption(savedOptionId[7]);
      const traitOptionRarity = obj.getTraitOptionRarity(trait, item10034);
      const UNLOCKED = customizationOption(savedOptionId[8]).CheckpointTraitOptionStatus.UNLOCKED;
      if (null != traitOptionRarity) {
        if (!set.has(traitOptionRarity)) {
          if (CHECKPOINT_OUTFIT_TO_COLOR_NAME !== item10034) {
            NITRO_LOCKED = tmp(tmp2[8]).CheckpointTraitOptionStatus.LOCKED;
          }
          if (null != traitOptionRarity) {
            closure_4 = closure_4 + 1;
          }
          const tmp9 = null != traitOptionRarity && NITRO_LOCKED === tmp(savedOptionId[8]).CheckpointTraitOptionStatus.UNLOCKED;
          if (tmp9) {
            closure_5 = closure_5 + 1;
          }
          const push = items.push;
          const obj2 = {
            trait,
            optionId: item10034,
            asset: thumbnail,
            rarity: traitOptionRarity,
            status: NITRO_LOCKED,
            getName() {
                  let str = "";
                  if (null != CHECKPOINT_OUTFIT_TO_COLOR_NAME[item10034]) {
                    const intl = intl2.intl;
                    str = intl.string(tmp);
                  }
                  return str;
                }
          };
          const tmp12 = tmp(savedOptionId[7]).CHECKPOINT_TRAIT_TO_OPTION_ASSETS[trait][item10034];
          thumbnail = undefined;
          if (tmp12 != null) {
            thumbnail = tmp12.thumbnail;
          }
          push(obj2);
        }
      }
      NITRO_LOCKED = UNLOCKED;
      const tmp7 = traitOptionRarity !== tmp(savedOptionId[9]).CheckpointTraitRarity.NITRO || c5;
      if (!tmp7) {
        NITRO_LOCKED = tmp(tmp2[8]).CheckpointTraitOptionStatus.NITRO_LOCKED;
      }
    }
    if (items == null) {
      tmp4 = tmp(tmp2[7]).CHECKPOINT_TRAIT_TO_OPTION_IDS[tmp3];
    }
    for (const item10034 of tmp4) {
      let _loopResult = _loop(item10034);
      continue;
    }
    const sorted = items.sort(memo);
    let obj = { traitOptions: items, availableTraitOptions: items.filter((status) => status.status !== trait(CHECKPOINT_OUTFIT_TO_COLOR_NAME[8]).CheckpointTraitOptionStatus.LOCKED), totalCount, earnedCount };
    return obj;
  }, items3);
}
