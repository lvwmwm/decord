// Module ID: 12979
// Function ID: 12980
// Name: useCheckpointCustomization
// Dependencies: [19, 1389, 12968, 558, 576, 504, 1988, 6041, 6040, 6017, 2]

// Module 12979 (useCheckpointCustomization)
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6017 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6040 */;
import CheckpointTrait from "CheckpointTrait" /* 6041 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import CheckpointStore from "CheckpointStore" /* 12968 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCheckpointCustomization() {
  let savedSelection;
  let selectedCharacterTraits;
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const tmp = selectedCharacterTraits;
  let tmp2 = savedSelection;
  let obj = selectedCharacterTraits(savedSelection[4]);
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = CheckpointStore;
    const items = [CheckpointStore];
    const fn = function o() {
      return { selectedCharacterTraits: CheckpointStore.selectedCharacterTraits, savedSelection: CheckpointStore.character, stats: CheckpointStore.stats };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[5]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  selectedCharacterTraits = stateFromStoresObject.selectedCharacterTraits;
  savedSelection = stateFromStoresObject.savedSelection;
  const stats = stateFromStoresObject.stats;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores];
    const fn2 = function u() {
      const obj = selectedCharacterTraits(savedSelection[6]);
      return obj.isPremium(stateFromStores.getCurrentUser());
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = tmp(tmp2[5]);
  stateFromStores = tmpResult2.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === savedSelection) {
      if (cResult[6] === selectedCharacterTraits) {
        let tmp12;
        if (cResult[7] === stats) {
          tmp12 = cResult[8];
        }
        if (cResult[9] === tmp12) {
          let tmp14;
          if (cResult[10] === selectedCharacterTraits) {
            tmp14 = cResult[11];
          }
          return tmp14;
        }
        const obj2 = { selectedCharacterTraits, blockedTraits: tmp12 };
        cResult[9] = tmp12;
        cResult[10] = selectedCharacterTraits;
        cResult[11] = obj2;
        tmp14 = obj2;
      }
    }
  }
  const values = Object.values(tmp(tmp2[7]).CheckpointTrait);
  const found = values.filter((item) => {
    if (null != selectedCharacterTraits[item]) {
      let tmp2;
      if (savedSelection != null) {
        tmp2 = savedSelection[item];
      }
      if (tmp2 !== selectedCharacterTraits[item]) {
        const obj = CheckpointCharacterTraits;
        const traitOptionRarity = obj.getTraitOptionRarity(item, tmp);
        let tmp6 = null != traitOptionRarity;
        if (tmp6) {
          let tmp8;
          if (traitOptionRarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
            tmp8 = !stateFromStores;
          } else {
            const tmp3Result = CheckpointCharacterTraits;
            const visibleTraitRarities = tmp3Result.getVisibleTraitRarities(item, stats);
            tmp8 = !visibleTraitRarities.has(traitOptionRarity);
          }
          tmp6 = tmp8;
        }
        return tmp6;
      }
    }
    return false;
  });
  cResult[4] = stateFromStores;
  cResult[5] = savedSelection;
  cResult[6] = selectedCharacterTraits;
  cResult[7] = stats;
  cResult[8] = found;
  tmp12 = found;
}) : (function useCheckpointCustomization() {
  let savedSelection;
  let selectedCharacterTraits;
  let stateFromStores;
  let obj = selectedCharacterTraits(savedSelection[5]);
  const items = [CheckpointStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ selectedCharacterTraits: CheckpointStore.selectedCharacterTraits, savedSelection: CheckpointStore.character, stats: CheckpointStore.stats }));
  selectedCharacterTraits = stateFromStoresObject.selectedCharacterTraits;
  savedSelection = stateFromStoresObject.savedSelection;
  const stats = stateFromStoresObject.stats;
  const items1 = [stateFromStores];
  const obj2 = selectedCharacterTraits(savedSelection[5]);
  stateFromStores = obj2.useStateFromStores(items1, () => {
    const obj = selectedCharacterTraits(savedSelection[6]);
    return obj.isPremium(stateFromStores.getCurrentUser());
  });
  const items2 = [stateFromStores, savedSelection, selectedCharacterTraits, stats];
  const obj3 = {
    selectedCharacterTraits,
    blockedTraits: stats.useMemo(() => {
      const values = Object.values(CheckpointTrait.CheckpointTrait);
      return values.filter((item) => {
        if (null != closure_1_0[item]) {
          let tmp2;
          if (closure_1_1 != null) {
            tmp2 = closure_1_1[item];
          }
          if (tmp2 !== closure_1_0[item]) {
            const obj = selectedCharacterTraits(savedSelection[8]);
            const traitOptionRarity = obj.getTraitOptionRarity(item, tmp);
            let tmp6 = null != traitOptionRarity;
            if (tmp6) {
              let tmp8;
              if (traitOptionRarity === selectedCharacterTraits(savedSelection[9]).CheckpointTraitRarity.NITRO) {
                tmp8 = !stateFromStores;
              } else {
                const tmp3Result = selectedCharacterTraits(savedSelection[8]);
                const visibleTraitRarities = tmp3Result.getVisibleTraitRarities(item, stats);
                tmp8 = !visibleTraitRarities.has(traitOptionRarity);
              }
              tmp6 = tmp8;
            }
            return tmp6;
          }
        }
        return false;
      });
    }, items2)
  };
  return obj3;
});
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointCustomization.tsx");

export default tmp2;
