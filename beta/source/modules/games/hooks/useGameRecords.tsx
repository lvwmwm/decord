// Module ID: 10220
// Function ID: 10221
// Name: useGameRecords
// Dependencies: [2140, 9053, 504, 1254, 2]
// Exports: default

// Module 10220 (useGameRecords)
import GlobalUtils from "GlobalUtils" /* 1254 */;
import GameStore from "GameStore" /* 2140 */;
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
