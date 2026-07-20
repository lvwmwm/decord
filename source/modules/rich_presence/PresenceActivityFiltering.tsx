// Module ID: 10431
// Function ID: 80530
// Name: doesGameHaveRichPresence
// Dependencies: []
// Exports: doesGameHaveRichPresence

// Module 10431 (doesGameHaveRichPresence)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/rich_presence/PresenceActivityFiltering.tsx");

export const doesGameHaveRichPresence = function doesGameHaveRichPresence(id, items2) {
  if (null !== id.id) {
    if (undefined !== id.id) {
      const application = application.getApplication(id.id);
      let tmp3 = null != application && null != application.linkedGames;
      if (tmp3) {
        tmp3 = application.linkedGames.length > 0;
      }
      if (tmp3) {
        const linkedGames = application.linkedGames;
        tmp3 = undefined !== linkedGames.find((type) => {
          let tmp = type.type === arg1(closure_1[1]).GameLinkTypes.LINKED;
          if (tmp) {
            tmp = function hasRichPresenceForGame(id, arr) {
              return null != arr.find((application_id) => application_id.application_id === application_id);
            }(type.id, arg1);
          }
          return tmp;
        });
      }
      return tmp3;
    }
  }
  return false;
};
