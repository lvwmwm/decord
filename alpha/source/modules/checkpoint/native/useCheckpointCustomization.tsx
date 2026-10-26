// Module ID: 12964
// Function ID: 12965
// Name: useCheckpointCustomization
// Dependencies: [19, 1392, 12953, 558, 576, 504, 1991, 6039, 6364, 6016, 2]

// Module 12964 (useCheckpointCustomization)
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6016 */;
import CheckpointTrait from "CheckpointTrait" /* 6039 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6364 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import CheckpointStore from "CheckpointStore" /* 12953 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCheckpointCustomization() {
  let currentUser;
  let items2;
  let savedSelection;
  let selectedCharacterTraits;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const tmp = selectedCharacterTraits;
  let tmp2 = savedSelection;
  let obj = selectedCharacterTraits(savedSelection[4]);
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function o() {
      return { selectedCharacterTraits: CheckpointStore.selectedCharacterTraits, savedSelection: CheckpointStore.character };
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
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function u() {
      const obj = selectedCharacterTraits(savedSelection[6]);
      return obj.isPremium(currentUser.getCurrentUser());
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
  const stateFromStores = tmpResult2.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === savedSelection) {
      let tmp12;
      if (cResult[6] === selectedCharacterTraits) {
        tmp12 = cResult[7];
      }
      if (cResult[8] === tmp12) {
        let tmp13;
        if (cResult[9] === selectedCharacterTraits) {
          tmp13 = cResult[10];
        }
        return tmp13;
      }
      const obj2 = { selectedCharacterTraits, blockedTraits: tmp12 };
      cResult[8] = tmp12;
      cResult[9] = selectedCharacterTraits;
      cResult[10] = obj2;
      tmp13 = obj2;
    }
  }
  if (stateFromStores) {
    items2 = [];
  } else {
    const _Object = Object;
    const values = Object.values(tmp(tmp2[7]).CheckpointTrait);
    items2 = values.filter((item) => {
      let tmp2 = null != tmp;
      if (tmp2) {
        let tmp3;
        if (savedSelection != null) {
          tmp3 = savedSelection[item];
        }
        tmp2 = tmp3 !== tmp;
      }
      if (tmp2) {
        const obj = CheckpointCharacterTraits;
        const traitOptionRarity = obj.getTraitOptionRarity(item, tmp);
        tmp2 = traitOptionRarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO;
      }
      return tmp2;
    });
  }
  cResult[4] = stateFromStores;
  cResult[5] = savedSelection;
  cResult[6] = selectedCharacterTraits;
  cResult[7] = items2;
  tmp12 = items2;
}) : (function useCheckpointCustomization() {
  let currentUser;
  let savedSelection;
  let selectedCharacterTraits;
  let obj = selectedCharacterTraits(savedSelection[5]);
  let items = [CheckpointStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ selectedCharacterTraits: CheckpointStore.selectedCharacterTraits, savedSelection: CheckpointStore.character }));
  selectedCharacterTraits = stateFromStoresObject.selectedCharacterTraits;
  savedSelection = stateFromStoresObject.savedSelection;
  const items1 = [UserStore];
  const obj2 = selectedCharacterTraits(savedSelection[5]);
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    const obj = selectedCharacterTraits(savedSelection[6]);
    return obj.isPremium(currentUser.getCurrentUser());
  });
  const items2 = [stateFromStores, savedSelection, selectedCharacterTraits];
  const obj3 = {
    selectedCharacterTraits,
    blockedTraits: stateFromStores.useMemo(() => {
      let items;
      const tmp = stateFromStores;
      if (tmp) {
        items = [];
      } else {
        let tmp2 = globalThis;
        const _Object = Object;
        let tmp3 = require;
        const values = Object.values(CheckpointTrait.CheckpointTrait);
        items = values.filter((item) => {
          let tmp2 = null != tmp;
          if (tmp2) {
            let tmp3;
            if (closure_1_1 != null) {
              tmp3 = closure_1_1[item];
            }
            tmp2 = tmp3 !== tmp;
          }
          if (tmp2) {
            const obj = selectedCharacterTraits(savedSelection[8]);
            const traitOptionRarity = obj.getTraitOptionRarity(item, tmp);
            tmp2 = traitOptionRarity === selectedCharacterTraits(savedSelection[9]).CheckpointTraitRarity.NITRO;
          }
          return tmp2;
        });
      }
      return items;
    }, items2)
  };
  return obj3;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointCustomization.tsx");

export default tmp2;
