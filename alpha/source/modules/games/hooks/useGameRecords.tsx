// Module ID: 10876
// Function ID: 10877
// Name: useGameRecords
// Dependencies: [2141, 9545, 504, 1255, 2]
// Exports: default

// Module 10876 (useGameRecords)
import GlobalUtils from "GlobalUtils" /* 1255 */;
import GameStore from "GameStore" /* 2141 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/games/hooks/useGameRecords.tsx");

export default function useGameRecords(memo) {
  _require = memo;
  const obj = require("useGame");
  const games = obj.useGames(memo);
  const items = [GameStore];
  const items1 = [memo];
  const obj2 = require("get initialized");
  return obj2.useStateFromStoresArray(items, () => {
    let game;
    const mapped = memo.map((item) => game.getGame(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items1);
};
