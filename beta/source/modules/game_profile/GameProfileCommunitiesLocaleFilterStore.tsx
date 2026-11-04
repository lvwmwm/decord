// Module ID: 9617
// Function ID: 9618
// Name: GameProfileCommunitiesLocaleFilterStore
// Dependencies: [560, 2]
// Exports: useGameProfileCommunitiesLocaleFilterExclusions

// Module 9617 (GameProfileCommunitiesLocaleFilterStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let excludedLocales, gameId;

const set = new Set();
const obj = module_560.create((arg0) => {
  excludedLocales = arg0;
  return {
    gameId: null,
    excludedLocales,
    toggleLocale(arg0, arg1) {
      closure_0 = arg0;
      let closure_1 = arg1;
      closure_0((gameId) => {
        gameId = closure_0;
        const tmp2 = gameId.gameId === closure_0 ? gameId.excludedLocales : closure_2_0;
        excludedLocales = new Set(tmp2);
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
const result = size.fileFinishedImporting("modules/game_profile/GameProfileCommunitiesLocaleFilterStore.tsx");

export default obj;
export function useGameProfileCommunitiesLocaleFilterExclusions(arg0) {
  let closure_0 = arg0;
  return obj((gameId) => gameId.gameId === closure_0 ? gameId.excludedLocales : set);
}
