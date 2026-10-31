// Module ID: 11532
// Function ID: 11533
// Name: PresenceActivityFiltering
// Dependencies: [2038, 1992, 2]
// Exports: doesGameHaveRichPresence

// Module 11532 (PresenceActivityFiltering)
import Server from "Server" /* 1992 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rich_presence/PresenceActivityFiltering.tsx");

export function doesGameHaveRichPresence(visibleGame, items3) {
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
}
