// Module ID: 11448
// Function ID: 11449
// Name: getApplicationIdsForGame
// Dependencies: [4522, 4505, 2]
// Exports: default

// Module 11448 (getApplicationIdsForGame)
import closure_0 from "addApplication" /* 4522 */;
import closure_1 from "handleLoadMessages" /* 4505 */;

const result = require("set").fileFinishedImporting("modules/games/utils/getApplicationIdsForGame.tsx");

export default function getApplicationIdsForGame(closure_0) {
  const set = new Set();
  if (null != closure_0) {
    set.add(closure_0);
    game = game.getGame(closure_0);
    if (game != null) {
      let linkedApplications = game.linkedApplications;
      if (linkedApplications != null) {
        let item = linkedApplications.forEach((id) => set.add(id.id));
      }
    }
    const application = set.getApplication(closure_0);
    if (application != null) {
      const linkedGames = application.linkedGames;
      if (linkedGames != null) {
        const item1 = linkedGames.forEach((id) => {
          set.add(id.id);
          const game = closure_1_1.getGame(id.id);
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
