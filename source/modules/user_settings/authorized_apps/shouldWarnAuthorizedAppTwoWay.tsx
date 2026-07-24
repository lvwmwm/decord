// Module ID: 11659
// Function ID: 90552
// Name: isAuthorizedAppTwoWay
// Dependencies: [9018, 2]
// Exports: useShouldWarnAuthorizedAppTwoWay

// Module 11659 (isAuthorizedAppTwoWay)
function isAuthorizedAppTwoWay(id) {
  let hasItem = require(9018) /* set */.ConsoleOAuthApplications.XBOX_APPLICATION_ID === id;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = require(9018) /* set */.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(id);
  }
  return hasItem;
}
const result = require("set").fileFinishedImporting("modules/user_settings/authorized_apps/shouldWarnAuthorizedAppTwoWay.tsx");

export default isAuthorizedAppTwoWay;
export const useShouldWarnAuthorizedAppTwoWay = function useShouldWarnAuthorizedAppTwoWay(id) {
  return isAuthorizedAppTwoWay(id);
};
