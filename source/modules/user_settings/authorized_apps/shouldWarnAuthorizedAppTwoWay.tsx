// Module ID: 11628
// Function ID: 90296
// Name: isAuthorizedAppTwoWay
// Dependencies: [8906, 2]
// Exports: useShouldWarnAuthorizedAppTwoWay

// Module 11628 (isAuthorizedAppTwoWay)
function isAuthorizedAppTwoWay(id) {
  let hasItem = require(8906) /* set */.ConsoleOAuthApplications.XBOX_APPLICATION_ID === id;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = require(8906) /* set */.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(id);
  }
  return hasItem;
}
const result = require("set").fileFinishedImporting("modules/user_settings/authorized_apps/shouldWarnAuthorizedAppTwoWay.tsx");

export default isAuthorizedAppTwoWay;
export const useShouldWarnAuthorizedAppTwoWay = function useShouldWarnAuthorizedAppTwoWay(id) {
  return isAuthorizedAppTwoWay(id);
};
