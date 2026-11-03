// Module ID: 15095
// Function ID: 15096
// Name: useAreGamesLoading
// Dependencies: [2143, 504, 2]
// Exports: default

// Module 15095 (useAreGamesLoading)
import GameStore from "GameStore" /* 2143 */;
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
