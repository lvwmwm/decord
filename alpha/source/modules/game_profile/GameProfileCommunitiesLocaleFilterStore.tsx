// Module ID: 9510
// Function ID: 9511
// Name: GameProfileCommunitiesLocaleFilterStore
// Dependencies: [570, 558, 576, 2]

// Module 9510 (GameProfileCommunitiesLocaleFilterStore)
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const set = new Set();
let obj = module_570.create((arg0) => {
  let closure_0 = arg0;
  return {
    gameId: null,
    excludedLocales: set,
    toggleLocale(dependencyMap, arg1) {
      closure_0 = dependencyMap;
      let closure_1 = arg1;
      closure_0((gameId) => {
        gameId = closure_0;
        const tmp2 = gameId.gameId === closure_0 ? gameId.excludedLocales : closure_2_2;
        const excludedLocales = new Set(tmp2);
        if (excludedLocales.has(closure_1)) {
          excludedLocales.delete(closure_1);
        } else {
          excludedLocales.add(closure_1);
        }
        return { gameId, excludedLocales };
      });
    }
  };
});
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileCommunitiesLocaleFilterExclusions(arg0) {
  let closure_0;
  let tmp2;
  _require = arg0;
  obj = require("react");
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function u(gameId) {
      return gameId.gameId === closure_0 ? gameId.excludedLocales : set;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return obj(tmp2);
}) : (function useGameProfileCommunitiesLocaleFilterExclusions(arg0) {
  let closure_0 = arg0;
  return obj((gameId) => gameId.gameId === closure_0 ? gameId.excludedLocales : set);
});
const result = size.fileFinishedImporting("modules/game_profile/GameProfileCommunitiesLocaleFilterStore.tsx");

export default obj;
export const useGameProfileCommunitiesLocaleFilterExclusions = tmp4;
