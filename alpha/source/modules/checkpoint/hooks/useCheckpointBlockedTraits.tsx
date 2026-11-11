// Module ID: 14195
// Function ID: 14196
// Name: useCheckpointBlockedTraits
// Dependencies: [1385, 14150, 504, 2107, 6359, 6358, 2]
// Exports: default

// Module 14195 (useCheckpointBlockedTraits)
import get_initialized from "get initialized" /* 504 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6358 */;
import UserStore from "UserStore" /* 1385 */;
import CheckpointStore from "CheckpointStore" /* 14150 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointBlockedTraits.tsx");

export default function useCheckpointBlockedTraits() {
  let currentUser;
  let obj = get_initialized;
  const items = [CheckpointStore, UserStore];
  return obj.useStateFromStoresArray(items, () => {
    let closure_0;
    let closure_1;
    let closure_2;
    let hasNitro;
    let savedCharacter;
    ({ selectedCharacterTraits: closure_0, stats: closure_1, character: closure_2 } = hasNitro);
    let obj = closure_0(stats[3]);
    hasNitro = obj.isPremium(currentUser.getCurrentUser());
    const values = Object.values(closure_0(stats[4]).CheckpointTrait);
    return values.filter((item) => {
      let result = null != tmp;
      if (result) {
        const obj2 = { stats, hasNitro, savedCharacter };
        const obj = CheckpointCharacterTraits;
        result = obj.isTraitSelectionLocked(item, tmp, obj2);
      }
      return result;
    });
  });
};
