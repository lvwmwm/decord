// Module ID: 13935
// Function ID: 13936
// Name: useMaybeFetchCheckpointData
// Dependencies: [19, 13667, 6199, 504, 6569, 13669, 7545, 2]
// Exports: useMaybeFetchCheckpointData

// Module 13935 (useMaybeFetchCheckpointData)
import CheckpointConstants from "CheckpointConstants" /* 6199 */;
import GameActionCreators from "GameActionCreators" /* 7545 */;
import CheckpointStore2 from "CheckpointStore" /* 13667 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const CheckpointStore = CheckpointStore2;

const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
let closure_5 = CheckpointConstants.CHECKPOINT_GLOBAL_GAME_CATEGORIES;
const result = size.fileFinishedImporting("modules/checkpoint/useMaybeFetchCheckpointData.tsx");

export function useMaybeFetchCheckpointData() {
  let stateFromStoresArray;
  let obj = stateFromStoresArray(504);
  let items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => CheckpointStore.fetchState);
  const items1 = [CheckpointStore];
  const obj2 = stateFromStoresArray(504);
  stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => {
    let globalStats;
    let stats;
    ({ stats, globalStats } = CheckpointStore);
    let games1;
    if (globalStats != null) {
      games1 = globalStats.games;
    }
    const obj = stateFromStoresArray(dependencyMap[4]);
    if (!obj.hasCheckpointGames(stats)) {
      if (null != games1) {
        const items = [];
        const item = closure_1_5.forEach((item) => {
          const first = games1[item.list][0];
          if (null != first) {
            items.push(first.id);
          }
        });
        return items;
      }
    }
    let mapped;
    if (stats != null) {
      const games = stats.games;
      if (games != null) {
        const arr3 = games.games;
        mapped = arr3.map((game) => game.game.id);
      }
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  });
  const effect = react.useEffect(() => {
    const fetchState = CheckpointStore.fetchState;
    const tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
    if (!tmp) {
      const obj = stateFromStoresArray(dependencyMap[5]);
      const checkpointData = obj.fetchCheckpointData();
    }
  }, []);
  const items2 = [stateFromStoresArray];
  const effect1 = react.useEffect(() => {
    const obj = GameActionCreators;
    const gamesWithSupplementalData = obj.fetchGamesWithSupplementalData(stateFromStoresArray);
  }, items2);
  return stateFromStores;
}
