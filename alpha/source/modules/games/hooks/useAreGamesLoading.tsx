// Module ID: 10216
// Function ID: 10217
// Name: useAreGamesLoading
// Dependencies: [2140, 504, 2]
// Exports: default

// Module 10216 (useAreGamesLoading)
import GameStore from "GameStore" /* 2140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/games/hooks/useAreGamesLoading.tsx");

export default function useAreGamesLoading(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GameStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let game;
    return closure_0.some((item) => {
      const tmp = null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item);
      return tmp;
    });
  }, items1);
};
