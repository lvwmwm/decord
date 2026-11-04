// Module ID: 13063
// Function ID: 13064
// Name: useTraitPickerOptions
// Dependencies: [19, 1392, 12986, 558, 576, 504, 1991, 6394, 6397, 6396, 6072, 6048, 1128, 2]

// Module 13063 (useTraitPickerOptions)
import intl2 from "intl" /* 1128 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6394 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import CheckpointStore from "CheckpointStore" /* 12986 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2, closure_3, closure_4, closure_5, earnedCount, set, totalCount;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTraitPickerOptions(arg0) {
  let CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES;
  let c2;
  let currentUser;
  let customizationOption;
  let items2;
  let optionIds;
  let rarityOrder;
  let savedOptionId;
  let stateFromStores1;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let tmp = savedOptionId;
  const tmp2 = stateFromStores1;
  let obj = savedOptionId(stateFromStores1[4]);
  const cResult = obj.c(22);
  ({ customizationOption, savedOptionId } = arg0);
  ({ rarityOrder, optionIds } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [items2];
    class T {
      constructor() {
        return items2.stats;
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp4 = items;
    tmp5 = T;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[5]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [totalCount];
    class T {
      constructor() {
        return items2.stats;
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp11;
    tmp9 = tmp11;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult4 = tmp(tmp2[5]);
  stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp9);
  if (cResult[4] !== rarityOrder) {
    const tmpResult5 = tmp(tmp2[7]);
    const traitRaritySorter = tmpResult5.makeTraitRaritySorter(rarityOrder);
    class T {
      constructor() {
        return items2.stats;
      }
    }
    cResult[5] = traitRaritySorter;
    tmp13 = traitRaritySorter;
  } else {
    tmp13 = cResult[5];
  }
  const tmp15 = tmp(tmp2[7]).CUSTOMIZATION_OPTION_TRAITS[customizationOption];
  const trait = tmp15;
  if (customizationOption === tmp(tmp2[7]).CheckpointCustomizationOption.OUTFIT_COLOR) {
    CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES = tmp(tmp2[8]).CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES;
  } else {
    CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES = tmp(tmp2[8]).CHECKPOINT_TRAIT_OPTION_NAMES[tmp15];
  }
  if (cResult[6] === stateFromStores1) {
    if (cResult[7] === CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES) {
      if (cResult[8] === optionIds) {
        if (cResult[9] === tmp13) {
          if (cResult[10] === savedOptionId) {
            if (cResult[11] === stateFromStores) {
              let tmp16;
              if (cResult[12] === tmp15) {
                earnedCount = cResult[13];
                tmp16 = cResult[14];
                totalCount = cResult[15];
                class T {
                  constructor() {
                    return items2.stats;
                  }
                }
                items2 = tmp17;
              }
              if (cResult[17] === tmp16) {
                if (cResult[18] === earnedCount) {
                  if (cResult[19] === totalCount) {
                    let tmp24;
                    if (cResult[20] === tmp17) {
                      tmp24 = cResult[21];
                    }
                    return tmp24;
                  }
                }
              }
              const obj2 = { traitOptions: null, availableTraitOptions: tmp16, totalCount, earnedCount };
              class T {
                constructor() {
                  return items2.stats;
                }
              }
              cResult[17] = tmp16;
              cResult[18] = earnedCount;
              cResult[19] = totalCount;
              cResult[20] = tmp17;
              cResult[21] = obj2;
              tmp24 = obj2;
            }
          }
        }
      }
    }
  }
  const tmpResult6 = tmp(tmp2[9]);
  set = tmpResult6.getVisibleTraitRarities(tmp15, stateFromStores);
  items2 = [];
  totalCount = 0;
  earnedCount = 0;
  let tmp18 = optionIds;
  function _loop(item10093) {
    let NITRO_LOCKED;
    let thumbnail;
    let closure_0 = item10093;
    const tmp = savedOptionId;
    const tmp4 = savedOptionId(stateFromStores1[9]).CHECKPOINT_TRAIT_OPTION_TO_RARITY[trait][item10093];
    const UNLOCKED = savedOptionId(stateFromStores1[10]).CheckpointTraitOptionStatus.UNLOCKED;
    if (null != tmp4) {
      if (!set.has(tmp4)) {
        if (closure_0 !== item10093) {
          NITRO_LOCKED = tmp(tmp2[10]).CheckpointTraitOptionStatus.LOCKED;
        }
        if (null != tmp4) {
          closure_3 = closure_3 + 1;
        }
        const tmp9 = null != tmp4 && NITRO_LOCKED === tmp(stateFromStores1[10]).CheckpointTraitOptionStatus.UNLOCKED;
        if (tmp9) {
          closure_2 = closure_2 + 1;
        }
        const push = items2.push;
        const obj = {
          trait,
          optionId: item10093,
          asset: thumbnail,
          rarity: tmp4,
          status: NITRO_LOCKED,
          getName() {
                let str = "";
                if (null != CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES[item10093]) {
                  const intl = intl2.intl;
                  str = intl.string(tmp);
                }
                return str;
              }
        };
        const tmp12 = tmp(stateFromStores1[9]).CHECKPOINT_TRAIT_OPTION_ASSETS[trait][item10093];
        thumbnail = undefined;
        if (tmp12 != null) {
          thumbnail = tmp12.thumbnail;
        }
        push(obj);
      }
    }
    NITRO_LOCKED = UNLOCKED;
    const tmp7 = tmp4 !== tmp(stateFromStores1[11]).CheckpointTraitRarity.NITRO || stateFromStores1;
    if (!tmp7) {
      NITRO_LOCKED = tmp(tmp2[10]).CheckpointTraitOptionStatus.NITRO_LOCKED;
    }
  }
  if (optionIds == null) {
    tmp18 = tmp(tmp2[9]).CHECKPOINT_TRAIT_OPTION_IDS[tmp15];
  }
  for (const item10093 of tmp18) {
    let _loopResult = _loop(item10093);
    continue;
  }
  const sorted = items2.sort(tmp13);
  const found = items2.filter((status) => status.status !== savedOptionId(stateFromStores1[10]).CheckpointTraitOptionStatus.LOCKED);
  cResult[6] = stateFromStores1;
  cResult[7] = CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES;
  cResult[8] = optionIds;
  cResult[9] = tmp13;
  cResult[10] = savedOptionId;
  cResult[11] = stateFromStores;
  cResult[12] = tmp15;
  cResult[13] = earnedCount;
  cResult[14] = found;
  cResult[15] = totalCount;
  cResult[16] = items2;
  tmp16 = found;
}) : (function useTraitPickerOptions(customizationOption) {
  customizationOption = customizationOption.customizationOption;
  const savedOptionId = customizationOption.savedOptionId;
  const rarityOrder = customizationOption.rarityOrder;
  const optionIds = customizationOption.optionIds;
  let stateFromStores;
  let obj = customizationOption(savedOptionId[5]);
  let items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.stats);
  const items1 = [optionIds];
  const obj2 = customizationOption(savedOptionId[5]);
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
    let trait;
    let tmp = customizationOption;
    const tmp2 = savedOptionId;
    const tmp3 = customizationOption(savedOptionId[7]).CUSTOMIZATION_OPTION_TRAITS[trait];
    trait = tmp3;
    if (trait === customizationOption(savedOptionId[7]).CheckpointCustomizationOption.OUTFIT_COLOR) {
      let CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES = tmp(tmp2[8]).CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES;
    } else {
      CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES = tmp(tmp2[8]).CHECKPOINT_TRAIT_OPTION_NAMES[tmp3];
    }
    const tmpResult = tmp(tmp2[9]);
    set = tmpResult.getVisibleTraitRarities(tmp3, totalCount);
    const items = [];
    totalCount = 0;
    earnedCount = 0;
    let tmp4 = items;
    function _loop2(item10034) {
      let NITRO_LOCKED;
      let thumbnail;
      trait = item10034;
      const tmp = customizationOption;
      const tmp4 = customizationOption(savedOptionId[9]).CHECKPOINT_TRAIT_OPTION_TO_RARITY[trait][item10034];
      const UNLOCKED = customizationOption(savedOptionId[10]).CheckpointTraitOptionStatus.UNLOCKED;
      if (null != tmp4) {
        if (!set.has(tmp4)) {
          if (CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES !== item10034) {
            NITRO_LOCKED = tmp(tmp2[10]).CheckpointTraitOptionStatus.LOCKED;
          }
          if (null != tmp4) {
            closure_4 = closure_4 + 1;
          }
          const tmp9 = null != tmp4 && NITRO_LOCKED === tmp(savedOptionId[10]).CheckpointTraitOptionStatus.UNLOCKED;
          if (tmp9) {
            closure_5 = closure_5 + 1;
          }
          const push = items.push;
          const obj = {
            trait,
            optionId: item10034,
            asset: thumbnail,
            rarity: tmp4,
            status: NITRO_LOCKED,
            getName() {
                  let str = "";
                  if (null != CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES[item10034]) {
                    const intl = intl2.intl;
                    str = intl.string(tmp);
                  }
                  return str;
                }
          };
          const tmp12 = tmp(savedOptionId[9]).CHECKPOINT_TRAIT_OPTION_ASSETS[trait][item10034];
          thumbnail = undefined;
          if (tmp12 != null) {
            thumbnail = tmp12.thumbnail;
          }
          push(obj);
        }
      }
      NITRO_LOCKED = UNLOCKED;
      const tmp7 = tmp4 !== tmp(savedOptionId[11]).CheckpointTraitRarity.NITRO || c5;
      if (!tmp7) {
        NITRO_LOCKED = tmp(tmp2[10]).CheckpointTraitOptionStatus.NITRO_LOCKED;
      }
    }
    if (items == null) {
      tmp4 = tmp(tmp2[9]).CHECKPOINT_TRAIT_OPTION_IDS[tmp3];
    }
    for (const item10034 of tmp4) {
      let _loop2Result = _loop2(item10034);
      continue;
    }
    const sorted = items.sort(memo);
    let obj = { traitOptions: items, availableTraitOptions: items.filter((status) => status.status !== trait(CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES[10]).CheckpointTraitOptionStatus.LOCKED), totalCount, earnedCount };
    return obj;
  }, items3);
});
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useTraitPickerOptions.tsx");

export const useTraitPickerOptions = tmp2;
