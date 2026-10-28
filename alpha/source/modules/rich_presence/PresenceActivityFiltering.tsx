// Module ID: 11241
// Function ID: 11242
// Name: PresenceActivityFiltering
// Dependencies: [2042, 1997, 2]
// Exports: doesGameHaveRichPresence

// Module 11241 (PresenceActivityFiltering)
import Server from "Server" /* 1997 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
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
