// Module ID: 12673
// Function ID: 12674
// Name: useLastColorwayIdByOutfitId
// Dependencies: [32, 19, 12370, 504, 5895, 5894, 2]
// Exports: default

// Module 12673 (useLastColorwayIdByOutfitId)
import get_initialized from "get initialized" /* 504 */;
import CheckpointTrait from "CheckpointTrait" /* 5895 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 12370 */;
import size from "module_2" /* 2 */;

let map, map1;

let tmp;
const CheckpointCharacterTraits = tmp(5894);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useLastColorwayIdByOutfitId.tsx");

export default function useLastColorwayIdByOutfitId() {
  let first;
  let tmp6;
  const items = [CheckpointStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => CheckpointStore.selectedCharacterTraits[CheckpointTrait.CheckpointTrait.OUTFIT]);
  const useState = react.useState;
  map = new Map();
  [first, tmp6] = useState(map);
  let outfitDefaultOptionId;
  if (null != stateFromStores) {
    const tmpResult = CheckpointCharacterTraits;
    outfitDefaultOptionId = tmpResult.getOutfitDefaultOptionId(stateFromStores);
  }
  const tmp8 = null != stateFromStores && null != outfitDefaultOptionId && first.get(outfitDefaultOptionId) !== stateFromStores;
  if (tmp8) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map1 = new Map(first);
    tmp6(map1.set(outfitDefaultOptionId, stateFromStores));
  }
  return first;
};
