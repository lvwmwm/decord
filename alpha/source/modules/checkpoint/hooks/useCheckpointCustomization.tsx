// Module ID: 13597
// Function ID: 13598
// Name: useCheckpointCustomization
// Dependencies: [19, 1385, 13571, 504, 2112, 6232, 6231, 2]
// Exports: default

// Module 13597 (useCheckpointCustomization)
import CheckpointTrait from "CheckpointTrait" /* 6232 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import CheckpointStore from "CheckpointStore" /* 13571 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointCustomization.tsx");

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
  let obj2 = selectedCharacterTraits(savedSelection[3]);
  const items1 = [stateFromStores];
  stateFromStores = obj2.useStateFromStores(items1, () => {
    const obj = selectedCharacterTraits(savedSelection[4]);
    return obj.isPremium(stateFromStores.getCurrentUser());
  });
  const items2 = [stateFromStores, savedSelection, selectedCharacterTraits, stats];
  const obj3 = {
    selectedCharacterTraits,
    blockedTraits: stats.useMemo(() => {
      let hasNitro;
      let savedCharacter;
      const values = Object.values(CheckpointTrait.CheckpointTrait);
      return values.filter((item) => {
        let result = null != tmp;
        if (result) {
          const obj2 = { stats, hasNitro, savedCharacter };
          const obj = selectedCharacterTraits(savedSelection[6]);
          result = obj.isTraitSelectionLocked(item, tmp, obj2);
        }
        return result;
      });
    }, items2)
  };
  return obj3;
};
