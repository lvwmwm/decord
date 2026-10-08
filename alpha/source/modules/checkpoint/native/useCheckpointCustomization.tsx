// Module ID: 15814
// Function ID: 15815
// Name: useCheckpointCustomization
// Dependencies: [19, 1389, 15802, 558, 576, 504, 1988, 5457, 15812, 5434, 5459, 5561, 2]

// Module 15814 (useCheckpointCustomization)
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 5434 */;
import CheckpointTrait from "CheckpointTrait" /* 5457 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 15812 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import CheckpointStore from "CheckpointStore" /* 15802 */;
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
  const cResult = obj.c(20);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function s() {
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
    class C {
      constructor() {
        const obj = selectedCharacterTraits(savedSelection[6]);
        return obj.isPremium(currentUser.getCurrentUser());
      }
    }
    cResult[2] = items1;
    cResult[3] = C;
    tmp9 = C;
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
      const tmp14 = selectedCharacterTraits[tmp(undefined, tmp2[7]).CheckpointTrait.BASE];
      class C {
        constructor() {
          const obj = selectedCharacterTraits(savedSelection[6]);
          return obj.isPremium(currentUser.getCurrentUser());
        }
      }
      let num5 = selectedCharacterTraits[tmp(undefined, tmp2[7]).CheckpointTrait.SHOES];
      if (num5 == null) {
        num5 = 0;
      }
      let num6 = selectedCharacterTraits[tmp(undefined, tmp2[7]).CheckpointTrait.OUTFIT];
      if (num6 == null) {
        num6 = 0;
      }
      let CHILL = selectedCharacterTraits[tmp(undefined, tmp2[7]).CheckpointTrait.FACE];
      if (CHILL == null) {
        CHILL = tmp(tmp2[11]).CheckpointCharacterFace.CHILL;
      }
      let num7 = selectedCharacterTraits[tmp(undefined, tmp2[7]).CheckpointTrait.HAT];
      if (num7 == null) {
        num7 = 0;
      }
      let num8 = selectedCharacterTraits[tmp(undefined, tmp2[7]).CheckpointTrait.WEARABLE];
      if (num8 == null) {
        num8 = 0;
      }
      let num9 = selectedCharacterTraits[tmp(undefined, tmp2[7]).CheckpointTrait.AURA];
      if (num9 == null) {
        num9 = 0;
      }
      if (cResult[8] === num8) {
        if (cResult[9] === num9) {
          if (cResult[10] === tmp14) {
            if (cResult[11] === num5) {
              if (cResult[12] === num6) {
                if (cResult[13] === CHILL) {
                  let tmp16;
                  if (cResult[14] === num7) {
                    tmp16 = cResult[15];
                  }
                  if (cResult[16] === tmp12) {
                    if (cResult[17] === tmp16) {
                      let tmp17;
                      if (cResult[18] === selectedCharacterTraits) {
                        tmp17 = cResult[19];
                      }
                      return tmp17;
                    }
                  }
                  const obj2 = { selectedCharacterTraits: null, blockedTraits: tmp12, character: tmp16 };
                  class C {
                    constructor() {
                      const obj = selectedCharacterTraits(savedSelection[6]);
                      return obj.isPremium(currentUser.getCurrentUser());
                    }
                  }
                  cResult[16] = tmp12;
                  cResult[17] = tmp16;
                  cResult[18] = selectedCharacterTraits;
                  cResult[19] = obj2;
                  tmp17 = obj2;
                }
              }
            }
          }
        }
      }
      const obj3 = { base: tmp14, shoes: num5, outfit: num6, face: CHILL, hat: num7, wearable: num8, aura: num9 };
      cResult[8] = num8;
      cResult[9] = num9;
      cResult[10] = tmp14;
      cResult[11] = num5;
      cResult[12] = num6;
      cResult[13] = CHILL;
      cResult[14] = num7;
      cResult[15] = obj3;
      tmp16 = obj3;
    }
  }
  if (stateFromStores) {
    items2 = [];
  } else {
    const _Object = Object;
    const values = Object.values(tmp(tmp2[7]).CheckpointTrait);
    class C {
      constructor() {
        const obj = selectedCharacterTraits(savedSelection[6]);
        return obj.isPremium(currentUser.getCurrentUser());
      }
    }
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
  const items3 = [selectedCharacterTraits];
  const memo = stateFromStores.useMemo(() => {
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
  }, items2);
  const obj3 = {
    selectedCharacterTraits,
    blockedTraits: memo,
    character: stateFromStores.useMemo(() => {
      let CHILL;
      let num;
      let num2;
      let num3;
      let num4;
      let num5;
      let ICY = selectedCharacterTraits[CheckpointTrait.CheckpointTrait.BASE];
      if (ICY == null) {
        ICY = tmp2(5459).CheckpointCharacterBase.ICY;
      }
      const obj = { base: ICY, shoes: num, outfit: num2, face: CHILL, hat: num3, wearable: num4, aura: num5 };
      num = tmp[tmp2(undefined, 5457).CheckpointTrait.SHOES];
      if (num == null) {
        num = 0;
      }
      num2 = tmp[tmp2(undefined, 5457).CheckpointTrait.OUTFIT];
      if (num2 == null) {
        num2 = 0;
      }
      CHILL = tmp[tmp2(undefined, 5457).CheckpointTrait.FACE];
      if (CHILL == null) {
        CHILL = tmp2(5561).CheckpointCharacterFace.CHILL;
      }
      num3 = tmp[tmp2(undefined, 5457).CheckpointTrait.HAT];
      if (num3 == null) {
        num3 = 0;
      }
      num4 = tmp[tmp2(undefined, 5457).CheckpointTrait.WEARABLE];
      if (num4 == null) {
        num4 = 0;
      }
      num5 = tmp[tmp2(undefined, 5457).CheckpointTrait.AURA];
      if (num5 == null) {
        num5 = 0;
      }
      return obj;
    }, items3)
  };
  return obj3;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointCustomization.tsx");

export default tmp2;
