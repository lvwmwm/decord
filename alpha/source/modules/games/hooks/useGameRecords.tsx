// Module ID: 15167
// Function ID: 15168
// Name: useGameRecords
// Dependencies: [2138, 7567, 504, 1380, 2]
// Exports: default

// Module 15167 (useGameRecords)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import GameStore from "GameStore" /* 2138 */;
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
