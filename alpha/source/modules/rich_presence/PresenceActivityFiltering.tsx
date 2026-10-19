// Module ID: 11077
// Function ID: 11078
// Name: PresenceActivityFiltering
// Dependencies: [5540, 2000, 2]
// Exports: doesGameHaveRichPresence

// Module 11077 (PresenceActivityFiltering)
import Server from "Server" /* 2000 */;
import ApplicationStore from "ApplicationStore" /* 5540 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rich_presence/PresenceActivityFiltering.tsx");

export const doesGameHaveRichPresence = function doesGameHaveRichPresence(visibleGame, items3) {
  if (null !== visibleGame.id) {
    if (undefined !== visibleGame.id) {
      let tmp = ApplicationStore;
      const application = ApplicationStore.getApplication(visibleGame.id);
      let tmp3 = null != application && null != application.linkedGames && application.linkedGames.length > 0;
      if (tmp3) {
        const linkedGames = application.linkedGames;
        tmp3 = undefined !== linkedGames.find((type) => {
          let tmp = type.type === Server.GameLinkTypes.LINKED;
          if (tmp) {
            const id = type.id;
            tmp = null != items3.find((application_id) => application_id.application_id === id);
          }
          return tmp;
        });
      }
      return tmp3;
    }
  }
  return false;
};
