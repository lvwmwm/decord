// Module ID: 11668
// Function ID: 90452
// Name: isAuthorizedAppTwoWay
// Dependencies: [8950, 2]
// Exports: useShouldWarnAuthorizedAppTwoWay

// Module 11668 (isAuthorizedAppTwoWay)
function isAuthorizedAppTwoWay(id) {
  let hasItem = require(8950) /* set */.ConsoleOAuthApplications.XBOX_APPLICATION_ID === id;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = require(8950) /* set */.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(id);
  }
  return hasItem;
}
const result = require("set").fileFinishedImporting("modules/user_settings/authorized_apps/shouldWarnAuthorizedAppTwoWay.tsx");

export default isAuthorizedAppTwoWay;
export const useShouldWarnAuthorizedAppTwoWay = function useShouldWarnAuthorizedAppTwoWay(id) {
  return isAuthorizedAppTwoWay(id);
};
