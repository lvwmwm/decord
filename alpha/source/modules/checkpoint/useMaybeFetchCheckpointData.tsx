// Module ID: 13654
// Function ID: 13655
// Name: useMaybeFetchCheckpointData
// Dependencies: [19, 13386, 504, 13397, 7475, 2]
// Exports: useMaybeFetchCheckpointData

// Module 13654 (useMaybeFetchCheckpointData)
import GameActionCreators from "GameActionCreators" /* 7475 */;
import CheckpointStore2 from "CheckpointStore" /* 13386 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const CheckpointStore = CheckpointStore2;
let dependencyMap;

let c2;
let c3;
({ useEffect: c2, useMemo: c3 } = react);
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
const result = size.fileFinishedImporting("modules/checkpoint/useMaybeFetchCheckpointData.tsx");

export function useMaybeFetchCheckpointData() {
  let closure_1;
  let stateFromStores1;
  let obj = stateFromStores1(504);
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => CheckpointStore.fetchState);
  const items1 = [CheckpointStore];
  const obj2 = stateFromStores1(504);
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const stats = CheckpointStore.stats;
    let tmp;
    if (stats != null) {
      const games = stats.games;
      if (games != null) {
        tmp = games.games;
      }
    }
    return tmp;
  });
  const items2 = [stateFromStores1];
  const tmp3 = closure_3(() => {
    let mapped;
    const arr = stateFromStores1;
    if (stateFromStores1 != null) {
      mapped = arr.map((game) => game.game.id);
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  }, items2);
  dependencyMap = tmp3;
  closure_2(() => {
    const fetchState = CheckpointStore.fetchState;
    const tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
    if (!tmp) {
      const obj = stateFromStores1(closure_1[3]);
      const checkpointData = obj.fetchCheckpointData();
    }
  }, []);
  const items3 = [tmp3];
  closure_2(() => {
    const obj = GameActionCreators;
    const gamesWithSupplementalData = obj.fetchGamesWithSupplementalData(closure_1);
  }, items3);
  return stateFromStores;
}
