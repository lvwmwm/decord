// Module ID: 13444
// Function ID: 13445
// Name: useCheckpointCustomization
// Dependencies: [19, 1383, 13421, 504, 1983, 6112, 6111, 6067, 2]
// Exports: default

// Module 13444 (useCheckpointCustomization)
import CheckpointTrait from "CheckpointTrait" /* 6112 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import CheckpointStore from "CheckpointStore" /* 13421 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointCustomization.tsx");

export default function useCheckpointCustomization() {
  let savedSelection;
  let selectedCharacterTraits;
  let stateFromStores;
  let obj = selectedCharacterTraits(savedSelection[3]);
  const items = [CheckpointStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ selectedCharacterTraits: CheckpointStore.selectedCharacterTraits, savedSelection: CheckpointStore.character, stats: CheckpointStore.stats }));
  selectedCharacterTraits = stateFromStoresObject.selectedCharacterTraits;
  savedSelection = stateFromStoresObject.savedSelection;
  const stats = stateFromStoresObject.stats;
  const items1 = [stateFromStores];
  const obj2 = selectedCharacterTraits(savedSelection[3]);
  stateFromStores = obj2.useStateFromStores(items1, () => {
    const obj = selectedCharacterTraits(savedSelection[4]);
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
            const obj = selectedCharacterTraits(savedSelection[6]);
            const traitOptionRarity = obj.getTraitOptionRarity(item, tmp);
            let tmp6 = null != traitOptionRarity;
            if (tmp6) {
              let tmp8;
              if (traitOptionRarity === selectedCharacterTraits(savedSelection[7]).CheckpointTraitRarity.NITRO) {
                tmp8 = !stateFromStores;
              } else {
                const tmp3Result = selectedCharacterTraits(savedSelection[6]);
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
};
