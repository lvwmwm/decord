// Module ID: 15174
// Function ID: 15175
// Name: useGameRecords
// Dependencies: [2143, 7620, 504, 1380, 2]
// Exports: default

// Module 15174 (useGameRecords)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import GameStore from "GameStore" /* 2143 */;
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
