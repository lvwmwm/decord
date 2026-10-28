// Module ID: 19211
// Function ID: 19212
// Name: useGameRecords
// Dependencies: [2019, 558, 576, 7443, 1385, 504, 2]

// Module 19211 (useGameRecords)
import GlobalUtils from "GlobalUtils" /* 1385 */;
import GameStore from "GameStore" /* 2019 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameRecords(arg0) {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const obj2 = require("useGame");
  const games = obj2.useGames(arg0);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let game;
      const mapped = closure_0.map((item) => game.getGame(item));
      return mapped.filter(GlobalUtils.isNotNullish);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
}) : (function useGameRecords(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("useGame");
  const games = obj.useGames(arg0);
  const items = [GameStore];
  const items1 = [arg0];
  const obj2 = require("get initialized");
  return obj2.useStateFromStoresArray(items, () => {
    let game;
    const mapped = closure_0.map((item) => game.getGame(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items1);
});
const result = size.fileFinishedImporting("modules/games/hooks/useGameRecords.tsx");

export default tmp2;
