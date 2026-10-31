// Module ID: 19566
// Function ID: 19567
// Name: useGameRecords
// Dependencies: [2014, 7480, 504, 1379, 2]
// Exports: default

// Module 19566 (useGameRecords)
import GlobalUtils from "GlobalUtils" /* 1379 */;
import GameStore from "GameStore" /* 2014 */;
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
