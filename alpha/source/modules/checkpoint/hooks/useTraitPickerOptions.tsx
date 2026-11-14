// Module ID: 14537
// Function ID: 14538
// Name: useTraitPickerOptions
// Dependencies: [19, 1388, 14253, 6423, 6378, 504, 2110, 6744, 6746, 6421, 1113, 2]
// Exports: getTraitOptionStatus, useTraitPickerOptions

// Module 14537 (useTraitPickerOptions)
import intl2 from "intl" /* 1113 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6378 */;
import CheckpointCharacterAssets from "CheckpointCharacterAssets" /* 6423 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6744 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1388 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;
import size from "module_2" /* 2 */;

let closure_4, closure_5, earnedCount, totalCount;

const result = size.fileFinishedImporting("modules/checkpoint/hooks/useTraitPickerOptions.tsx");

export function getTraitOptionStatus(isSavedOption) {
  let LOCKED;
  let rarity;
  let visibleRarities;
  ({ rarity, visibleRarities } = isSavedOption);
  if (isSavedOption.isSavedOption) {
    LOCKED = CheckpointCharacterAssets.CheckpointTraitOptionStatus.UNLOCKED;
  } else {
    if (null != rarity) {
      if (!visibleRarities.has(rarity)) {
        LOCKED = CheckpointCharacterAssets.CheckpointTraitOptionStatus.LOCKED;
      }
    }
    if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
      let UNLOCKED;
      if (!tmp) {
        UNLOCKED = tmp5(6423).CheckpointTraitOptionStatus.NITRO_LOCKED;
      }
      LOCKED = UNLOCKED;
    }
    UNLOCKED = tmp5(6423).CheckpointTraitOptionStatus.UNLOCKED;
  }
  return LOCKED;
}
export function useTraitPickerOptions(customizationOption) {
  customizationOption = customizationOption.customizationOption;
  const savedOptionId = customizationOption.savedOptionId;
  const rarityOrder = customizationOption.rarityOrder;
  const optionIds = customizationOption.optionIds;
  let stateFromStores;
  let obj = customizationOption(savedOptionId[5]);
  let items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.stats);
  let obj2 = customizationOption(savedOptionId[5]);
  const items1 = [optionIds];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const obj = customizationOption(savedOptionId[6]);
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
    let closure_2;
    let trait;
    let tmp = customizationOption;
    const tmp2 = savedOptionId;
    const tmp3 = customizationOption(savedOptionId[7]).CUSTOMIZATION_OPTION_TO_TRAIT[trait];
    trait = tmp3;
    if (trait === customizationOption(savedOptionId[7]).CheckpointCustomizationOption.OUTFIT_COLOR) {
      let CHECKPOINT_OUTFIT_TO_COLOR_NAME = tmp(tmp2[8]).CHECKPOINT_OUTFIT_TO_COLOR_NAME;
    } else {
      CHECKPOINT_OUTFIT_TO_COLOR_NAME = tmp(tmp2[8]).CHECKPOINT_TRAIT_TO_OPTION_NAMES[tmp3];
    }
    const tmpResult = tmp(tmp2[9]);
    const visibleTraitRarities = tmpResult.getVisibleTraitRarities(tmp3, totalCount);
    const items = [];
    totalCount = 0;
    earnedCount = 0;
    let tmp4 = items;
    function _loop(item10034) {
      let LOCKED;
      let thumbnail;
      trait = item10034;
      const tmp = customizationOption;
      const obj = customizationOption(savedOptionId[9]);
      const traitOptionRarity = obj.getTraitOptionRarity(trait, item10034);
      const obj2 = closure_2;
      if (CHECKPOINT_OUTFIT_TO_COLOR_NAME === item10034) {
        LOCKED = tmp(tmp2[3]).CheckpointTraitOptionStatus.UNLOCKED;
      } else {
        if (null != traitOptionRarity) {
          if (!obj2.has(traitOptionRarity)) {
            LOCKED = tmp(tmp2[3]).CheckpointTraitOptionStatus.LOCKED;
          }
        }
        if (traitOptionRarity === tmp(savedOptionId[4]).CheckpointTraitRarity.NITRO) {
          let UNLOCKED;
          if (!c5) {
            UNLOCKED = tmp(tmp2[3]).CheckpointTraitOptionStatus.NITRO_LOCKED;
          }
          LOCKED = UNLOCKED;
        }
        UNLOCKED = tmp(tmp2[3]).CheckpointTraitOptionStatus.UNLOCKED;
      }
      let tmp7 = LOCKED === tmp(tmp2[3]).CheckpointTraitOptionStatus.UNLOCKED;
      if (tmp7) {
        tmp7 = traitOptionRarity !== tmp(tmp2[4]).CheckpointTraitRarity.NITRO || c5;
        traitOptionRarity !== tmp(savedOptionId[4]).CheckpointTraitRarity.NITRO || c5;
      }
      if (null != traitOptionRarity) {
        closure_4 = closure_4 + 1;
      }
      const tmp10 = null != traitOptionRarity && tmp7;
      if (tmp10) {
        closure_5 = closure_5 + 1;
      }
      const push = items.push;
      const obj3 = {
        trait,
        optionId: item10034,
        asset: thumbnail,
        rarity: traitOptionRarity,
        status: LOCKED,
        getName() {
          let str = "";
          if (null != CHECKPOINT_OUTFIT_TO_COLOR_NAME[item10034]) {
            const intl = intl2.intl;
            str = intl.string(tmp);
          }
          return str;
        }
      };
      const tmp13 = tmp(savedOptionId[9]).CHECKPOINT_TRAIT_TO_OPTION_ASSETS[trait][item10034];
      thumbnail = undefined;
      if (tmp13 != null) {
        thumbnail = tmp13.thumbnail;
      }
      push(obj3);
    }
    if (items == null) {
      tmp4 = tmp(tmp2[9]).CHECKPOINT_TRAIT_TO_OPTION_IDS[tmp3];
    }
    for (const item10034 of tmp4) {
      let _loopResult = _loop(item10034);
      continue;
    }
    const sorted = items.sort(memo);
    let obj = { traitOptions: items, availableTraitOptions: items.filter((status) => status.status !== trait(CHECKPOINT_OUTFIT_TO_COLOR_NAME[3]).CheckpointTraitOptionStatus.LOCKED), totalCount, earnedCount };
    return obj;
  }, items3);
}
