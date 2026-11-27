// Module ID: 12656
// Function ID: 12657
// Name: useFetchCheckpointGames
// Dependencies: [19, 12628, 6396, 504, 6768, 8721, 2]
// Exports: useFetchCheckpointGames

// Module 12656 (useFetchCheckpointGames)
import CheckpointConstants from "CheckpointConstants" /* 6396 */;
import GameActionCreators from "GameActionCreators" /* 8721 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 12628 */;
import size from "module_2" /* 2 */;

let closure_4 = CheckpointConstants.CHECKPOINT_GLOBAL_GAME_CATEGORIES;
const result = size.fileFinishedImporting("modules/checkpoint/useFetchCheckpointGames.tsx");

export function useFetchCheckpointGames() {
  let stateFromStoresArray;
  let obj = stateFromStoresArray(504);
  let items = [CheckpointStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
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
        const item = closure_1_4.forEach((item) => {
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
  const items1 = [stateFromStoresArray];
  const effect = react.useEffect(() => {
    const obj = GameActionCreators;
    const gamesWithSupplementalData = obj.fetchGamesWithSupplementalData(stateFromStoresArray);
  }, items1);
}
