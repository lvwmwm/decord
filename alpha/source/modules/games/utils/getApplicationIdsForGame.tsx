// Module ID: 14332
// Function ID: 14333
// Name: getApplicationIdsForGame
// Dependencies: [2040, 2015, 504, 2]
// Exports: default, useApplicationIdsForGame

// Module 14332 (getApplicationIdsForGame)
import ApplicationStore from "ApplicationStore" /* 2040 */;
import GameStore from "GameStore" /* 2015 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

const result = size.fileFinishedImporting("modules/games/utils/getApplicationIdsForGame.tsx");

export default function getApplicationIdsForGame(arg0) {
  set = new Set();
  if (null != arg0) {
    set.add(arg0);
    const game = GameStore.getGame(arg0);
    if (game != null) {
      const linkedApplications = game.linkedApplications;
      if (linkedApplications != null) {
        const item = linkedApplications.forEach((id) => set.add(id.id));
      }
    }
    const application = ApplicationStore.getApplication(arg0);
    if (application != null) {
      const linkedGames = application.linkedGames;
      if (linkedGames != null) {
        const item1 = linkedGames.forEach((id) => {
          set.add(id.id);
          game = game.getGame(id.id);
          if (game != null) {
            const linkedApplications = game.linkedApplications;
            if (linkedApplications != null) {
              const item = linkedApplications.forEach((id) => set.add(id.id));
            }
          }
        });
      }
    }
  }
  return set;
};
export function useApplicationIdsForGame(gameId) {
  _require = gameId;
  const items = [GameStore, ApplicationStore];
  const items1 = [gameId];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    const _Array = Array;
    set = new Set();
    if (null != gameId) {
      set.add(tmp);
      let game = GameStore.getGame(tmp);
      if (game != null) {
        let linkedApplications = game.linkedApplications;
        if (linkedApplications != null) {
          let item = linkedApplications.forEach((id) => set.add(id.id));
        }
      }
      const application = ApplicationStore.getApplication(tmp);
      if (application != null) {
        const linkedGames = application.linkedGames;
        if (linkedGames != null) {
          const item1 = linkedGames.forEach((id) => {
            set.add(id.id);
            game = game.getGame(id.id);
            if (game != null) {
              const linkedApplications = game.linkedApplications;
              if (linkedApplications != null) {
                const item = linkedApplications.forEach((id) => set.add(id.id));
              }
            }
          });
        }
      }
    }
    return from(set);
  }, items1);
}
